const config = () => {
    return {
        apiKey: 'b10fe3707ee4e9bdbaf2d6edcee7e867',
        //https://api.openweathermap.org/data/2.5/forecast?lat=28.4595&lon=77.0266&units=metric&appid=b10fe3707ee4e9bdbaf2d6edcee7e867 for geting Five days Data with every 3 hour interval
        //let url = 'http://172.20.5.3/userankit_kotnala/Training/ExerciseNode/WeatherAppConsole/service/response.php';
        // let url = 'https://samples.openweathermap.org/data/2.5/weather?q=${}&appid=b6907d289e10d714a6e88b30761fae22';
        url_city: `https://api.openweathermap.org/data/2.5/weather?q=city_name&units=metric&appid=`
        //cat stub.sh WBApplication.jar > WBApplication.run && chmod + x WBApplication.run
        //gsettings set org.gnome.nautilus.preferences executable-text - activation ask
        //gsettings set org.gnome.nautilus.preferences executable - text - activation launch

    }
}

module.exports = config;
