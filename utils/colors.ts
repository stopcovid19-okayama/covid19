export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#00A040'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#E813A4'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#E813A4'
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#cbe1c8'
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#00A040',
  fillColor: '#00A040'
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#1b4d30'
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#e2eee2'
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
    G: surfaceStyleG
  }
  return styles[series]
}
