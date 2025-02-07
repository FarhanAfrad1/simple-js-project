const button = document.getElementsByClassName('button')
/* here getElementByClassName gives a HTML collection. By default we can not use forEach
in HTML collection. That why I converted it into an array by using "Array.from" method.Now it is an array and I can perform any array related task */
const allButton = Array.from(button);
const body = document.querySelector('body');

allButton.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const color = e.target.id
        switch(color){
            case 'grey': body.style.backgroundColor = color;
            break;

            case 'white': body.style.backgroundColor = color;
            break;

            case 'skyblue': body.style.backgroundColor = color;
            break;

            case 'yellow': body.style.backgroundColor = color;
            break;

            default: body.style.backgroundColor = "white"

        }
    })
})

