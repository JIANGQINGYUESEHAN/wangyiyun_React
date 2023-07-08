export function ImageSize(Url: string, width: number, height: number = width) {
  return Url + `?param=${width}y${height}`
}
export function CountShow(count: number) {
  if (count > 10000) {
    return (count / 10000).toFixed(1) + '万'
  } else {
    return count
  }
}
