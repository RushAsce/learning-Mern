import { createServer } from'http' ;
const PORT = process.env.PORT;

const users =[
    { id:1,name:'sumh buddy'},
    { id:2, name: 'noah one'},
    { id:3, name : 'noah buddy'}
];

// logger middleware
const logger =( req,res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}

//JSOn middleware
const jsonMiddleware = (req,res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req,res) => {
    res.write(JSON.stringify(users));   
        res.end();
}

//Route handler for GET /api/users/:id
const getUserbyIdHandler =(req, res)=>{
  
    const id = req.url.split('/')[3];
     const user = users.find((user)=>user.id === parseInt(id));
       if(user){
        res.write(JSON.stringify(user));
        }else{
        res.write(JSON.stringify({message: 'user not found' }));
       }
        res.end();
     
}
//Route not found handler]
const notFoundHandler = (req,res) =>{
    res.statusCode=404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
    }

//Route handler for a POST /api/users
const createUserHandler = (req, res ) => {
    let body ='';
    //listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => { 
        const newUser = JSON.parse(body);
        users.push(newUser)
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}

const server = createServer((req,res)=>{
    logger(req,res, () => {
    jsonMiddleware(req,res, () => {
        if(req.url ==='/api/users' && req.method === 'GET'){
            getUsersHandler(req,res);
        }else if (req.url.match(/\/api\/users\/([0-9]+)/)  &&  req.method ==='GET' )
             {
            getUserbyIdHandler(req,res);
        }else if(req.url ='api/user' && req.method === 'POST')
            {
            createUserHandler(req,res)
        }else{
            notFoundHandler(req,res);
        }
    })
    })
   
    
});

server.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`);
})
