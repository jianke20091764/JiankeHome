/**
 *@author xizhao 
 *function {Object} Upload File 
 * 
 **/

var fs = require('fs') ;

var FileTool = {} ;

FileTool.write = function(config){
	var type = config.type ;
	var data = config.data ;
	
	
	return false ;
}

FileTool.read = function(config){
	var type = config.type;
	var callback = config.callback ;
	var data = '' ;
	fs.readFile('./public/data/'+ type + '.json',function(err,_data){
		if(err)
			console.log(err);
		data =JSON.parse( _data );
		
		callback(data);
	});
	
	//return data ;
}

FileTool.update = function(config){
	var type = config.type;
	var name = config.name ;
	var data = '' ;
	
	
	return false;
}

FileTool.search = function(config){
	var type = config.type;
	var keyword = config.keyword ;
	var data = '' ;
	
	return data ;
}

module.exports = FileTool ; 