const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'local') {
    dotenv.config({ path: '.env.local' });
} else {
    console.error(`Variable de entorno: ${process.env.NODE_ENV} no reconocida.`);
}

app.use('/weathercraft', express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(process.env.PORT, async function () {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT}/weathercraft`);
});