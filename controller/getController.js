const config = require('./../config/constants.js')
const Request = require('request');

class Controller {
    apiCall(url, success, failure) {
        Request.get(url, (error, response, body) => {
            if (error) {
                failure(error);
            } else {

                let data = JSON.parse(body);

                if (data.cod == 200) {
                    console.log("parsed ");
                    success(data);
                }
                else
                    failure(data.message);
            }
        });
    }
    getDataByCity(city) {

        return new Promise((resolve, reject) => {
            console.log(config().url_city.replace("city_name", city) + config().apiKey);
            this.apiCall(config().url_city.replace("city_name", city) + config().apiKey, success, failure);
            function success(res) {
                resolve(res);
            }
            function failure(error) {
                reject(error);
            }
        })

    }
}

module.exports = Controller;

