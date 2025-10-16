import path from 'path';
import url from 'url'

const filePath = './dir1/dir2/test.txt'

//basename() gives us the filename

console.log(path.basename(filePath));

//dirname() gives file path
console.log(path.dirname(filePath));

//extname() gives extentsion/type of file
console.log(path.extname(filePath));

//parse() gives all of it
console.log(path.parse(filePath))


//using es module (import url)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// join() to put correct delimiter in
const filePath2 = path.join(__dirname,'dir1','dir2','test.txt');
console.log(filePath2)


//resolve() absolute path
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt');
console.log(filePath3)

//look into docks
