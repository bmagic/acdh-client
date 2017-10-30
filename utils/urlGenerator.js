export default function generateUrl (url) {
  if (url.indexOf('http') === 0) {
    return url
  } else {
    return `${process.env.DATA_URL}/${url}`
  }
}
