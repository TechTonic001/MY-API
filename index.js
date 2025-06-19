const express = require ('express')
const app = express()
const port = 5505
const home = "/"
const htmlPage = '/html'

const allStudent = [
    {name: 'Femi', age: 20, course: 'Computer Science'},
    {name: 'Tolu', age: 22, course: 'Mathematics'},
    {name: 'Sade', age: 21, course: 'Physics'},
    {name: 'Bola', age: 23, course: 'Chemistry'},
    {name: 'Kunle', age: 24, course: 'Biology'},
    {name: 'Ayo', age: 19, course: 'Economics'},
    {name: 'Zainab', age: 22, course: 'History'},
    {name: 'Chuka', age: 21, course: 'Geography'},
]
app.get('/api', (req,res)=>
{
    try {
        res.status(201).json({message:allStudent})
    } catch (error) {
        res.status(503).json({message:error})
    }
})

app.get(home, (req,res)=> {
    console.log('/ has been accessed');
    res.send('Mr femi is going to')
})


app.get(htmlPage,(req,res)=> {
    console.log('HTML page called for');
    console.log(__dirname);
    // res.sendFile(__dirname+'/index.html')
    res.sendFile(`${__dirname}/index.html`)
})





app.listen(port,()=> {
    console.log(`server runingm at ${port}`);
    
})