
const imagen=[...document.querySelectorAll('.main-section-img')]
let index=0;


imagen.map(imagen=>imagen.setAttribute('id',`${index++}`))
imagen.map(imagen=>{
    if(imagen.id==='0'){
        imagen.style.backgroundImage="url('./img/cayman_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='1'){
        imagen.style.backgroundImage="url('./img/cies_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='2'){
        imagen.style.backgroundImage="url('./img/cook_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='3'){
        imagen.style.backgroundImage="url('./img/corsican_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    
    if(imagen.id==='4'){
        imagen.style.backgroundImage="url('./img/eolias_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='5'){
        imagen.style.backgroundImage="url('./img/feroe_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='6'){
        imagen.style.backgroundImage="url('./img/lofoten_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='7'){
        imagen.style.backgroundImage="url('./img/mallorca_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='8'){
        imagen.style.backgroundImage="url('./img/mauricio_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='9'){
        imagen.style.backgroundImage="url('./img/oki_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='10'){
        imagen.style.backgroundImage="url('./img/phiphi_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='11'){
        imagen.style.backgroundImage="url('./img/rab_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='12'){
        imagen.style.backgroundImage="url('./img/rosario_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='13'){
        imagen.style.backgroundImage="url('./img/santorini_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }
    if(imagen.id==='14'){
        imagen.style.backgroundImage="url('./img/shetland_ISLAND.jpg')"
        imagen.style.backgroundSize="cover"
    }

})


   




document.addEventListener('click',(e)=>{
  
    if(e.target.id==='0'){window.location.href="pages/cayman.html"}
    if(e.target.id==='1'){window.location.href="pages/cies.html"}
    if(e.target.id==='2'){window.location.href="pages/cook.html"}
    if(e.target.id==='3'){window.location.href="pages/corsicans.html"}
    if(e.target.id==='4'){window.location.href="pages/eolias.html"}
    if(e.target.id==='5'){window.location.href="pages/feroe.html"}
    if(e.target.id==='6'){window.location.href="pages/lofoten.html"}
    if(e.target.id==='7'){window.location.href="pages/mallorca.html"}
    if(e.target.id==='8'){window.location.href="pages/mauricio.html"}
    if(e.target.id==='9'){window.location.href="pages/oki.html"}
    if(e.target.id==='10'){window.location.href="pages/phiphi.html"}
    if(e.target.id==='11'){window.location.href="pages/rab.html"}
    if(e.target.id==='12'){window.location.href="pages/rosario.html"}
    if(e.target.id==='13'){window.location.href="pages/santorini.html"}
    if(e.target.id==='14'){window.location.href="pages/shetland.html"}





})

