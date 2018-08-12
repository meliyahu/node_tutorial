let express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log(`req.url: ${req.url}`);
    res.render('index');
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})