function fun(l) {
    dateformat.i18n = require('./lang/' + l);
    return true;
}

var fun = function lang(l) {
    dateformat.i18n = require('./lang/' + l)
    return true;
  }