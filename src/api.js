const axios = require('axios');

const url = 'http://ambush-api.inyourarea.co.uk/ambush/intercept';

module.exports = async function api(){
    return  await axios.post(url, {
    'method': 'GET',
    'url': 'https://api.npms.io/v2/search/suggestions?q=react',
    "return_payload": true
  }).then(res => res.data)
  .then(res => {
    let packages = []
    for (let o in res) {
      let y = res[o];

      for (let i = 0; i < y.length; i++) {
        packages.push(y[i].package);

      }

    }
    return packages;
  })
    .then(packages => packages.filter(item => typeof item === 'object'))
}