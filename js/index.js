window.onscroll = () => {
    let nav = document.getElementById("nav-scroll");
    // console.log("@@@", nav);

    if(this.scrollY <300){
        nav.className = "main-header";
        document.getElementById("top-btn").style.display = "none";
    }else{
        nav.className = "scroll-header";
        document.getElementById("top-btn").style.display = "block";
        document.getElementById("top-btn").style.visibility = "visible";  
    }
}

function openMenu(){
    if(window.outerWidth < 576){
        document.getElementById("menuOpen").style.width = "100%";
        document.getElementById("menuOpen").style.right = "0";
    }else{
        document.getElementById("menuOpen").style.width = "35%";
        document.getElementById("menuOpen").style.right = "0";
    }
}

function closeMenu(){
    // document.getElementById("menuOpen").style.display = "none";
    document.getElementById("menuOpen").style.right = "-100px";
    document.getElementById("menuOpen").style.width = "0%";

}

function scrollToTop(){
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// window.onscroll = () => {
//     // console.log("@@@", nav);

//     if(this.scrollY <300){
//         document.getElementById("top-btn").style.display = "none";
        
//     }else{
//         document.getElementById("top-btn").style.display = "block";
//         document.getElementById("top-btn").style.visibility = "visible";  
//     }
// }
