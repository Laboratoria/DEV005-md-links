const axios = require('axios')

const validateLink=(dataLinks)=>{
  return new Promise((resolve, reject)=>{
        axios.get(dataLinks.href)
        .then(res=>{
          //if(res.)
          //console.log( {href:dataLinks.href, text:dataLinks.text, file:dataLinks.file, status:res.request.socket._httpMessage.res.statusCode, ok:res.request.socket._httpMessage.res.statusMessage });
          resolve ({href:dataLinks.href, 
            text:dataLinks.text, 
            file:dataLinks.file, 
            status: res.status,
            ok: 'OK'
            //status:res.request.socket._httpMessage.res.statusCode, 
            //ok:res.request.socket._httpMessage.res.statusMessage 
          });
        })
        .catch(error=>{
          //console.log( {href:dataLinks.href, text:dataLinks.text, file:dataLinks.file,  status:error.request.socket._httpMessage.res.statusCode, ok:'fail'});
          reject ({href:dataLinks.href, 
            text:dataLinks.text, 
            file:dataLinks.file,  
            status:error.response.status,
            //status:error.request.socket._httpMessage.res.statusCode, 
            ok:'fail'
          });
        })  
  })
}

module.exports = {
  validateLink,
}