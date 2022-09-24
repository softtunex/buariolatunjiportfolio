

// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
});

document.addEventListener('mousemove', (e) =>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width/2;
    const anchorY = rekt.top + rekt.height/2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    console.log(angleDeg)
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye=>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

function angle(cx,cy,ex,ey){
    const dy = ey -cy;
    const dx = ex -cx;

    const rad = Math.atan2(dy,dx)
    const deg =rad *180/ Math.PI
    return deg

}

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")

        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden")
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

hiddenElement.forEach((el)=>observer.observe(el))

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})