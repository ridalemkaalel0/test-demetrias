
//Change Greetings


const tl = new gsap.timeline();

var Question1 = document.getElementById('transition-question');

tl.fromTo(Question1, 0.5, {x:3000,y:'15%'} ,{duration: 1, x: '19%', ease:Power2.easeinOut});





var Response1 = document.getElementsByTagName('input');

	function NextQuestion() {
		            var ele = document.getElementsByTagName('input');
		            var key = document.getElementById('TitleQuestion');
		            var ArabicInput = document.getElementsByClassName('keyboardInput');

		              
		            for(i = 0; i < ele.length; i++) {
		                  
		                if(ele[i].type="radio") {
		                  
		                    if(ele[i].checked)
		                    	localStorage.setItem(key.innerHTML,ele[i].value);
		                }
		            }


		            if(ArabicInput.length>0)
						{for(i = 0; i < ArabicInput.length; i++) 
							{		
								localStorage.setItem(key.innerHTML+'-'+i.toString(),ArabicInput[i].value);
							}
						
									              
						}
									        
		        }