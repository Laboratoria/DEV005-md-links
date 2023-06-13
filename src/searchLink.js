//Libreria markdown-it
const markdownIt = require('markdown-it');
const md = new markdownIt();
//Libreria JSDOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
//const {JSDOM}=require('jsdom')
  //Buscar Links
  const searchLink= (dataString, file)=>{
    let allLinks=[];
    const contentHTML= md.render(dataString);
    const dom = new JSDOM(contentHTML);
    const {document}=dom.window;
     const links=document.querySelectorAll('a');
     links.forEach(e=>{    
      const href=e.getAttribute('href');
      const text=e.textContent;
      if (href.startsWith('https')||href.startsWith('http')){
        allLinks.push({href, text, file})
      }    
     })
     return allLinks;  
  }
  
  module.exports = {
    searchLink,
  }