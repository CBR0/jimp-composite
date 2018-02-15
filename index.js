var Jimp = require("jimp");

var i1 = Jimp.read("image1.jpg");
var i2 = Jimp.read("image2.jpg");

Promise.all([i1, i2]).then(images => {
    images[0].composite(images[1], 101, 462)
                    .write("output.jpg");
});