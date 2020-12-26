export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#E813A4'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#ebc0df'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#00A040',
  fillColor: '#00A040'
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#00A040',
  fillColor: '#00A040'
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#00A040',
  fillColor: '#00A040'
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#00A040',
  fillColor: '#00A040'
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#00A040',
  fillColor: '#00A040'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    case 4:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC, surfaceStyleG]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}

export function getGraphSeriesColor(series: Series) {
  const styles: { [key in Series]: SurfaceStyle } = {
    A: surfaceStyleA,
    B: surfaceStyleB,
    C: surfaceStyleC,
    D: surfaceStyleD,
    E: surfaceStyleE,
    F: surfaceStyleF,
    G: surfaceStyleG,
  }
  return styles[series]
}
