const https = require('https')
module.exports = success => {
  const options = {
    host: 'cdn.rawgit.com',
    path: '/emmetio/emmet/master/lib/snippets.json',
    method: 'GET',
    headers: {},
  };

  const req = https.request(options, res => {
    res.setEncoding('utf-8')
    var responseString = ''

    res.on('data', data => {
      responseString += data
    })

    res.on('end', () => {
      const responseObject = JSON.parse(responseString)
      success(responseObject)
    });
  });

  req.write('{}')
  req.end()
}
