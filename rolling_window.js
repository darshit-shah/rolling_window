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

    function adjustWindow() {
        for (var i = window.length; i > window_size; i--) {
            window.shift();
        }
    }

    return this;
}

module.exports = rolling_window;