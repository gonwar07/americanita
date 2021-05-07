let producto="",carrito=[];const btnVerCarrito=$("#btnVerCarrito"),btnVolver=$("#btnVolver"),btnFinalizarCompra=$("#btnFinalizarCompra");let grillaDeProductos=document.getElementById("grillaDeProductos"),grillaDetalleCheckOut=document.getElementById("grillaDetalleCheckOut");const ofertaDeProductos=$("#ofertaDeProductos"),checkOut=$("#checkOut");let btnEliminar=document.getElementsByClassName("btn-eliminar");producto=new Producto(carrito);const URLJSON="js/productos.json";function cargoProductos(){$.getJSON(URLJSON,((t,o)=>{if("success"===o){grillaDeProductos.innerHTML="";let o="";for(let e of t)"numero"==e.talle?(o=`<div class="card">\n                            <div class="contenedor-img row g-0">\n                                <div class="lightbox bg-warning col-4 col-sm-3 col-md-3 col-lg-3 col-xl-4">\n                                    <img src="${e.imagen}" class"foto-prod" style="width: 100%; height:100%;">\n                                </div>\n                            <div class="contenedor-texto-prod bg-success col-8 col-sm-9 col-md-9 col-lg-9 col-md-9 col-xl-8">\n                                <div class="card-body" style="margin-top: 2vw;">\n                                    <h5 class="card-title style="color: #000000b3; font-weight: bold;">${e.nombre}</h5>\n                                    <p class="card-text" style="color: #000000b3;">${e.descripcion}</p>\n                                    <p class="card-text"><p class="text-muted" style="color: #000000b3;">${e.precio}</p></p>\n                                    <select class="form-select" aria-label=".form-select-sm example"><option selected>Elegí tu talle</option>\n                                    <option value="1">26</option>\n                                    <option value="2">28</option>\n                                    <option value="3">30</option>\n                                    <option value="4">32</option>\n                                    <option value="5">34</option>\n                                    <option value="6">36</option>\n                                    <option value="7">38</option>\n                                    <option value="8">40</option></select>\n                                    <button class="btn btn-agregar style="color: #000000b3;" onclick="agregoProductoAlCarrito(${e.prod_id})"><i class="agregar bi bi-plus-circle-fill"></i></button>\n                                    <div class="texto-agregar position-absolute bg-secondary text-dark w-auto h-auto">Hace click para agregar éste producto a tu carrito</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`,grillaDeProductos.innerHTML+=o):(o=`<div class="card">\n                        <div class="contenedor-img row g-0">\n                            <div class="lightbox bg-warning col-4 col-sm-3 col-md-3 col-lg-3 col-xl-4">\n                                <img src="${e.imagen}" class"foto-prod" style="width: 100%; height:100%; float: left;">\n                            </div>\n                        <div class="contenedor-texto-prod bg-success col-8 col-sm-9 col-md-9 col-lg-9 col col-xl-8">\n                            <div class="card-body" style="margin-top: 2vw;">\n                                <h5 class="card-title style="color: #000000b3; font-weight: bold;">${e.nombre}</h5>\n                                <p class="card-text" style="color: #000000b3;">${e.descripcion}</p>\n                                <p class="card-text"><p class="text-muted" style:"color: #000000b3;">${e.precio}</p></p>\n                                <select class="form-select" aria-label=".form-select-sm example"><option selected>Elegí tu talle</option>\n                                <option value="1">XS</option>\n                                <option value="2">S</option>\n                                <option value="2">M</option>\n                                <option value="4">L</option>\n                                <option value="5">XL</option></select>\n                                <button class="btn btn-agregar style="color: #000000b3;" onclick="agregoProductoAlCarrito(${e.prod_id})"><i class="agregar bi bi-plus-circle-fill"></i></button>\n                                <div class="texto-agregar position-absolute bg-secondary text-dark w-auto h-auto">Hace click para agregar éste producto a tu carrito</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>`,grillaDeProductos.innerHTML+=o)}}))}const agregoProductoAlCarrito=t=>{let o=PRODUCTOS.find((o=>o.prod_id==t));$(".form-select"),"Elegí tu talle"==event.target.parentElement.parentElement.childNodes[8].nextElementSibling.value?Swal.fire({icon:"warning",text:"Debes elegir tu talle!"}):(carrito.push(o),guardoCarrito())},guardoCarrito=()=>{let t=JSON.stringify(carrito);localStorage.setItem("carrito",t)},eliminoProductoCarrito=t=>{let o=PRODUCTOS.find((o=>o.prod_id==t)),e=carrito.indexOf(o);carrito.splice(e,1);let r=event.target;if("BUTTON"==r.tagName)return!1;r.parentElement.parentElement.parentNode.remove(),Swal.fire({icon:"success",text:"El producto fue eliminado de tu carrito",showConfirmButton:!1,timer:1500}),guardoCarrito(),armoCheckOut()};cargoProductos(),$("button#btn").on("click",agregoProductoAlCarrito);const armoCheckOut=()=>{let t=JSON.parse(localStorage.getItem("carrito")),o="";grillaDetalleCheckOut.innerHTML="";for(let e of t)o=`<tr>\n                    <td>${e.nombre}</td>\n                    <td> <button class="btn btn-eliminar text-dark" id="but-el" onclick="eliminoProductoCarrito(${e.prod_id})"><i class="i-cierre bi bi-x-circle-fill"></i></button><div class="texto-eliminar position-absolute w-auto h-auto">Eliminar producto del carrito</div></td>\n                    <td class="right">$ ${e.precio}</td>\n                    </tr>`,grillaDetalleCheckOut.innerHTML+=o;var e=0;for(let o in t)e+=t[o].precio;o='<tr>\n                       <td>Total de compra</td>\n                       <td></td>\n                       <td class="right">$ '+e+"</td>\n                   </tr>",grillaDetalleCheckOut.innerHTML+=o;let r=0,l=e;function a(){const o=DESCUENTO.find((o=>o.total==t.length));return r=null==o?l:l*parseFloat(o.factor),r}o='<tr>\n                    <td>Descuento conseguido</td>\n                    <td></td>\n                    <td class="right">$ '+(e-a())+"</td>\n                   </tr>",grillaDetalleCheckOut.innerHTML+=o,o='<tr class="total-compra border border-1 border-dark" style="font-weight:bold;">\n                    <td>Total a pagar</td>\n                    <td></td>\n                    <td class="right total">$ '+a()+"</td>\n                    </tr>",grillaDetalleCheckOut.innerHTML+=o,alternarListadoProductosCheckOut()},alternarListadoProductosCheckOut=()=>{ofertaDeProductos.toggleClass("hide"),checkOut.toggleClass("hide")},finalizarCompra=()=>{let t=$(".total")[0].firstChild.data;0==carrito.length?Swal.fire({icon:"error",text:"No hay ningún producto en el carrito!",confirmButtonColor:"#09549a"}):Swal.fire({title:"¿Estás seguro/a?",text:"El monto total a abonar es "+t,icon:"warning",showCancelButton:!0,confirmButtonColor:"#09549a",cancelButtonColor:"#d33",confirmButtonText:"Confirmar",cancelButtonText:"Cancelar"}).then((t=>{t.isConfirmed&&(Swal.fire({icon:"success",text:"Gracias por tu compra!",showConfirmButton:!1,timer:2e3}),setTimeout((()=>{carrito=[],alternarListadoProductosCheckOut()}),2e3),localStorage.clear("carrito"))}))};btnVerCarrito.on("click",(()=>{0==carrito.length?Swal.fire({icon:"warning",text:"El carrito de compras se encuentra vacío",showConfirmButton:!1,timer:1500}):armoCheckOut()})),btnVolver.on("click",alternarListadoProductosCheckOut),btnFinalizarCompra.on("click",finalizarCompra);
