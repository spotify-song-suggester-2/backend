const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../Authentication/authenticate-middleware');
const authRouter = require('../Authentication/authrouter');
const songsRouter = require('../Songs/songsRouter')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/songs', authenticate, songsRouter);

module.exports = server;