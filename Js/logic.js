window.addEventListener('scroll', function(){
    let navbar = document.getElementById("Navigation");

    if(window.pageYOffset >= 100){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});


        AOS.init({
            offset: 100,
            duration: 1000,
        });

