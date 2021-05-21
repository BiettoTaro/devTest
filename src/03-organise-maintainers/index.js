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

 * With the results from this request, inside "content", 
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should 
 * be in alphabetical order.
 */

const api = require('../api');


module.exports = async function organiseMaintainers() {
  // TODO
  const answer = await api().then(res => {

    const maintainersAll = res.reduce((maintainers, current) => {

      current.maintainers.forEach((maintainerObj) => {
        
        const doubles = maintainers.find(maintainer => {

          return maintainer.username === maintainerObj.username
        });

        if (doubles) {
          doubles.packageNames.push(current.name)
          doubles.packageNames = doubles.packageNames.sort()
        } else {
          maintainers.push({ username: maintainerObj.username, packageNames: [current.name] })
        };

      })
      return maintainers;
    }, []);
  
     maintainers = maintainersAll.sort((a, b) => {
      if (a.username < b.username) {
        return -1
      } 
      if (a.username > b.username) {
        return +1
      } 
      return 0
    })
   return maintainersAll;
  });
  return answer;
};
