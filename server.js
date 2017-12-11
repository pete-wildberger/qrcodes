// requires
const QrCode = require('qrcode-reader'),
 Jimp = require("jimp");

var buffer = fs.readFileSync(__dirname + '/image.png');
Jimp.read(buffer, (err, image) => {
    if (err) {
        console.error(err);
        // TODO handle error
    }
    var qr = new QrCode();
    qr.callback = (err, value) => {
        if (err) {
            console.error(err);
            // TODO handle error
        }
        console.log(value.result);
        console.log(value);
    };
    qr.decode(image.bitmap);
});
