let propLightbox={imgContainer:document.getElementsByClassName("lightbox"),imagen:null,imagenSrc:null,cuerpoDom:document.getElementsByTagName("body")[0],lightbox_container:null,modal:null,cerrarModal:null,animacion:"fade"};$(document).ready((function(){let t={inicio:function(){for(let o=0;propLightbox.imgContainer.length;o++)propLightbox.imgContainer[o].addEventListener("click",t.capturaImagen)},capturaImagen:function(){propLightbox.imagen=this,t.lightbox(propLightbox.imagen)},lightbox:function(o){propLightbox.imagenSrc=o.firstChild.nextElementSibling.getAttribute("src"),propLightbox.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id","lightbox_container"),propLightbox.lightbox_container=document.getElementById("lightbox_container"),propLightbox.lightbox_container.style.width="100%",propLightbox.lightbox_container.style.height="100%",propLightbox.lightbox_container.style.position="fixed",propLightbox.lightbox_container.style.zIndex="1000",propLightbox.lightbox_container.style.background="rgba(0,0,0,0.8)",propLightbox.lightbox_container.style.top="0",propLightbox.lightbox_container.style.left="0",propLightbox.lightbox_container.appendChild(document.createElement("DIV")).setAttribute("id","modal"),propLightbox.modal=document.getElementById("modal"),propLightbox.modal.style.height="100%",propLightbox.modal.appendChild(document.createElement("IMG")).setAttribute("src",propLightbox.imagenSrc),propLightbox.modal.getElementsByTagName("img")[0].setAttribute("class","imagen-modal position-absolute"),"fade"==propLightbox.animacion&&(document.getElementsByClassName("imagen-modal")[0].style.opacity=0,setTimeout((function(){document.getElementsByClassName("imagen-modal")[0].style.opacity=1}),50)),propLightbox.modal.getElementsByTagName("img")[0].setAttribute("class","imagen-modal position-absolute"),propLightbox.modal.innerHTML+='<i class="cerrar-modal position-absolute text-secondary bi bi-x-square-fill"></i>',propLightbox.cerrarModal=document.getElementsByClassName("cerrar-modal")[0],propLightbox.cerrarModal.addEventListener("click",t.cerrarModal)},cerrarModal:function(){propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container)}};t.inicio()}));