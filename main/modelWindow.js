const PETS_DESCRIBE = {
    'Katrine': {
        'type': `Cat - British Shorthair`,
        'describe': `Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],

    },
    'Jennifer':{
        'type':'Dog - Labrador',
        'describe': `Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
    'Sophia':{
        'type':'Dog - Shih tzu',
        'describe':`Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
    'Woody':{
        'type':'Dog - Golden Retriever',
        'describe':`Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
    'Scarlett':{
        'type':'Dog - Jack Russell Terrier',
        'describe':`Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
    'Timmy':{
        'type':'Cat - British Shorthair',
        'describe':`Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
    'Freddie':{
        'type':'Cat - British Shorthair',
        'describe':`Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
    'Charly':{
        'type':'Dog - Jack Russell Terrier ',
        'describe':`This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.`,
        'extra-option': ['Age: 2 months', 'Inoculations: none', 'Diseases: none', 'Parasites: none'],
    },
}


const modalWindowHTML = `
                        <div class="container-modal-window">
                            <div class="card-modal-window">
                                <div class="closer"></div>
                                <div class="modal-window_foto"></div>
                                <div class="modal-window_item">
                                    <h3 class="name"></h3>
                                    <h4 class="type"></h4>
                                    <p class="describe paragraph-l"></p>
                                    <ul class="extra-option"></ul>
                                </div>
                            </div>
                        </div>
`;

let sectionPets = document.querySelector('.pets');

let learnMoreBTN;

document.addEventListener('click', (target) => {
    if (target.target.classList[0] === 'button-secondary'){
        learnMoreBTN = document.querySelectorAll('.button-secondary');
        let nameAnimal = target.target.parentNode.children[1].textContent;

        modalWindowBase(nameAnimal)

    }
    console.log(target.target.classList)
})

function modalWindowBase(key){

            console.log(key)
            let modalWindow = document.createElement('div');
            console.log(modalWindow)
            modalWindow.classList.add('modal');
            modalWindow.innerHTML = modalWindowHTML;
            sectionPets.append(modalWindow);
            const containerModalWindow = document.querySelector('.container-modal-window')
            containerModalWindow .classList.add('modal-base');
            containerModalWindow .classList.add('modal-start');

            const closerBtn = document.querySelector('.closer');
            closerBtn.addEventListener('click', () => {
                modalWindow.classList.remove('modal_watch');
                setTimeout(() => {
                    modalWindow.remove();
                }, 500);
            })
            //modalWindow.classList.add('modal_watch');
            let i = key;
            writeCard(i, modalWindow);

}



// help function

function writeCard(key, modalWindow){
    console.log(key, modalWindow)

    const CARDS = sectionPets.querySelectorAll('.card');



    let nameAnimal = document.querySelector('.modal h3');
    let typeAnimal = document.querySelector('.modal h4');
    let describeAnimal = document.querySelector('.modal p');
    let extraOption = document.querySelector('.modal ul');
    let textFoto = key;
    let foto = document.querySelector('.modal-window_foto');

    console.log(textFoto)
    const keyPetsDescribe = Object.keys(PETS_DESCRIBE)
    console.log(keyPetsDescribe)

    keyPetsDescribe.forEach(name => {
        console.log(name, textFoto.textContent, name===textFoto.textContent)
        if (name === key) {
            console.log(foto)

            nameAnimal.textContent = name;
            typeAnimal.textContent = PETS_DESCRIBE[name]['type']
            describeAnimal.textContent = PETS_DESCRIBE[name]['describe']

            console.log(name.toLowerCase() == 'katrine', name.toLowerCase());

            foto.classList.add(`${name.toLocaleLowerCase()}`);

            PETS_DESCRIBE[name]['extra-option'].forEach(el => {
                const itemExtraOption = document.createElement('li')
                itemExtraOption.textContent = el
                extraOption.append(itemExtraOption);
            })
            modalWindow.classList.add('modal_watch');
            return;
        }
    })
}

function giveBtn(){
    console.log(document.querySelectorAll('.button-secondary'))
    return document.querySelectorAll('.button-secondary')
}