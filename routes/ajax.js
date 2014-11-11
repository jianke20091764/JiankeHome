/**
 * New node file
 */
var ft = require('../business/file'); 

module.exports = function(app){
	
	app.get('/ajax/music',function(req,res){
		ft.read({
			'type' : 'music' ,
			'callback' : function(_data){
				res.send(JSON.stringify(_data));
			}
		});
	});

}