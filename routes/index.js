
/*
 * @author xizhao.wang
 * GET home page.
 */

var ft = require('../business/file'); 

module.exports = function(app){
	app.get('/',function(req,res){
		
		ft.read({
			'type' : 'music' ,
			'callback' : function(_data){
				res.render('index', 
					{ 
						title: 'Jianke-Home' ,	
						item : _data.item,
						data : _data.data 					
					});
			}
		});
		
	});

}
