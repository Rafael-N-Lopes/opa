//troca de imagem ao clicar no botão de next ou previu
let result = 1;

function proxImage(number) {
    const currentImage = document.querySelector('.js-image');

    result += number;

    if(result <= 0){
        result = 1;
    } else if (result > 4) {
        result = 4;
    }

    currentImage.src = `/image/image-number${result}.jpg`;
}

//rolar suave até a seção do link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//adicionar background ao header ao usar o o scroll

window.addEventListener('scroll', () =>{
    let header = document.querySelector('.header');
    let scrollPosition = window.scrollY;

    if(scrollPosition > 100){
        header.classList.add('header-background');
    } else {
        header.classList.remove('header-background');
    }
});

//redimensionamento ao body

function adjustContainerHeight() {
    let bodyHeight = document.body.clientHeight; // Obtém a altura do body
    let container = document.querySelector('.container-svg');
    container.style.height = bodyHeight + 'px'; // Define a altura do contêiner igual à altura do body
  }

  window.addEventListener('load', function() {
    adjustContainerHeight(); // Ajusta a altura do contêiner inicialmente
  });

  window.addEventListener('resize', function() {
    adjustContainerHeight(); // Ajusta a altura do contêiner ao redimensionar a janela
});

//animação a LOGO ao ser clicada

const logo = document.querySelector('.logo-text');
logo.addEventListener('click', () => {
    logo.classList.add('logo-text-clicked');

    setTimeout(() => {
        logo.classList.remove('logo-text-clicked')
    }, 100);
});



//retirar a tela de maintenance ao clicar no botão

// const buttonEnter = document.querySelector('.maintenance-content-button');
// const maintenanceContent = document.querySelector('.maintenance-content');

// buttonEnter.addEventListener('click', () =>{ 
//     maintenanceContent.style.display = 'none'
// });



//preenchimento da linha de contato

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let buttonEnviar = document.querySelector('.button-enviar');

input1.addEventListener('input', progressBar);
input2.addEventListener('input', progressBar);
input3.addEventListener('input', progressBar);
buttonEnviar.addEventListener('click', updateProgressBar);

function updateProgressBar() {
    finalResult = progressBar(); 
    sendMessage(finalResult);
}


function progressBar() {
    valueInput1 = input1.value;
    valueInput2 = input2.value;
    valueInput3 = input3.value;
    final = 0;

    if(valueInput1.length > 3 && final >= 0) {
        final += 1;
        input1.style.border = '3px solid var(--green-color)';
    } else {
        input1.style.border = '';
    }
 

    if(valueInput2.length > 5 && final >= 0) {
        input2.style.border = '3px solid var(--green-color)';
        final += 1;
    } else {
        input2.style.border = '';
    }


    if(valueInput3.length > 10 && final >= 0) {
        input3.style.border = '3px solid var(--green-color)';
        final += 1;
    } else {
        input3.style.border = '';
    }


    if(final === 0){
        line1.style.background = '';
        line2.style.background = '';
        line3.style.background = '';

        circle1.style.backgroundColor = '';
        circle2.style.backgroundColor = '';
        circle3.style.backgroundColor = '';

        input1.style.border = '';
        input2.style.border = '';
        input3.style.border = '';
        
        buttonEnviar.classList.remove('js-button-enviar');
    } else if (final === 1){
        line1.style.background = 'var(--green-color)';
        line2.style.background = '';
        line3.style.background = '';

        circle1.style.backgroundColor = 'var(--green-color)';
        circle2.style.backgroundColor = '';
        circle3.style.backgroundColor = '';
    } else if (final === 2) {
        line1.style.background = 'var(--green-color)';
        line2.style.background = 'var(--green-color)';
        line3.style.background = '';

        circle1.style.backgroundColor = 'var(--green-color)';
        circle2.style.backgroundColor = 'var(--green-color)';
        circle3.style.backgroundColor = '';
    } else if (final >= 3) {
        line1.style.background = 'var(--green-color)';
        line2.style.background = 'var(--green-color)';
        line3.style.background = 'var(--green-color)';

        circle1.style.backgroundColor = 'var(--green-color)';
        circle2.style.backgroundColor = 'var(--green-color)';
        circle3.style.backgroundColor = 'var(--green-color)';
    }

    if(final === 3){
        buttonEnviar.classList.add('js-button-enviar');
    }
    return final;
}

function sendMessage (result) {
    text = document.querySelector('.send-text');

    if(result === 3){
        text.style.opacity = '100%';
        
    setInterval(() => {  
            text.style.opacity = '0%'
        },3000);
    clearInterval();
    resetContent();
    }
}

function resetContent() {
    input1.value = '';
    input2.value = '';
    input3.value = '';
    progressBar();
}