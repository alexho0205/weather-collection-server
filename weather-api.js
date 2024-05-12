const url = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001";
const axios = require('axios');
const apiKey = 'THE_API_KEY';
const respFormat = 'json';
const db = require('./db')

function saveData(data) {
    let now = new Date();

    data.records.location.forEach( element => {
        let forcast = element.weatherElement[0].time[0];
        let data_value = '氣溫：' + forcast.parameter.parameterValue + ' ' + forcast.parameter.parameterName;
        db.pool.query('insert into cwb_weather_forcast(location_name,data_time,data_value,data_description,insert_time) values(?,?,?,?,?) ', 
            [element.locationName, forcast.startTime, data_value, '天氣預測', now]);
    });  
  }

module.exports = {
    getForecast: function () {
        console.log(`get weather forcast from ${url}`);

        axios.get(url, {
            params: {
                Authorization: apiKey,
                format: respFormat
            }
        }).then((response) => {
            var data =  response.data;
            if(data.success){
                saveData(data);
            }
        }).catch((error) => { console.log(error); });
    }
};