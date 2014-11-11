// JavaScript Document
(function(){
	var App = function(){
	   var page = {
            init : function(){
                var self = this ;
                self.initPlugin();
                self.initEvents();
                //self.initExchange();
            },
            initPlugin : function(){
                Plugin.init();
            },                  
            initEvents :function(){
                Action.init();
            },
            initExchange : function(){
                Exchange.init();
            }                           
        }
        
        var Action = {
            init: function(){
            	 var self = this ;
                 self.musicBoxAction();
                 self.modelAction();
            },
            navLiAction : function(){
                
            },
        
            modelAction : function(){
            	 $('.edit-btn').live('click',function(){
 					$('.ui-mask').show();								
 					$('.modal-' + $(this).attr('data-edit')).show();
 				});
 				
 				$('.close').live('click',function(){
 					$('.ui-mask').hide();								
 					$('.modal').hide();
 				});
            },
            
            musicBoxAction : function(){
            	$('.music').live('click',function(){					
					var music = document.getElementById('musicBox');
					$(music).attr('src','/audio/' + $(this).attr('data-music') + '.mp3') ;
					console.log($(music).attr('src'));
					music.play();
				});
            }               
        }
        
        
        var Exchange = {
            init :function(){
                
            }                        
        }
        
        
        var Plugin = {
            init : function(){
                var self = this ;
                self.clock();
                self.toTop();
            },            
            clock :function(){
                var initClock = function(){
                    clockCount();
                    setInterval(clockCount,1000);
                }
                
                var clockCount = function (){
                    var now = new Date();
                    var ctx = document.getElementById('clock').getContext('2d');
                    ctx.save();
                    ctx.clearRect(0,0,150,150);
                    ctx.translate(75,75);
                    ctx.scale(0.4,0.4);
                    ctx.rotate(-Math.PI/2);
                    ctx.strokeStyle = "black";
                    ctx.fillStyle = "white";
                    ctx.lineWidth = 8;
                    ctx.lineCap = "round";
                    
                    // Hour marks
                    ctx.save();
                    for (var i=0;i<12;i++){
                        ctx.beginPath();
                        ctx.rotate(Math.PI/6);
                        ctx.moveTo(100,0);
                        ctx.lineTo(120,0);
                        ctx.stroke();
                    }
                    ctx.restore();
                    
                    // Minute marks
                    ctx.save();
                    ctx.lineWidth = 5;
                    for (i=0;i<60;i++){
                        if (i%5!=0) {
                            ctx.beginPath();
                            ctx.moveTo(117,0);
                            ctx.lineTo(120,0);
                            ctx.stroke();
                        }
                        ctx.rotate(Math.PI/30);
                    }
                    ctx.restore();
                    
                    var sec = now.getSeconds();
                    var min = now.getMinutes();
                    var hr  = now.getHours();
                    hr = hr>=12 ? hr-12 : hr;
                    
                    ctx.fillStyle = "black";
                    
                    // write Hours
                    ctx.save();
                    ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
                    ctx.lineWidth = 14;
                    ctx.beginPath();
                    ctx.moveTo(-20,0);
                    ctx.lineTo(80,0);
                    ctx.stroke();
                    ctx.restore();
                    
                    // write Minutes
                    ctx.save();
                    ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
                    ctx.lineWidth = 10;
                    ctx.beginPath();
                    ctx.moveTo(-28,0);
                    ctx.lineTo(112,0);
                    ctx.stroke();
                    ctx.restore();
                    
                    // Write seconds
                    ctx.save();
                    ctx.rotate(sec * Math.PI/30);
                    ctx.strokeStyle = "#D40000";
                    ctx.fillStyle = "#D40000";
                    ctx.lineWidth = 6;
                    ctx.beginPath();
                    ctx.moveTo(-30,0);
                    ctx.lineTo(83,0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0,0,10,0,Math.PI*2,true);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(95,0,10,0,Math.PI*2,true);
                    ctx.stroke();
                    ctx.fillStyle = "#555";
                    ctx.arc(0,0,3,0,Math.PI*2,true);
                    ctx.fill();
                    ctx.restore();
                    
                    ctx.beginPath();
                    ctx.lineWidth = 14;
                    ctx.strokeStyle = '#325FA2';
                    ctx.arc(0,0,142,0,Math.PI*2,true);
                    ctx.stroke();
                    ctx.restore();
                }                
                initClock();                     
            },                                                      
            toTop :function(){                        
                var toTopHide = function(){
                    if(document.documentElement.scrollTop+document.body.scrollTop > 400){
                        document.getElementById("toTop").style.display = "block";
                    }else{
                        document.getElementById("toTop").style.display = "none";
                    }
                }    
                window.onscroll = toTopHide;
            }
        }       
    	
    	return {
    	    load : function(){
    	        page.init();
    	    }
    	}
    }
    
    App().load();
    
})();