function carritoMagico() {
    // Lista de productos con sus nombres y precios
    const productos = [
        { nombre: "Elixir de Poder", precio: 1500 },
        { nombre: "Elixir de Mana", precio: 1250 },
        { nombre: "Elixir de Magia", precio: 1500 },
        { nombre: "Elixir Completo (Poder, Mana y Magia)", precio: 3250 },
        { nombre: "Espada de Serpiente", precio: 3500 },
        { nombre: "Espada de Leon", precio: 4200 },
        { nombre: "Báculo Hechicero de la Luz", precio: 5500 },
        { nombre: "Báculo Hechicero Oscuro", precio: 6250 },
        { nombre: "Capa de Invisibilidad", precio: 8800 },
        { nombre: "Doritos Magicos", precio: 12550 }
    ];

    // Función para mostrar la lista de productos
    function mostrarProductos() {
        console.log("Lista de productos:");
        productos.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre}, cuesta $${producto.precio}`);
        });
    }

    // Función para realizar una compra
    function hacerCompra() {
        const nombre = prompt("¡Hola! Por favor, ingrese su nombre:");
        alert(`Hola, ${nombre}! Bienvenido a la tienda mágica.`);

        const carrito = [];
        let total = 0;

        mostrarProductos(); // Mostrar la lista de productos una vez al inicio

        while (true) {
            const seleccion = prompt("Elija un producto (ingrese el nombre o número) o ingrese 'L' para finalizar la compra:");

            if (seleccion.toLowerCase() === 'l') {
                break;
            }

            let productoElegido;

            if (!isNaN(seleccion)) {
                const seleccionNumero = parseInt(seleccion);

                if (seleccionNumero >= 1 && seleccionNumero <= productos.length) {
                    productoElegido = productos[seleccionNumero - 1];
                } else {
                    alert("Opción inválida.");
                    continue;
                }
            } else {
                const seleccionMinusculas = seleccion.toLowerCase();
                productoElegido = productos.find(producto => producto.nombre.toLowerCase() === seleccionMinusculas);
            }

            if (productoElegido) {
                const cantidad = parseInt(prompt(`¿Cuántos ${productoElegido.nombre} desea comprar?`));

                if (!isNaN(cantidad) && cantidad > 0) {
                    const costoProducto = cantidad * productoElegido.precio;
                    total += costoProducto;
                    carrito.push(`${cantidad}x ${productoElegido.nombre} - $${costoProducto}`);
                    console.log(`Se agregaron ${cantidad} ${productoElegido.nombre} al carrito.`);
                } else {
                    alert("Ingrese una cantidad válida.");
                }
            } else {
                alert("Producto no encontrado.");
            }
        }

        // Mostrar resumen de la compra usando forEach
        console.log("Resumen de la compra:");
        carrito.forEach(item => {
            console.log(item);
        });

        console.log(`Total a pagar: $${total}`);
        alert(`Gracias por tu compra, ${nombre}! El total a pagar es $${total}.`);
    }

    hacerCompra();
}

carritoMagico();
