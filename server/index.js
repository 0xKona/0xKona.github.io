import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackConfig from '../webpack-config.js';
import webpackMiddleware from 'webpack-dev-middleware';
import path from 'path';
import * as url from 'url';
import cors from 'cors';
import bodyParser from 'body-parser';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const compiler = webpack(webpackConfig);

dotenv.config();

const app = express();
const port = process.env.PORT;
console.log(port)
app.use(cors());
app.use(webpackMiddleware(compiler, {writeToDisk: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/dist'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json())
app.get('/*', (req, res, next) => res.render('index'));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});