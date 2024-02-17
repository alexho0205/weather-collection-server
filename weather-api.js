const url = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001";
const axios = require('axios');
const apiKey = 'CWB-B7C744FF-64FC-455B-BFA4-798DC8F22A4D';
const respFormat = 'json';

module.exports = {
    getForecast: function () {
        console.log(`get forcast data ... ${url}`);

        axios.get(url, {
            params: {
                Authorization: apiKey,
                format: respFormat
            }
        }).then((response) => {
            var data =  response.data;
            console.log(data.success);
            console.log(data.records.location[0].locationName);

        }).catch((error) => { console.log(error); });

    }
};