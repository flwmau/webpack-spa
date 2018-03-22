export const index = (req, res) => {
  res.json({
    messages: [
      'Welcome to Webapp Solution Middleware'
    ]
  })
}

export const notFound = (req, res) => {
  res
    .sendStatus(404)
}