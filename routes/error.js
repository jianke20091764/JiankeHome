/**
 * @author xizhao.wang
 */

module.exports = function(app){
	
	app.get('*',function(req,res){
		res.render('err_404', 
			{ 
				title: 'Jianke-404',					
			}
		);
	});

}

