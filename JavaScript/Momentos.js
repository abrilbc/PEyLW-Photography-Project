const arreglosImagenes = {
    boxing: [
        '../Imagenes/Eventos/Boxing/boxing1.jpg',
        '../Imagenes/Eventos/Boxing/boxing2.jpg',
        '../Imagenes/Eventos/Boxing/boxing4.jpg',
        '../Imagenes/Eventos/Boxing/boxing5.jpg',
        '../Imagenes/Eventos/Boxing/boxing6.jpg',
        '../Imagenes/Eventos/Boxing/boxing7.jpg',
    ],
    naked: [
        '../Imagenes/Eventos/Naked/naked1.jpg',
        '../Imagenes/Eventos/Naked/naked2.jpg',
    ],
    haru: [
        '../Imagenes/Eventos/HARU/haru1.jpg',
        '../Imagenes/Eventos/HARU/haru2.jpg',
        '../Imagenes/Eventos/HARU/haru3.jpg',
        '../Imagenes/Eventos/HARU/haru4.jpg',
        '../Imagenes/Eventos/HARU/haru5.jpg',
    ],
    diaGaucho: [
        '../Imagenes/Eventos/dianacionalgaucho/dng1.jpg',
        '../Imagenes/Eventos/dianacionalgaucho/dng2.jpg',
        '../Imagenes/Eventos/dianacionalgaucho/dng3.jpg',
        '../Imagenes/Eventos/dianacionalgaucho/dng4.jpg',
        '../Imagenes/Eventos/dianacionalgaucho/dng5.jpg',
        '../Imagenes/Eventos/dianacionalgaucho/dng6.jpg',
    ],
    barUnion: [
        '../Imagenes/Eventos/unionBar/union1.jpg',
        '../Imagenes/Eventos/unionBar/union2.jpg',
        '../Imagenes/Eventos/unionBar/union3.jpg',
        '../Imagenes/Eventos/unionBar/union4.jpg',
    ]
    // Añadir más conjuntos de imágenes según sea necesario
};

let indicesActuales = {
    boxing: 0,
    naked: 0,
    haru: 0,
    diaGaucho: 0,
    barUnion: 0,
}

function cambiarImagen(nombreSlider, direccion) {
    const imagenes = arreglosImagenes[nombreSlider]
    let indiceActual = indicesActuales[nombreSlider]
    
    indiceActual += direccion
    
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    
    indicesActuales[nombreSlider] = indiceActual
    
    document.getElementById(`slide-` + nombreSlider).src = imagenes[indiceActual]
}