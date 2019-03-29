var rolling_window = require("../rolling_window");

function test() {
    var myWindow = new rolling_window();
    var values = [];
    for (var i = 0; i < 10; i++) {
        values.push({ index: (i + 1), value: "Item " + (i + 1) });
    }
    myWindow.setWindowSize(5);
    for (var i = 0; i < values.length; i++) {
        myWindow.push(values[i]);
        console.log({ item: values[i], window_size: myWindow.getWindowSize(), window: myWindow.getWindow() });
        console.log({sum: myWindow.reduce((acc, d) => acc + d.index, 0)});
        console.log({avg: myWindow.reduce((acc, d) => acc + d.index, 0) / myWindow.getWindowSize()});
        console.log({each: myWindow.each((d) => d.index * d.index)});
    }
}

test();