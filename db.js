var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://zimi:zimi123@localhost:27017/map";
var db = null;
var dbName = 'map';
function __connectDB(callback) {
    if (db) {
        callback(null, db)
    } else {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, callback);
    }
}

exports.insertOne = function(collectionName, json, callback) {
    __connectDB((err, db) => {
        if (err) throw err;

        var dbo = db.db(dbName);
        dbo.collection(collectionName).insertOne(json, function(err, result) {
            callback(err, result)
            //dbo.close();
        });
    })
};
exports.findAll = function(collectionName, json = {}, callback) {
    __connectDB((err, db) => {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).find({}).toArray(callback);
    })
};
exports.find = function(collectionName, json, callback) {
    if (arguments.length !== 3) {
        callback('find函数接收三个参数', null)
        return
    }
    __connectDB((err, db) => {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).find(json).toArray(callback)
    })
}