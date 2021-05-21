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

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

 const api = require('../api');



 module.exports = async function oldestPackageName() {
   // TODO
   const name = await api().then(res => {
 
     let oldest = Date.parse(res[0].date);
     let name = '';
     for (let i = 0; i < res.length; i++) {
       
       if(Date.parse(res[i].date) < oldest){
         oldest = Date.parse(res[i].date)
         name = res[i].name
       }
       
     }
       
       return name;
   });
 
    return name
 };
