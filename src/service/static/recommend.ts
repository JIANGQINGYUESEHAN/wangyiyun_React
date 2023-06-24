import hyRequest from "..";



export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}
