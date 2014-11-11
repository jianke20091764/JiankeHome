/**
 * New node file
 */
module.exports = function(app){
	app.get('/moblie',function(req,res){
		res.render('moblie',{
			title : "moblieTest"
		});
		
	});

}
