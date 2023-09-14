import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { engine } from 'express-handlebars';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (_, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log('Welcome to port:', PORT);
});
