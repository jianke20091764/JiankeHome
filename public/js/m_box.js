// JavaScript Document

(function(){
	function setValue(key,value){
		var session = window.sessionStorage ;
		if(! session.getItem(key)){
			session.setItem(key,value);
		}else{
			
		}
	}
	
	function getValue(key){
		var session = window.sessionStorage ;
		return session.getItem(key) || '' ;
	}

	function getCurrentMusic(){
		var vedio = $('#music-box') ;
		vedio.children('source').attr();
		
	} 

	function playVideo(){
		var video = document.getElementById('music-box');
		video.play();
	}
	
	function initEvent(){
		var flag =false ;
		$('.btn-play').bind({
			'click' : function(){				
				var video = document.getElementById('music-box');
				if(!flag){
					flag = true ;																				
					//$(this).parent().addClass('stop');
					video.pause();										
				}else{
					flag = false ;					
					video.play();
					//$(this).parent().removeClass('stop');					
				}
			}
		});
		
		$('.btn-prev').bind({
			'click' : function(){
				var name = $('#music-box').children('source').attr('class');
				var music = JSON.parse(getValue('music'));
				var prev = 0 ;
				for(var i = 0 ; i < music.data.length ; i ++){
					if(name == music.data[i].abbr){
						
					}
				}
					
			}
		});
		
		$('.btn-next').bind({
			'click' : function(){
				
			}
		});
		
		var video = document.getElementById('music-box');
		video.addEventListener('pause',function(){
			flag =true ;			
			$('.btn-play').parent().addClass('stop');
		});
		
		video.addEventListener('play',function(){
			flag =false ;
			$('.btn-play').parent().removeClass('stop');
		});
		
	}
		
	
	function setMusic(data){
		setValue('music',JSON.stringify(data));	
	}
	
		
	function ajaxMusic(){
		window.onload = function(){			
			$.ajax({
				url : 'http://127.0.0.1:3000/ajax/music',
				dataType: 'jsonp',
				async:false,
				type: 'GET',
				timeout: 5000,
				jsonp: "callback",
				jsonpCallback:"setMusic",										
				success: function(data){				
					console.log(data);
					setValue('music',data);												
				},
				error: function(){
					console.log('error -----');
				}							
			});
		}
	}
	
	
	function init(){
		playVideo();
		initEvent();
		ajaxMusic();
	}
	
	init();
})();