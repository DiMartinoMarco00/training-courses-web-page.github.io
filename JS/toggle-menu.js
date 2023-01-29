(function()
{
   "use strict";

    const  menuBtn = document.getElementById("menu-btn");
    let navbar = document.getElementById("navbar");

    navbar.style.right = "-200px";
    
    menuBtn.onclick = function()
    {
        if(navbar.style.right == "-200px")
        {
            navbar.style.right = "0"
        }
        else
        {
            navbar.style.right = "-200px"
        }
    }
}());