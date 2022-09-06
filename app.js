var express = require('express')
var cors = require('cors')
var app = express()

require('dotenv').config()

var corsOptions = {
  // origin: 'https://cross-origin-cookies-next.vercel.app'
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello' })
})

app.get('/test', (req, res) => {
  console.log('headers', req.headers)
  const cookie = req.cookies?.['myCookie'] ?? '-'
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    // 'https://cross-origin-cookies-next.vercel.app'
    'http://localhost:3000'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Cookie, Set-Cookie')
  // res.setHeader('Access-Control-Allow-Headers', process.env.ALLOWED_ORIGIN)
  res.status(200).json({message: 'OK 1', cookie})
})

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running on port 3000')
})
