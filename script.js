import SplitType from "split-type";
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
    const myText = new SplitType('#header');
    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    });

    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay")
    const closeMenuBtn = document.querySelector(".menu-close-btn")
    const links = document.querySelectorAll("a")

    gsap.from(menu, {
        delay: 1.1,
        height: 0,
        duration: 1,
        ease: "power2.inOut"
    });

    menu.addEventListener('click', () => {
        openMenu();
    });

    closeMenuBtn.addEventListener('click', () => {
        closeMenu();
    })
    links[0].addEventListener('click', () => {
        closeMenu();
    })
    links[1].addEventListener('click', () => {
        closeMenu();
    })
    links[2].addEventListener('click', () => {
        closeMenu();
    })
    links[3].addEventListener('click', () => {
        closeMenu();
    })

    function openMenu() {
        gsap.set([overlay, closeMenuBtn], { opacity: 0, visibility: "visible" });
        gsap.to([overlay, closeMenuBtn], {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
        })
        //scroll to top when clicking menu
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    function closeMenu() {
        gsap.to([overlay, closeMenuBtn], {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.set([overlay, closeMenuBtn], { visibility: "hidden" });
            },
        });
    }
})