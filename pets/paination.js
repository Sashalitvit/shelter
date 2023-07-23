const paginationNavigation = document.querySelectorAll('.navigation button');

console.log(paginationNavigation)

paginationNavigation.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        numberPage(i)
    })
})

function numberPage(index){
    let numPage = Number(paginationNavigation[2].textContent)
    let numberBtn = index;
    switch(numberBtn){
        case 0:
            if(numPage > 1) {
                paginationNavigation[2].textContent = 1;
            }
            break;
        case 1:
            if(numPage > 1) {
                paginationNavigation[2].textContent = --numPage;
            }
            break;
        case 3:
            if(numPage < 10) {
                paginationNavigation[2].textContent = ++numPage;
            }
            break;
        case 4:
            if(numPage < 10) {
                paginationNavigation[2].textContent = 10;
            }
            break
        default:
            return;
    }
    statusBtn(paginationNavigation[2].textContent);
    paginationPage(paginationNavigation[2].textContent)
}

function statusBtn(numPage) {
    let num = Number(numPage)
    console.log(numPage)
    switch(num){
        case 1:
            paginationNavigation[0].classList.toggle('button-pagination');
            paginationNavigation[1].classList.toggle('button-pagination');

            if(paginationNavigation[3].classList.contains('button-pagination-inactive-2')){
                paginationNavigation[3].classList.remove('button-pagination-inactive-2');
                paginationNavigation[4].classList.remove('button-pagination-inactive-2');
            };
            break;
        case 2:
            paginationNavigation[0].classList.toggle('button-pagination');
            paginationNavigation[1].classList.toggle('button-pagination');
            break;
        case 9:
            paginationNavigation[3].classList.remove('button-pagination-inactive-2');
            paginationNavigation[4].classList.remove('button-pagination-inactive-2');
            break;
        case 10:
            paginationNavigation[3].classList.add('button-pagination-inactive-2');
            paginationNavigation[4].classList.add('button-pagination-inactive-2');

            if(!paginationNavigation[0].classList.contains('button-pagination')){
                paginationNavigation[0].classList.toggle('button-pagination');
                paginationNavigation[1].classList.toggle('button-pagination');
            }
            break;
        default:
            return;
    }
    
}

let paginationObject = {
   '1' : ['katrine', 'jennifer', 'woody', 'sophia', 'timmy', 'charly', 'scarlett', 'freddie'],
   '2' : ['freddie', 'charly', 'sophia', 'woody', 'jennifer', 'timmy', 'katrine', 'scarlett'],
   '3' : ['woody', 'timmy', 'sophia', 'scarlett', 'charly', 'katrine', 'jennifer', 'freddie'],
   '4' : ['freddie', 'charly', 'scarlett', 'jennifer', 'sophia', 'katrine', 'timmy', 'woody'],
   '5' : ['charly', 'freddie', 'jennifer', 'woody', 'katrine', 'scarlett', 'sophia', 'timmy'],
   '6' : ['katrine', 'charly', 'scarlett', 'woody', 'freddie', 'timmy', 'jennifer', 'sophia'],
   '7' : ['katrine', 'scarlett', 'freddie', 'woody', 'sophia', 'charly', 'timmy', 'jennifer'],
   '8' : ['woody', 'katrine', 'jennifer', 'sophia', 'freddie', 'timmy', 'charly', 'scarlett'],
   '9' : ['freddie', 'jennifer', 'timmy', 'scarlett', 'katrine', 'woody', 'sophia', 'charly'],
   '10' : ['timmy', 'charly', 'woody', 'scarlett', 'katrine', 'freddie', 'jennifer', 'sophia'],
}


function paginationPage(numPage) {
    const cardsFoto = document.querySelectorAll('.slider-foto');
    const cardsTitle = document.querySelectorAll('.pets .slider-title')
    cardsFoto.forEach((el, i) => {
        console.log(el, i)
        el.style.backgroundImage = `url(../../shelter-task/pets/assets/img/pets-${paginationObject[numPage][i]}.png)`
        
        // el.classList.add(`${paginationObject[numPage][i]}`)

        let animalName = `${paginationObject[numPage][i]}`
        cardsTitle[i].textContent = animalName[0].toUpperCase() + animalName.slice(1)

    })

    
    
}
