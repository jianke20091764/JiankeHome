
/*
 * @author xizhao.wang
 * GET home page.
 */

var ft = require('../business/file'); 

module.exports = function(app){
	app.get('/home',function(req,res){
//		res.render('home',{});
		
		ft.read({
			'type' : 'music' ,
			'callback' : function(_data){
				res.render('home', 
					{ 
						title: 'Jianke-Home' ,							
						data : _data.data 					
					});
			}
		});
		
	});

}
