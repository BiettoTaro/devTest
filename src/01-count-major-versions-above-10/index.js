/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */

 const api = require('../api')


module.exports = async function countMajorVersionsAbove10() {
  // TODO
  const count = await api().then(res => {
    let count = 0;


    for (let i = 0; i < res.length; i++) {
      if (Number(res[i].version.substr(0, res[i].version.indexOf('.'))) >= 10) {
        count++
      }


    }
    return count
  })



  return count
};