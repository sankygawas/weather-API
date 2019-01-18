let  weatherService = require('../services/weatherService')

exports.getWeather = async (req,res)=>{

    try{
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||
                (req.connection.socket ? req.connection.socket.remoteAddress : null);

        let {data} = await weatherService.getWeather(ip);
        res.json({ data: data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Error occured in fetching.Please try again after sometime'});
    }

}