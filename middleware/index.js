const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log('logging route', req.originalUrl)
  next()
}

const authenticate = (req, res, next) => {
  if(typeof bearerHeader !== undefined){
  const bearerHeader = req.headers['authorization']
  const bearer = bearerHeader.split(' ')
  const bearerToken = bearer[1]
  req.token = bearerToken;
  next()
} else {
  res.sendStatus(401);
}
}

module.exports = {
  logger,
  authenticate
}