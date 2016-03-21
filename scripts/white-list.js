/*
  Items with ':' at the end will match the exact key word, otherwise
  they'll match only the start. For instance: 'overflow' will match 'overflow-y'
  while 'border:' will not match 'border-style'
*/

module.exports = [
  'align-items:',
  'background-size:',
  'border:',
  'border-style:',
  'display:',
  'flex-',
  'float:',
  'justify-content:',
  'list-style:',
  'overflow',
  'position:',
  'resize:',
  'text-align:',
  'text-decoration:',
  'text-transform:',
  'white-space:',
  'word-break:',
  'word-wrap:',
]