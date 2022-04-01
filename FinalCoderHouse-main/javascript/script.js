// Aquí comienza un código que encontré en internet para el menú acordeón en el curso de DW.

const toggleButton = document.getElementsByClassName('acordeon')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}
)

//Fin del código menú acordeón.



class Producto { 
    constructor(id,nombre,precio){ //creo el objeto producto
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
    }
}

const productos = [];

productos.push(new Producto("1","taza",600));
productos.push(new Producto("2","apoya cuchara",200));
productos.push(new Producto("3","bowl",400));
productos.push(new Producto("4","bandeja",800));

    function buscarId(busc, producto){
        return busc.find(obj => obj.id === producto.toUpperCase())
    }


    for (i=0; i<1;i++){
        let busqueda = buscarId(productos, prompt("Ingresa el id del producto que desea observar \n 1- Taza \n 2- Apoya Cuchara \n 3- Bowl \n 4- Bandeja"));
        if(busqueda!= undefined){
            alert("El producto es: " + busqueda.nombre + "\nSu número de id es: " + busqueda.id + "\nY su precio es de: " + busqueda.precio)
        }else{
            alert("No existe ese producto")
        }
    }




