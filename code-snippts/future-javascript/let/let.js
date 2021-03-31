var funcs = [];
var _loop_1 = function (i) {
    funcs.push(function () {
        console.log(i);
    });
};
// create a bunch of functions
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
