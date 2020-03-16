const pkg = require('../package.json')
const micro = require('micro')



const bootstrapService = props => {
  console.log(`[InBeverages] Bootstrapping started...`)
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        console.log(`[InBeverages] Bootstrapping complete!`)
        return resolve({...props})
    }, 3000)
  })
}

const Init = async (props) => {
  try {

    console.log(`[InBeverages] Initialization started...`)
    console.log('---------------------------------------')
    console.log(`                                       `)

      const bootStrap = await bootstrapService(props)

      if(!bootStrap) {
        console.error(`[InBeverages] Bootstrap Failed!`)
        throw new Error(`InBeverages failed build initialization`)
      }

      console.log(`                                      `)
      console.log(`[InBeverages] Initialization complete!`)
      console.log('--------------------------------------')

      return bootStrap

  }
  catch(err) {
    console.error(err)
    process.exit(1)
  }
}



  module.exports = micro(async (req, res) => {
    try {
      const init = await Init(pkg)

      if(!init) {
        console.warn(`[InBeverages] Microservice failed to initialize!`)
        throw new Error(init)
      }

      console.info(`[InBeverages] Microservice up and running!`)
      return init
    }
    catch(err) {
      console.warn(`[InBeverages] Microservice is NOT running!`)
      console.error(err)
    }
  })
