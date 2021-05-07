class Producto {
    constructor(carritoProductos){
        let carrito = carritoProductos

        this.calculoTotalCarrito = () => {
            let total = 0
                for (let producto of carrito){
                    total += parseFloat(producto.precio)
                    
                }
                return total
            }

            this.aplicoDescuentoAlTotalCarrito = () => {
                let totalConDescuento = 0
                let totalSinDescuento = this.calculoTotalCarrito()
                    const r = DESCUENTO.find(d => d.total == carrito.length)
                        if( r == undefined){
                            totalConDescuento = totalSinDescuento
                        } else {
                            totalConDescuento = (totalSinDescuento * parseFloat(r.factor))
                        }

                return totalConDescuento
            }

    }
}
