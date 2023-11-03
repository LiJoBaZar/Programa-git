document.activeElementListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll('a[href^="#"]')
    for (const link of links){
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e){
        e.preventDefault();
        const targerId = this.getAttribute ("href").substring(1);
        const targerElement = document.getElementById(targerId);

        if (targetElement){
            window.scrollTo({
                top: targerElement.offsetTop - 50,
                behavior: "smooth"
            })
        }
    }
})