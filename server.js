let express = require('express')
let app = express()
let  bodyParser = require('body-parser')

let User = require('./models/User')

app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:eCom/eCom')

app.use(express.static('public'))
app.listen(3000, serverExpressFn = () => {
	console.log('Express is now running your //localhost:3000')
})