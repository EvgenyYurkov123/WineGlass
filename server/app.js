const express = require('express');
// require('@babel/register');
const socketIO = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { Product } = require('./db/models');
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const basketRouter = require('./routes/basket.router');
const favouriteRouter = require('./routes/favourite.router');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

const sessionConfig = {
  name: 'Final-Alco',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/basket', basketRouter);
app.use('/favourite', favouriteRouter);

const server = app.listen(process.env.PORT ?? 3002, () => {
  console.log('Server started 3002');
});

const io = socketIO(server);
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);

    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.prependListener('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
});
