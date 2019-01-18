let moment = require('moment');
let axios = require('axios');
let utility = require('../utilities/utility')
let config = require('../config/config')
let auditDB = require('../db/auditDB')

exports.getWeather = async (ip)=>{

        let data = ``;
        //check if current date is prime or not
        let isDayPrime = utility.isPrime(moment().date());
        if(isDayPrime)
           data = await getDataFromAPI();
        else
           data = 'Date is not prime so no date';
        

        auditDB.auditRecord(ip,moment().format('MMMM Do YYYY, h:mm:ss a'),isDayPrime?'yes':'no');
        return {data}
        
}

getDataFromAPI = ()=>{

    return new Promise((resolve,reject)=>{

            let URL = `${config.API_BASE_URL}weather?q=London,uk&APPID=${config.API_KEY}`
            console.log(URL);
            
            axios.get(URL) .then((response)=> {
                resolve({data:response.data});
            })
            .catch((error)=> {
                reject(error);
            });

    })
}

