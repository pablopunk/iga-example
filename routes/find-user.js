const users = [
  { id: 1, name: 'pablopunk' },
  { id: 2, name: 'xpunks' },
  { id: 3, name: 'pablovarela' }
]

export default (req, res) => {
  if (!req.query.id) {
    return 403
  }

  const user = users.find(({ id }) => id === parseInt(req.query.id))

  if (!user) {
    return 404
  }

  return user
}
