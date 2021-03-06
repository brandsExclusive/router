module.exports = {
  router: require('./lib/router'),
  errors: require('./lib/errors'),
  errorHandler: require('./lib/middleware/error-handler'),
  generateTypes: require('./lib/generate-types'),
  initializeSentry: require('./lib/sentry').initialize
}
