const fs = require("fs");
var imagePath = process.argv.slice(2);

const files = fs.readdirSync("./" + imagePath[0])
    .filter(x => x.includes("png"));

const ex =
    "{\n" +
    files.map(x => `"${x.split(".png")[0]}": require("./${x}"),`).join("\n") +
    "}";
const res = "export const TAKE_TO_IMAGES=" + ex;
fs.writeFileSync("./" + imagePath[0] + "/index.js", res);
