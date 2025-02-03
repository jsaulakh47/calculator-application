let calculation =    localStorage.getItem('calculation')   ||'';

displayCalculation();
 
function updateCalculation(string)
{
 calculation += string;

 displayCalculation();

 localStorage.setItem('calculation', calculation);


}

function displayCalculation()
{
 document.querySelector('.js-display-calculation').innerHTML = calculation;
}
