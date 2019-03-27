"use strict";
function rolling_window() {
    var window = [];
    var window_size = 1;

    this.setWindowSize = function (size) {
        if (size == undefined) {
            throw new Error("size required in this method");
        }
        if (!isFinite(size)) {
            throw new Error("size should be integer number");
        }
        if ((+size - parseInt(+size)) != 0) {
            throw new Error("size should be integer number");
        }
        window_size = +size;
        adjustWindow();
        return;
    }

    this.getWindowSize = function () {
        return window_size;
    }

    this.getWindow = function () {
        return window;
    }

    this.clearWindow = function () {
        window = [];
    }

    this.push = function (item) {
        if (item == undefined)
            throw new Error("Item required in this method");
        window.push(item);
        adjustWindow();
        return;
    }

    this.print = function () {
        console.log({ windowSize: window_size, window: window });
    }

    this.reduce = function(reduceMethod, startValue) {
        if (reduceMethod == undefined || typeof reduceMethod !== 'function')
            throw new Error("a function is required at first argument");

        if (startValue == undefined)
            throw new Error("startValue(second argument) required in this method");

        if (!isFinite(startValue)) 
            throw new Error("startValue(second argument) should be an integer");

        if ((+startValue - parseInt(+startValue)) != 0)
            throw new Error("startValue(second argument) should be an integer");

        startValue = +startValue;

        return this.getWindow().reduce(reduceMethod, startValue);
    }

    this.each = function(eachMethod) {
        if (eachMethod == undefined || typeof eachMethod !== 'function')
            throw new Error("a function is required at first argument");

        return this.getWindow().map(eachMethod);
    }

    function adjustWindow() {
        for (var i = window.length; i > window_size; i--) {
            window.shift();
        }
    }

    return this;
}

module.exports = rolling_window;