const performRequest = require('./request')
const reduce = require('./utils').reduce
const writeCSSFile = require('./writers')

performRequest(json => {
  try {
    const validAttrs = reduce((final, value, key) => {
      const matched = value.match(/[a-z\-]+\:[a-z\-]+\;/)
      if(matched) final[key] = matched[0]
      return final
    }, {}, json.css.snippets)
    writeCSSFile(validAttrs)
  } catch (err) {
    console.log('Unable to Update', err)
  }
})
