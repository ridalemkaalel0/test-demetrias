
// Get username to change the greetings



var StartButton = document.getElementById("StartButton");


StartButton.onclick = ChangeGreeting;

function ChangeGreeting(){
	var FirstName = document.getElementById("UserName").value;
	var UserLastName = document.getElementById("UserLastName").value;
	var UserEmail = document.getElementById("UserEmail").value;

	var DictInfo = {FN:[FirstName,'ErrorEmail'],LN:[UserLastName,'ErrorEmail'],Email:[UserEmail,'ErrorEmail']};


	if (FirstName && UserLastName && UserEmail){

		localStorage.setItem('name',FirstName)
		localStorage.setItem('lastname',UserLastName)
		localStorage.setItem('email',UserEmail)

		var elements = document.getElementsByTagName('body');
		setTimeout(function(){
		 elements[0].style.opacity = 1;
		    (function fade(){
        var opacloader = parseFloat(elements[0].style.opacity);

        (elements[0].style.opacity = opacloader - .1)<0.1?window.location.href="/test-demetrias/Home/home.html":setTimeout(fade,10)})();
},3);


	}
	else{
	var ErrorName = document.getElementById('ErrorEmail')
	ErrorName.innerHTML = 'Informations manquantes.'
	}


}


const swup = new Swup()




