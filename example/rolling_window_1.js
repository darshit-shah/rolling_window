var rolling_window = require("../rolling_window");

function test() {
    var myWindow = new rolling_window();

    var values = [-5, 149, 150, 151, 299, 300, 301, 449, 450, 451];
    for (var i = 0; i < 0; i++) {
        values.push(parseInt(Math.random() * 500));
    }
    myWindow.setWindowSize(3);
    for (var i = 0; i < values.length; i++) {
        myWindow.push(values[i]);
        console.log("Number: " + values[i]);
        myWindow.print();
    }
}

test();