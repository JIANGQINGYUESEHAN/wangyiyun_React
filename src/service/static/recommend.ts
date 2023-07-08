import hyRequest from "..";



export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}
export function getRecommendBody(limit = 30) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
