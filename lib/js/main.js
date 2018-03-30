
let myIndex = 0;

function carousel() {
    let slides = document.getElementsByClassName("slide");
    for (let slide of slides){
    	slide.classList.add("hidden");
    }
    myIndex++;
    if (myIndex > slides.length) {myIndex = 1}    
    slides[myIndex-1].classList.remove("hidden");  
    setTimeout(carousel, 4000); 
}

let gallery=$('#gallery');
gallery.poptrox({
	usePopupCaption: true
});

carousel();