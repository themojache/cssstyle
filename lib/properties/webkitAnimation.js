'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-animation', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation');
    },
    enumerable: true
};