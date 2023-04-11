const input = document.querySelector('input');
const html = document.querySelector('html');
const links = document.querySelectorAll('nav a.paragraph-l')

console.log(links)

input.addEventListener('change', isChecked);
isLinked();

function isChecked(){ 
    if(input.checked){ 
        html.style.overflow = 'hidden'
    }else{
        html.style.overflow = 'scroll';
    }
}

function isLinked(){
    links.forEach(link =>{
        link.addEventListener("click", uncheckInput)
        console.log('!')
    })
}

function uncheckInput(){
    input.checked = false;
    isChecked();
}
