import express, { Application, Request, Response } from 'express'
import { ConnectOptions, connect } from 'mongoose'


const cors = require('cors')

const app: Application = express()
app.use(express.json())
app.use(cors())


// const options: ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }

// const CONNECTION_URL = process.env.CONNECTION_URL


import {router} from './routes/user.route'
app.use('/', router)

const PORT = process.env.PORT || 3030;

app.listen(PORT)
// connect(CONNECTION_URL, options)
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));
