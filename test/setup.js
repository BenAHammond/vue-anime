// test setup here
var window   = require('svgdom')
var document = window.document;
require('jsdom-global')()


global.expect = require('chai').expect;
// global.Vue = {
//     directive: (a, b) => {
//         console.log('Directive invoked with', a, b);
//     }
// }