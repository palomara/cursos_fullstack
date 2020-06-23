import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (request, response)=>{
    return response.json({message: 'Hello!'})
})

app.listen(3333)