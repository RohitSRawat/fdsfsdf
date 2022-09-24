const express = require('express')
const app = express()

const path = require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const port = process.env.PORT||8080


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'))
    app.get('*',(req,res) => {
        req.sendFile(path.resolve(__dirname,"build",'index.html'))
    })
}

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})