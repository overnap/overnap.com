import { useMemo } from "react"

const hslToRgb = (h: number, s: number, l: number) => {
  let r, g, b

  if (s == 0){
      r = g = b = l
  } else {
      const hueToRgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1/6) return p + (q - p) * 6 * t
        if (t < 1/2) return q
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
        return p
      }

      let q = l < 0.5 ? l * (1 + s) : l + s - l * s
      let p = 2 * l - q
      r = hueToRgb(p, q, h + 1/3)
      g = hueToRgb(p, q, h)
      b = hueToRgb(p, q, h - 1/3)
  }

  const map = (value: number) => Math.min(Math.floor(value*256), 255)
  return [map(r), map(g), map(b)]
}

const useTagColor = (tag: string) => {
  // Constants
  const modulo = 1e9+7
  const crc = 0x04C11DB7

  const color = useMemo(() => {
    // String to hue
    var hue = 0
    for (let i=0; i<tag.length; i+=1) {
      hue += (hue * crc + tag.charCodeAt(i)) % modulo
    }

    const [r, g, b] = hslToRgb((hue % modulo) / modulo, 0.6, 0.91)
    
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }, [tag])

  return color
}

export default useTagColor
