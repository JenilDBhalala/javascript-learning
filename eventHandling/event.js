const btnAlternate = document.getElementById('btn-alternate');

const helloElement = document.getElementById('hello');
const styles = helloElement.style;

const alternateColor = function(){
    helloElement.style.backgroundColor='bisque';
    helloElement.style.color='red';
}

const reset = function(){
    helloElement.style = styles
}

btnAlternate.addEventListener("mouseover",alternateColor)
btnAlternate.addEventListener("mouseout",reset);
