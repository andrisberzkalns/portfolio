type GlowPoint = {
  x: number
  y: number
}

type RgbColor = {
  r: number
  g: number
  b: number
}

type HeroGlowOptions = {
  primaryColor: RgbColor
  secondaryColor: RgbColor
  ambientColor: RgbColor
  primaryOpacity: number
  secondaryOpacity: number
  ambientOpacity: number
  primaryRadiusScale: number
  secondaryRadiusScale: number
  ambientRadiusScale: number
  centerFadeRadius: number
  centerFadeStrength: number
  centerFadeExponent: number
  smoothing: number
  tiltStrength: number
}

const defaultOptions: HeroGlowOptions = {
  primaryColor: { r: 88, g: 214, b: 255 },
  secondaryColor: { r: 255, g: 176, b: 120 },
  ambientColor: { r: 190, g: 225, b: 230 },
  primaryOpacity: 0.26,
  secondaryOpacity: 0.18,
  ambientOpacity: 0.08,
  primaryRadiusScale: 0.62,
  secondaryRadiusScale: 0.95,
  ambientRadiusScale: 1.25,
  centerFadeRadius: 0.22,
  centerFadeStrength: 1,
  centerFadeExponent: 2.8,
  smoothing: 0.08,
  tiltStrength: 0.08,
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const toRgba = (color: RgbColor, opacity: number) =>
  `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`

export class HeroGlowRenderer {
  private readonly canvas: HTMLCanvasElement
  private readonly ctx: CanvasRenderingContext2D
  private readonly options: HeroGlowOptions
  private animationFrameId: number | null = null
  private size = { width: 0, height: 0, dpr: 1 }
  private target: GlowPoint = { x: 0.5, y: 0.35 }
  private current: GlowPoint = { x: 0.5, y: 0.35 }
  private tilt: GlowPoint = { x: 0, y: 0 }

  constructor(canvas: HTMLCanvasElement, options?: Partial<HeroGlowOptions>) {
    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('HeroGlowRenderer: 2D context unavailable.')
    }
    this.canvas = canvas
    this.ctx = context
    this.options = { ...defaultOptions, ...options }
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    this.size = { width: rect.width, height: rect.height, dpr }
    this.canvas.width = Math.max(1, Math.round(rect.width * dpr))
    this.canvas.height = Math.max(1, Math.round(rect.height * dpr))
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  setTarget(x: number, y: number) {
    this.target = { x: clamp(x, 0, 1), y: clamp(y, 0, 1) }
  }

  setTilt(x: number, y: number) {
    this.tilt = { x: clamp(x, -1, 1), y: clamp(y, -1, 1) }
  }

  start() {
    if (this.animationFrameId !== null) {
      return
    }
    this.animationFrameId = window.requestAnimationFrame(this.renderFrame)
  }

  stop() {
    if (this.animationFrameId === null) {
      return
    }
    window.cancelAnimationFrame(this.animationFrameId)
    this.animationFrameId = null
  }

  renderOnce() {
    this.drawFrame()
  }

  private renderFrame = () => {
    this.drawFrame()
    this.animationFrameId = window.requestAnimationFrame(this.renderFrame)
  }

  private drawFrame() {
    const { width, height } = this.size
    if (width === 0 || height === 0) {
      return
    }

    const tiltOffsetX = this.tilt.x * this.options.tiltStrength
    const tiltOffsetY = this.tilt.y * this.options.tiltStrength
    const targetX = clamp(this.target.x + tiltOffsetX, 0, 1)
    const targetY = clamp(this.target.y + tiltOffsetY, 0, 1)

    this.current.x += (targetX - this.current.x) * this.options.smoothing
    this.current.y += (targetY - this.current.y) * this.options.smoothing

    const centerX = width * this.current.x
    const centerY = height * this.current.y
    const minDimension = Math.min(width, height)
    const primaryRadius = Math.max(
      1,
      minDimension * this.options.primaryRadiusScale,
    )
    const secondaryRadius = Math.max(
      1,
      minDimension * this.options.secondaryRadiusScale,
    )
    const ambientRadius = Math.max(
      1,
      minDimension * this.options.ambientRadiusScale,
    )
    const oppositeX = width * (1 - this.current.x)
    const oppositeY = height * (1 - this.current.y)
    const distanceFromCenter = Math.hypot(
      this.current.x - 0.5,
      this.current.y - 0.5,
    )
    const maxDistance = Math.hypot(0.5, 0.5)
    const fadeStart = clamp(this.options.centerFadeRadius, 0, maxDistance)
    const fadeRange = Math.max(0.001, maxDistance - fadeStart)
    const fadeProgress = clamp((distanceFromCenter - fadeStart) / fadeRange, 0, 1)
    const fadeCurve = Math.pow(fadeProgress, this.options.centerFadeExponent)
    const fadeFactor = clamp(
      (1 - this.options.centerFadeStrength) +
        fadeCurve * this.options.centerFadeStrength,
      0,
      1,
    )

    this.ctx.clearRect(0, 0, width, height)
    this.ctx.globalCompositeOperation = 'screen'

    const primaryGradient = this.ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      primaryRadius,
    )
    primaryGradient.addColorStop(
      0,
      toRgba(
        this.options.primaryColor,
        this.options.primaryOpacity * fadeFactor,
      ),
    )
    primaryGradient.addColorStop(
      0.5,
      toRgba(
        this.options.primaryColor,
        this.options.primaryOpacity * 0.5 * fadeFactor,
      ),
    )
    primaryGradient.addColorStop(
      1,
      toRgba(this.options.primaryColor, 0),
    )
    this.ctx.fillStyle = primaryGradient
    this.ctx.fillRect(0, 0, width, height)

    const secondaryGradient = this.ctx.createRadialGradient(
      oppositeX,
      oppositeY,
      0,
      oppositeX,
      oppositeY,
      secondaryRadius,
    )
    secondaryGradient.addColorStop(
      0,
      toRgba(
        this.options.secondaryColor,
        this.options.secondaryOpacity * fadeFactor,
      ),
    )
    secondaryGradient.addColorStop(
      0.6,
      toRgba(
        this.options.secondaryColor,
        this.options.secondaryOpacity * 0.4 * fadeFactor,
      ),
    )
    secondaryGradient.addColorStop(1, toRgba(this.options.secondaryColor, 0))
    this.ctx.fillStyle = secondaryGradient
    this.ctx.fillRect(0, 0, width, height)

    const ambientGradient = this.ctx.createRadialGradient(
      width * 0.5,
      height * 0.45,
      0,
      width * 0.5,
      height * 0.45,
      ambientRadius,
    )
    ambientGradient.addColorStop(
      0,
      toRgba(
        this.options.ambientColor,
        this.options.ambientOpacity * fadeFactor,
      ),
    )
    ambientGradient.addColorStop(1, toRgba(this.options.ambientColor, 0))
    this.ctx.fillStyle = ambientGradient
    this.ctx.fillRect(0, 0, width, height)

    this.ctx.globalCompositeOperation = 'source-over'
  }
}

export type { HeroGlowOptions }
