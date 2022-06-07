import  'dotenv/config'

import express from 'express'
import cors from 'cors'


import vilao from './src/controller/VilaoController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(vilao);

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))