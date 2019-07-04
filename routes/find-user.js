const users = [
  { id: 1, name: 'pablopunk' },
  { id: 2, name: 'xpunks' },
  { id: 3, name: 'pablovarela' }
]

export default (req, res) => {
  if (!req.query.id) {
    res.statusCode = 403
    return res.end('403')
  }

  const user = users.find(({ id }) => id === parseInt(req.query.id))

  if (!user) {
    res.statusCode = 404
    return res.end('404')
  }

  return res.end(JSON.stringify(user))
}
