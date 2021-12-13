const path = require("path");
console.log(path.sep);

const filepath = path.join("/content", "sub - folder", "text.txt");
console.log(filepath);

const absolute = path.resolve(__dirname, "content", "sub-folder", "test.txt");
console.log(absolute);
