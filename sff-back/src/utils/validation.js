import Boom from '@hapi/boom'


const failAction = async (request, h, err) => {
  if (process.env.NODE_ENV === 'production') {
    console.error('ValidationError:', err.message)

    throw Boom.badRequest(`Invalid request payload input`)
  } else {
    console.error(err)
    throw err
  }
}

export { failAction }