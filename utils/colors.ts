export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#E813A4'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#E813A4'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#E813A4',
  fillColor: '#E813A4'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
