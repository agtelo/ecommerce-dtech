
    const clickButton = document.querySelectorAll(".contenedor-btn");
    
    clickButton.forEach(btn => {
        btn.addEventListener("click" ,addToCarritoItem)
    })

    const servicio = []

    function addToCarritoItem(e) {
        const button = e.target;
        const item = button.closest(".servicios");
        const itemTitulo = item.querySelector(".titulo-del-servicio").textContent;
        const itemPrecio = item.querySelector(".precio-servicio").textContent;
        const itemImagen = item.querySelector(".imagen-servicio").src;
        const itemCantidad = 1;
    
        
       servicio.push(itemTitulo,itemPrecio,itemImagen,itemCantidad)
        
        
        
        localStorage.setItem("dato", JSON.stringify(servicio))
                    console.log(localStorage)
    }
    

    






