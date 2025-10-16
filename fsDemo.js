import fs from 'fs/promises'

//readfile() - callback
// fs.readFile('./test.txt','utf-8',(err, data) => {
//     if(err) throw err;
//     console.log(data)
// });

// sync ver 
//readFileSync() 
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data)


///read file () - promise .then() 
// fs.readFile('./test.txt','utf8')
//     .then((data)=>console.log(data))
//     .catch((err) => console.log(err));

//readFile() -async/await
const readFile = async () =>{
    try{
        const data = await fs.readFile('./test.txt','utf8');
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};


//writeFile () Overwrites it

const writeFile = async () =>{
    try{
        await fs.writeFile('./test.txt','Hello, I am  writing this to the file');
        console.log('File written to');
    }catch(error){
        console.log(error)
    }
};

//appendFile Adds to it

const appendFile = async () =>{
    try{
        await fs.appendFile('./test.txt','\n This is appended text');
        console.log('File Appended to');
    }catch(error){
        console.log(error)
    }
};


writeFile();
appendFile();
readFile();