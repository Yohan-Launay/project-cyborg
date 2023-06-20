

////////////// scroll


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a')

window.onscroll = () =>{

  section.forEach(sec =>{

    let top = window.scrollY;
    let offset = sec.offsetTop - 0;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
      });
    }

  })
}


/////////////////////// video 

let btn = document.querySelector('.watch');

let videoContainer = document.querySelector('.video-container');

let close = document.querySelector('.close');

btn.addEventListener('click', () => {
  videoContainer.classList.add('show');
})

close.addEventListener('click', () => {
  videoContainer.classList.remove('show');
})


////////// img gallery



let images = document.querySelectorAll('.img-gallery');
let imagesLight = document.querySelector('.image-zoom');
let contenairLight = document.querySelector('.image-light');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
      apparenceImage(image.getAttribute('src'))
    
    })
})

contenairLight.addEventListener('click', (e) =>{
    if(e.target !== imagesLight){
        contenairLight.classList.remove('show');
        imagesLight.classList.remove('showImage'); 
    }
})

const apparenceImage = (image) =>{
    imagesLight.src = image;
    contenairLight.classList.add('show');
    imagesLight.classList.add('showImage');
}

//////////////////////////// reveal


let revealElements = document.querySelectorAll(".section-title");
let fadeElements = document.querySelectorAll('.section-desc');

scrollAnim = () => {
	let windowHt = window.innerHeight;
	revealElements.forEach(elements => {
		let elementPos = elements.getBoundingClientRect().top;
		if (elementPos <= windowHt / 1.3 ) {
			elements.classList.add('revealed');
		}
	});
	fadeElements.forEach(element => {
		let elementPos = element.getBoundingClientRect().top;
		if (elementPos <= windowHt / 1.3 ) {
			element.classList.add('faded-in');
		}
	});
}

document.addEventListener("DOMContentLoaded", scrollAnim);

window.addEventListener('scroll', scrollAnim);





