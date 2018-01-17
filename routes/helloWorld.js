module.exports = (app) => {
  app.route('/hello')
  .get(app.api.helloWorld.greeting);
  return app
}