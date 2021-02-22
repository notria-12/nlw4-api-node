import  express from 'express';

const app = express();


app.get('/users', (req, res) =>{
    return res.send("Hello world ")
});

app.post('/', (req, res) =>{
    return res.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen('3333', () =>{
    console.log('Server is running');
})