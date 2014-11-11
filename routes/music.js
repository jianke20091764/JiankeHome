/**
 * @author xizhao.wang
 */

var url = require('url') ;
var queryString = require('querystring');
var ft = require('../business/file'); 


module.exports = function(app){
	app.get('/music',function(req,res){
		var obj = url.parse(req.url,true).query;
		var musicName = obj.name ,musicMode = obj.mode;
		if(musicName && musicName != null){
			
			res.render('m_box', 
				{ 
					title: 'Jianke-Music',					
					name : musicName,
					mode : musicMode
				}
			);
		}else{
			ft.read({
				'type' : 'music' ,
				'callback' : function(_data){
					res.render('m_box', 
						{ 
							title: 'Jianke-Music' ,	
							data : _data.data 
						});
				}
			});

		}
		
	});
}
