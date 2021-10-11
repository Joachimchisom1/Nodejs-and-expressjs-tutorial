//  CommonJS every file is module (by defauilt)
// Modules   --- Encapsulated (Only share minimum)

const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind')


sayHi('Joachim')
sayHi(names.chisom)
sayHi(names.ibe)

