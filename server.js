import http from 'http';
import fs from 'fs/promises'
import  url  from 'url';
import path from 'path';
const PORT = process.env.PORT;

//Get Current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname)

const server = http.createServer(async(req,res)=>{
    try{
        //CHECK if GET req
        if(req.method === 'GET'){

            let filePath;

            if(req.url==='/'){
                filePath = path.join(__dirname,'public', 'index.html');
            }else if (req.url === '/about'){
                filePath = path.join(__dirname,'public', 'about.html');
            }else{
                throw new Error("Not Found");
                }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html');
            res.statusCode = 404;
            res.write(data);
            res.end();
            
        }else{
              throw new Error("Method Not Allowed")
        }
    }catch(error){
      res.writeHead(500,{ 'content-type': 'text/plain'})
                res.end(' server error ')
    }


   
});

server.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`);
})
