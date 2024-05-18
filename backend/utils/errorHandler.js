/**
 * Custom error handler class.
 * @class
 * @extends Error
 */
class ErrorHandler extends Error {
  constructor (message, statusCode) {
    super(message)
    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor)
  }
}

// Export error handler.
export default ErrorHandler
