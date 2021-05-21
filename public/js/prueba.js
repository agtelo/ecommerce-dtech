
    const clickButton = document.querySelectorAll(".contenedor-btn");
    
    clickButton.forEach(btn => {
        btn.addEventListener("click" ,addToCarritoItem)
    
    const carrito = [];

        function addToCarritoItem(e) {
            const button = e.target;
            const item = button.closest(".servicios");
            const itemTitulo = item.querySelector(".titulo-del-servicio").textContent;
            const itemPrecio = item.querySelector(".precio-servicio").textContent;
            const itemImagen = item.querySelector(".imagen-servicio").src;
            const itemCantidad = 1;
        
            

            
            
            const servicioACarrito = {
                titulo : itemTitulo,
                precio : itemPrecio,
                imagen : itemImagen,
                cantidad : itemCantidad

            }


            carrito.push(servicioACarrito)
            JSON.stringify(localStorage.setItem("carrito", carrito))
            
            console.log(localStorage)
        
        }
            
        
    }
)









