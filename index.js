const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello from nodemon with auto restart !!')
})





const users =[
    {id:1,name:'Sabana',email:'sabana@gmail.com',phone:'0178888888'},
    {id:2,name:'Shabnur',email:'Shabnor@gmail.com',phone:'0178888888'},
    {id:3,name:'Sucorita',email:'Sucorita@gmail.com',phone:'0178888888'},
    {id:4,name:'Sepali',email:'Sepali@gmail.com',phone:'0178888888'},
    {id:5,name:'Srabonti',email:'srabonti@gmail.com',phone:'0178888888'},
    {id:6,name:'Sabila',email:'sabila@gmail.com',phone:'0178888888'},
    {id:7,name:'Sohana',email:'sohana@gmail.com',phone:'0178888888'},
    {id:8,name:'Sokina',email:'sokina@gmail.com',phone:'0178888888'},
]
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id);
    const user=users.find(u =>u.id===id);
    res.send(user)

})
app.get('/users',(req,res)=>{
    if(req.query.name){
        const search =req.query.name.toLowerCase();
        const matched =users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    
})

app.post('/user', (req,res)=>{
    console.log('request',req.body)
    const user =req.body;
    user.id=users.length +1;
    users.push(user)
    res.send(user)
})

app.listen(port,()=>{
    console.log('Listening to port',port)
})