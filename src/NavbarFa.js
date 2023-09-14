import React from 'react'

export default function NavbarFa() {
    document.getElementById("menuButton").addEventListener("click", function(){
        let menu = document.getElementById("menu");
        if(menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    });
  return (
    <div>
        <div className="container mx-auto">
            <div className="flex justify-between">
            <div>
                Logo
            </div>
            <div id="menu" className="hidden md:flex space-x-4">
                <a href="#" className="text-white">Accueil</a>
                <a href="#" className="text-white">À propos</a>
                <a href="#" className="text-white">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
                <button id="menuButton">☰</button>
            </div>
            </div>
        </div>
    
    </div>
  )
}
