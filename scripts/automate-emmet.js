const performRequest = require('./request')
const U = require('./utils')
const writeCSSClass = require('./writers').writeCSSClass

performRequest(json => {
  const snippets = U.evalObjectValue('css.snippets', json)
  if(snippets) {
    const validAttrs = U.reduce((final, value, key) => {
      const matched = value.match(/[a-z\-]+\:[a-z\-]+\;/)
      if(matched) final[key] = matched[0]
      return final
    }, {}, snippets)
    const css = writeCSSClass(validAttrs)
    console.log(css)
  }
})
