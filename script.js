/*======menu icon navbar=====*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*======scroll sections active link=====*/
let sections  = document.querySelectorAll('section');
let navlinks  = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    

    if(top >= offset && top < offset + height)
    {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
    };
});

    /*======Sticky Navbar=====*/
    let header = document.querySelector('.header');

    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkmode-icon')
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

/*====== Form Validation =====*/

function CheckInputs(event) {
    const form = document.querySelector("form");
    const items = document.querySelectorAll(".item");
    const emailRegex = /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{11}$/;
    let isValid = true; 


    for (const item of items) {
        if (item.value.trim() === "") {
            isValid = false;
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }

       
        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

    
    const emailField = document.getElementById("email");
    const emailError = document.querySelector(".error-txt.email");
    if (!emailField.value.match(emailRegex)) {
        isValid = false;
        emailField.classList.add("error");
        emailField.parentElement.classList.add("error");

        if (emailField.value === "") {
            emailError.innerText = "Email Address can't be blank";
        } else {
            emailError.innerText = "Enter a valid email address";
        }

        emailError.style.display = "block";

        emailField.addEventListener("keyup", () => {
            if (emailField.value.match(emailRegex)) {
                emailField.classList.remove("error");
                emailField.parentElement.classList.remove("error");
                emailError.style.display = "none";
            }
        });
    } else {
        emailField.classList.remove("error");
        emailField.parentElement.classList.remove("error");
        emailError.style.display = "none";
    }

    const phoneField = document.getElementById("phone");
    const phoneError = document.querySelector(".error-txt.phone");
    if (!phoneField.value.match(phoneRegex)) {
        isValid = false;
        phoneField.classList.add("error");
        phoneField.parentElement.classList.add("error");

        if (phoneField.value === "") {
            phoneError.innerText = "Phone Number can't be blank";
        } else {
            phoneError.innerText = "Phone Number must be 11 digits";
        }

        phoneError.style.display = "block";


        phoneField.addEventListener("keyup", () => {
            if (phoneField.value.match(phoneRegex)) {
                phoneField.classList.remove("error");
                phoneField.parentElement.classList.remove("error");
                phoneError.style.display = "none";
            }
        });
    } else {
        phoneField.classList.remove("error");
        phoneField.parentElement.classList.remove("error");
        phoneError.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault(); 
    } else {
        
        setTimeout(() => {
            form.reset(); 
            items.forEach((item) => {
                item.classList.remove("error"); 
                item.parentElement.classList.remove("error");
            });
        }, 100); 
    }
}

/*======Scroll Reveal=====*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img , .services-container, .project-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.about-img img', { origin: 'right' });

ScrollReveal().reveal('.home-content h1', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });