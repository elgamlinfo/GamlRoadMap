//set variables
let overlay = document.querySelector(".overlay"),
    exeBtn = document.querySelector(".exe_btn"),
    mul_lang = document.querySelectorAll(".mul_lang"),
    prop_1 = document.querySelector(".p_1"),
    prop_2 = document.querySelector(".p_2"),
    link_1 = document.querySelector(".l_1"),
    link_2 = document.querySelector(".l_2");


//functions



//Events Hundler    
mul_lang.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display = "block";
        mul_lang.forEach((i) => {
            if (i.id == "html") {
                prop_1.textContent = "HTML4";
                prop_2.textContent = "HTML5";
                link_1.href= "https://www.youtube.com/playlist?list=PLDoPjvoNmBAwClZ1PDcjWilxp9YERUbNt";
                link_2.href = "https://www.youtube.com/playlist?list=PLDoPjvoNmBAyXCAQMLhDRZsLi_HurqTBZ";
            }
            else if (item.id == "css") {
                prop_1.textContent = "CSS";
                prop_2.textContent = "CSS3";
                link_1.href= "https://www.youtube.com/playlist?list=PLDoPjvoNmBAzAeIcXA3_JsmSkPKOs9W-Y";
                link_2.href = "https://www.youtube.com/playlist?list=PLDoPjvoNmBAyEyQaHOHO1HJtmSgGt07VC";
            }
            else if (item.id == "bootstrap") {
                prop_1.textContent = "Bootstrap3";
                prop_2.textContent = "Bootstrap4";
                link_1.href= "https://www.youtube.com/playlist?list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts";
                link_2.href = "https://www.youtube.com/playlist?list=PLDoPjvoNmBAy0dU3C3_lNRTSTtqePEsI2";
            }
        }
        )
    })
});

exeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
})

