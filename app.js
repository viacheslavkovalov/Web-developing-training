const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');;
app.engine('hbs', exhbs({
    extname: 'hbs',
// layoutsDir: __dirname + '/views/layouts',
}));

app.get('/', function (req, res) {
    // res.send('<h1>Hello /</h1>')
    res.render('home')
});

app.get('/about', function (req, res) {
    //   res.send('<h1>Hello /about</h1>')
    res.render('about', {cssFileName: 'about', pageTitle: 'О нас'})
});

app.get('/products', function (req, res) {
    //   res.send('<h1>Hello /about</h1>')
    res.render('products', {products, cssFileName: 'products', pageTitle: 'Это наши продукты'})
});

app.get('/product/:productId', (req, res) => {
    console.log(req.params);

    const product = products.find(p => p.id === req.params.productId);

    res.render('product', {product})
})

//product/

app.listen(PORT, () => {
    console.log(`Aplication server is running on port ${PORT}`)
})