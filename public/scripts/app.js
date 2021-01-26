'use strict';

console.log('app');

var template = React.createElement(
    'h1',
    null,
    'title'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
