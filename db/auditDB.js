let MongoClient = require('mongodb').MongoClient
let moment = require('moment');
let config = require('../config/config')

exports.auditRecord = (ip,calledOn,primeDay,data_fetched)=>{
    MongoClient.connect(config.MONGO_URL, function (err, client) {
        if (err) throw err

        let db = client.db('weather')
        let auditObject = { calledOn:calledOn,calledBy:ip,primeDay};
        db.collection("audit").insertOne(auditObject, function(err, res) {
          if (err) throw err;
          console.log("record audited");
        });
      })
}

