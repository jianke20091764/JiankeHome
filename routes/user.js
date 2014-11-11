
/*
 * GET users listing.
 */
module.exports = function(app){
	app.get('/about',function(req,res){
		res.render('about',{
			title : 'Jianke-Readme' ,
			author : 'xizhao.wang' ,
			email : '2100wxz@163.com'
		});
	});
	
	app.get('/login',function(req,res){
		res.render('login', { 
			title: 'Jianke-Home'
		});
	});
	
	app.get('/reg',function(req,res){
		res.render('reg', { 
			title: 'Jianke-Home' 
		});
		
	});
	
	
	app.get('/logout',function(req,res){
		
	});
}
