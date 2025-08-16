let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".dropdown-content");
    let getSidebarul = document.querySelector(".dropdown-content ul");
    let getclosebutton = document.querySelector(".close-button");

    if(toggleNavStatus===false){

        getSidebar.style.width = "80vw";
        document.body.style.overflowY = 'hidden';
        toggleNavStatus = true;
}
}

let closeNav = function(){
    let getSidebar = document.querySelector(".dropdown-content");
    if(toggleNavStatus===true){
        getSidebar.style.width = "0px";
        document.body.style.overflowY = 'visible';
        toggleNavStatus = false;
}

}
