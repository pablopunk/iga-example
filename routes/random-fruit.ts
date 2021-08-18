const fruits = [
  'apple',
  'orange',
  'pear',
  'tomato',
  'pineapple'
]

export default (_req, res) => {
  const randomIndex = Math.floor((Math.random() * fruits.length))

  return fruits[randomIndex]
}
