window.addEventListener("click", function(){
    const clickButton = document.querySelectorAll(".contenedor-btn");
    
    clickButton.forEach(btn => {
        btn.addEventListener("click" ,addToCarritoItem)
    })



    
})


function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest(".servicios");
    const itemTitulo = item.querySelector(".titulo-del-servicio").textContent;
    const itemPrecio = item.querySelector(".precio-servicio").textContent;
    const itemImagen = item.querySelector(".imagen-servicio").src;
    const itemCantidad = 1

    localStorage.setItem("Nombre", itemTitulo);
    localStorage.setItem("Precio", itemPrecio);
    localStorage.setItem("Imagen", itemImagen);
    localStorage.setItem("Cantidad", itemCantidad);

    console.log(localStorage)    

}






