let typed = new Typed('.auto-input',{
    strings: ['', 'Web Developer!', 'Web Designer!', 'Graphic Designer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});
let navLinks = document.querySelectorAll('nav ul li a');
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if(scrollPos > section.offserTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.slassList.add('active');
                }
            });
        }
    });
});