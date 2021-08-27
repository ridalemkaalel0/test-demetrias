
//Change Greetings


const tl = new gsap.timeline();

var Question1 = document.getElementById('transition-question');

tl.fromTo(Question1, 0.5, {x:3000,y:'15%'} ,{duration: 1, x: '19%', ease:Power2.easeinOut});





var Table = document.getElementsByTagName('table')[0];

c=0;

for (i=0; i<Table.rows.length;i++){
	Table.rows[i].cells[1].innerHTML = localStorage.getItem(Table.rows[i].cells[0].innerHTML);

	if (Table.rows[i].cells[1].innerHTML==Table.rows[i].cells[2].innerHTML)
		{c+=1}
	else{
		Table.rows[i].cells[1].style.color='red'
	}

}

var FinalScore = document.getElementById('FinalScore');
FinalScore.innerHTML = 'Score: ' + c.toString()+'/'+(Table.rows.length-1).toString()

localStorage.clear()