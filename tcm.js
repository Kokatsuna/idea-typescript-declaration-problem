const fs = require('fs')

const glob = require('glob')
const typedCssModules = require('typed-css-modules')

const type = process.argv[2]
const DtsCreator = typedCssModules.default
const generateTypeFile = path => {
  const creator = new DtsCreator({
    camelCase: true,
  })
  creator.create(path).then(content => {
    content.writeFile(definition => {
      const result = definition.replace(/[";]*/g, '')
      return `// Generated automatically, do not edit\n\n${result.slice(0, -1)}`
    })
  })
}

if (type === 'clear') {
  glob('./src/components/**/*.css.d.ts', (err, paths) => {
    if (err) {
      console.log(err)
    }

    paths.forEach(path => {
      try {
        fs.unlinkSync(path)
      } catch (error) {
        console.log(error)
      }
    })
  })
} else {
  glob('./src/components/**/*.css', (err, paths) => {
    if (err) {
      console.log(err)
    }

    paths.forEach(path => {
      try {
        generateTypeFile(path)
      } catch (error) {
        console.log(error)
      }
    })
  })
}
