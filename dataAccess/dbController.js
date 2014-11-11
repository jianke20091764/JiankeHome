var settings = require('./dbSettings'),
    DataBase = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Collection = require('mongodb').Collection,
    Server = require('mongodb').Server;

var DbController = function(){
	var __Server = null;
	var __DB = null;
	
	this.DbController = function(){
		__Server = new Server(settings.host,settings.port,{'safe':true}) ;
		__DB = new DataBase(settings.db,__Server,{});
	};
	
	this.getInstanceDb = function(){
		return  __DB ;
	};
	
	this.getCollectionByName = function(name,callback){
		__DB.open(function(error,client){
			if(error) 
			    throw error;
		    var collection = new Collection(client,name);
		    collection.find(function(error,cursor){
		        cursor.toArray(function(error,docs){
		        	callback && callback(docs);
		        });
		    });
			
		});
	};
};

module.exports = DbController ;
