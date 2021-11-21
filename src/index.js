import _ from 'lodash';
import log from './print.js';
import {} from './functionCurrying.js';
import './style.css';

console.log('Hi everyone... :) ');

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' latest ');
    element.classList.add('hello');
    
    log(new Date, "Debug", "some debug");

    log(new Date())("Debug")('Debugging code result');
    return element;
  }

 
  document.body.classList.add('wrapper');
  document.body.appendChild(component());