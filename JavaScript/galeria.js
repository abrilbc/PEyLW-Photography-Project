const galeriaBox = document.getElementById('img-box')
const ranking = document.getElementById('ranking');

const arregloImagenes = [
    { id: 1, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn1.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 2, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda6.jpg', alt: 'Boda', mg: 0 },
    { id: 3, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza8.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 4, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato5.jpg', alt: 'Retrato', mg: 8 },
    { id: 5, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda3.png', alt: 'Boda', mg: 0 },
    { id: 6, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato7.jpeg', alt: 'Retrato', mg: 7 },
    { id: 7, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn12.png', alt: 'Recien Nacido', mg: 0 },
    { id: 8, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza6.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 9, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st2.jpg', alt: 'Street Photography', mg: 0 },
    { id: 10, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn11.png', alt: 'Recien Nacido', mg: 0 },
    { id: 11, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato2.jpg', alt: 'Retrato', mg: 8 },
    { id: 12, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st6.jpg', alt: 'Street Photography', mg: 0 },
    { id: 13, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda8.jpg', alt: 'Boda', mg: 0 },
    { id: 14, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza3.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 15, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn6.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 16, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato1.jpg', alt: 'Retrato', mg: 0 },
    { id: 17, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st5.jpg', alt: 'Street Photography', mg: 0 },
    { id: 18, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda5.jpg', alt: 'Boda', mg: 0 },
    { id: 19, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato8.jpeg', alt: 'Retrato', mg: 0 },
    { id: 20, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza7.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 21, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn9.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 22, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st1.jpg', alt: 'Street Photography', mg: 0 },
    { id: 23, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda9.jpg', alt: 'Boda', mg: 0 },
    { id: 24, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza5.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 25, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato4.jpg', alt: 'Retrato', mg: 0 },
    { id: 26, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st9.jpg', alt: 'Street Photography', mg: 0 },
    { id: 27, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda10.jpg', alt: 'Boda', mg: 0 },
    { id: 28, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn7.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 29, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato3.jpg', alt: 'Retrato', mg: 0 },
    { id: 30, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza10.jpeg', alt: 'Naturaleza', mg: 0 },
    { id: 31, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st7.jpg', alt: 'Street Photography', mg: 0 },
    { id: 32, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda7.jpg', alt: 'Boda', mg: 0 },
    { id: 33, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato9.jpeg', alt: 'Retrato', mg: 0 },
    { id: 34, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn4.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 35, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza4.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 36, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda2.jpg', alt: 'Boda', mg: 0 },
    { id: 37, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato6.jpeg', alt: 'Retrato', mg: 0 },
    { id: 38, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st8.jpg', alt: 'Street Photography', mg: 0 },
    { id: 39, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn5.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 40, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda4.jpg', alt: 'Boda', mg: 0 },
    { id: 41, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza1.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 42, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato1.jpg', alt: 'Retrato', mg: 0 },
    { id: 43, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st4.jpg', alt: 'Street Photography', mg: 0 },
    { id: 44, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda1.png', alt: 'Boda', mg: 17 },
    { id: 45, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza2.jpg', alt: 'Naturaleza', mg: 2 },
    { id: 46, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato8.jpeg', alt: 'Retrato', mg: 0 },
    { id: 47, categoria: 'street', src: '../Imagenes/Galeria/StreetPhotography/st3.jpg', alt: 'Street Photography', mg: 0 },
    { id: 48, categoria: 'newborn', src: '../Imagenes/Galeria/RecienNacidos/newborn3.jpg', alt: 'Recien Nacido', mg: 0 },
    { id: 49, categoria: 'boda', src: '../Imagenes/Galeria/Boda/boda10.jpg', alt: 'Boda', mg: 0 },
    { id: 50, categoria: 'naturaleza', src: '../Imagenes/Galeria/Naturaleza/naturaleza9.jpg', alt: 'Naturaleza', mg: 0 },
    { id: 51, categoria: 'retrato', src: '../Imagenes/Galeria/Retratos/retrato9.jpeg', alt: 'Retrato', mg: 0 },
]

window.onload = function() {
    cargarLikes();
    mostrarImagenes(arregloImagenes)
    mostrarRanking()
}

function mostrarImagenes(arreglo) {
    galeriaBox.innerHTML = ''
    arreglo.forEach(imagen => {
        let div = document.createElement('div')
        div.classList.add('imagen')
        
        let img = document.createElement('img')
        img.src = imagen.src
        img.alt = imagen.alt
        img.id = imagen.id
        img.classList.add(imagen.categoria)

        //If para que se aplique el estilo a "todas" cuando carga la pag 
        if(arreglo.length === arregloImagenes.length) {
            texto = document.getElementById('todas')
            texto.classList.add('activo')
        }

        /* BOTON PARA DAR ME GUSTA */
        let botonMG = document.createElement('div')
        let likeImg = document.createElement('img')
        likeImg.src = '../Imagenes/Icons/Like/like.png'
        botonMG.classList.add('boton-mg')

        /* TEXTO DE LIKES */
        let likeTexto = document.createElement('span');
        likeTexto.classList.add('like-text');
        likeTexto.innerText = imagen.mg;

        botonMG.addEventListener('click', function() {
            darLike(imagen.id, likeTexto);
        });

        /* BOTON PARA MOSTRAR IMAGEN COMPLETA */
        div.appendChild(img)
        div.appendChild(botonMG)
        botonMG.appendChild(likeTexto);
        botonMG.appendChild(likeImg)
        galeriaBox.appendChild(div)
    })
}

function filtrarImagenes(categoria){
    let text_categ = document.getElementById(categoria)
    const categorias = document.querySelectorAll('#lista-filtro li')
    for (let i = 0 ; i < categorias.length ; i++) {
        categorias[i].classList.remove('activo')
    }

    if (categoria === 'todas') {
        mostrarImagenes(arregloImagenes)
        text_categ.classList.add('activo')
    } else {
        let imagenesFiltradas = []
        for (let i = 0 ; i < arregloImagenes.length ; i++) {
            if (arregloImagenes[i].categoria === categoria) {
                imagenesFiltradas.push(arregloImagenes[i])
            }
        }
        text_categ.classList.add('activo')
        mostrarImagenes(imagenesFiltradas)
    }
}

function guardarLikes() {
    localStorage.setItem('imagenes', JSON.stringify(arregloImagenes));
}

function darLike(id, textoLike) {
    for (let i = 0 ; i < arregloImagenes.length ; i++) {
        if (arregloImagenes[i].id === id) {
            arregloImagenes[i].mg += 1;
            textoLike.innerText = arregloImagenes[i].mg;
            break;
        }
    }
    guardarLikes()
    mostrarRanking();
}

function ordenarPorLikes() {
    let imagenesLocalStorage = JSON.parse(localStorage.getItem('imagenes'));

    imagenesLocalStorage.sort(function(a, b) {
        return b.mg - a.mg;
    });

    return imagenesLocalStorage;
}

function cargarLikes() {
    const likesGuardados = JSON.parse(localStorage.getItem('imagenes'));
    if (likesGuardados) {
        for (let i = 0; i < arregloImagenes.length; i++) {
            const imgGuardada = likesGuardados.find(like => like.id === arregloImagenes[i].id);
            if (imgGuardada) {
                arregloImagenes[i].mg = imgGuardada.mg;
            }
        }
    }
}

function mostrarRanking() {
    ranking.innerHTML = '<h2>LAS MAS LIKEADAS   </h2>';
    
    let arreglo_ordenadas = ordenarPorLikes()
    for (let i = 1 ; i <= 5 ; i++) {
        imagen = arreglo_ordenadas[i]
        idImg = imagen.id

        let linkA = document.createElement('a')
        linkA.href = "#" + idImg

        let imgRanking = document.createElement('img')
        let contenedorRanking = document.createElement('div')
        imgRanking.src = imagen.src

        contenedorRanking.classList.add('contenedor-ranking')
        contenedorRanking.innerHTML = "<h3>Puesto N° " + i + "</h3>"
        contenedorRanking.innerHTML += "<b>Likes</b>: " + imagen.mg

        linkA.appendChild(imgRanking)
        contenedorRanking.appendChild(linkA)
        ranking.appendChild(contenedorRanking)
    }
}



