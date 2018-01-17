const api = {}

api.greeting = (req, res) => {
  const response = {hello: "world"}
  res.status(200).json(response);
}

module.exports = api;