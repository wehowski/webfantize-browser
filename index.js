// Import stylesheets
import './style.css';



var watchFor = require("insertion-query");
var ready = require('ready');
var onIdle = require('on-idle')
var domReady = require('./3p/domready')
  
// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

document.addEventListener('DOMContentLoaded', ()=>{
  
  watchFor.config({
    strictlyNew : false,
    timeout : 20,
    addImportant: false
});
watchFor('div[id="app"]').every(el => {
   el.innerHTML += `<h1>JS Starter</h1>`;

})
});

var appDiv = document.createElement('div')
appDiv.id='app'
document.body.append(appDiv)

var appDivEl = document.getElementById('app');
appDivEl.innerHTML = `<h1>JS Starter</h1>`;