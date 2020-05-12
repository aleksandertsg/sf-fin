import conf from './default.js'


let confOverride

if (['development', 'test', 'production'].indexOf(process.env.NODE_ENV) > -1) {
  try {
    confOverride = require(`./${process.env.NODE_ENV}`)
  } catch (e) {
    console.warn(e)
  }
}

export default { ...conf, ...confOverride }
