
//Change Greetings

var Name = document.getElementById('Name');
Name.innerHTML = localStorage.name
const tl = new gsap.timeline();



tl.fromTo(Name, 0.3, {y:0} ,{duration: 1, y: -500, ease:Power2.easeinOut}, '=3');
var Question1 = document.getElementById('transition-question1');

tl.fromTo(Question1, 0.5, {x:3000,y:'15%'} ,{duration: 1, x: '19%', ease:Power2.easeinOut});





var Response1 = document.getElementsByTagName('input');

	function NextQuestion() {
		            var ele = document.getElementsByTagName('input');
		              
		            for(i = 0; i < ele.length; i++) {
		                  
		                if(ele[i].type="radio") {
		                  
		                    if(ele[i].checked)
		                    	localStorage.setItem('Question 1',ele[i].value);
		                }
		            }
		        }