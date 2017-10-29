const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://www.acdh.fr/api/v1' : 'http://localhost:4000/api/v1'
}