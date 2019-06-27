const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./controller/getController');
const app = express();

// app.get('/',function(req, res){
//     res.send('Server started !')
// })

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { weather_data: null });
});

app.post('/find/getDataByCity', (req, res) => {
    new Controller().getDataByCity(req.body.city).then((weather_data) => {
        try {

            if (weather_data.main == undefined) {
                res.render('index.ejs', { weather_data: null, error: 'Error, please try again' })
            } else {
                let weatherText = `It's ${weather_data.main.temp} Degree Celcius in your ${weather_data.name} city`;
                console.log(weatherText);
                res.render('index.ejs', { weather_data: weather_data });
            }
        } catch (error) {
            console.log("Not getting appropriate response !");
            res.render('index.ejs', { weather_data: null, error: null });
        }
    }).catch((err) => {
        console.log("rejected" + err);
        res.render('index.ejs', { weather_data: null, error: err })
    })

})
app.post("/refresh", (req, res) => {
    new Controller().getDataByCity(req.body.hcity).then((weather_data) => {
        try {

            if (weather_data.main == undefined) {
                res.render('index.ejs', { weather_data: null, error: 'Error, please try again' })
            } else {
                let weatherText = `It's ${weather_data.main.temp} Degree Celcius in your ${weather_data.name} city`;
                console.log(weatherText);
                res.render('index.ejs', { weather_data: weather_data });
            }
        } catch (error) {
            console.log("Not getting appropriate response !");
            res.render('index.ejs', { weather_data: null, error: null });
        }
    }).catch((err) => {
        console.log("rejected" + err);
        res.render('index.ejs', { weather_data: null, error: err })
    })
})
app.listen(8080, function () {
    console.log('Server listening at port 8080!');
})

