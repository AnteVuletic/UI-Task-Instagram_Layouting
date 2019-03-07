let item = document.querySelectorAll(".content__item");
let modal = document.querySelector(".modal__wrapper");
let modalImage = document.querySelector(".modal__image");
let modalClose = document.querySelector(".modal__close");

document.addEventListener("click",(event)=>{
    if(modal.classList.contains('modal__wrapper-visible')){
        if(event.target === modal || event.target === modalClose){
            modal.classList.remove('modal__wrapper-visible');
        }
    }
    for(let element of item){
        if(event.target === element.childNodes[3]){
            const imageTargeted = element.childNodes[1].childNodes[1].cloneNode(true);
            modal.classList.add('modal__wrapper-visible');
            modalImage.appendChild(imageTargeted);
        }
    }
    return event;
});