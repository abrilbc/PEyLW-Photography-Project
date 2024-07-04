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
        '../Imagenes/Eventos/Naked/naked3.jpg',
        '../Imagenes/Eventos/Naked/naked4.jpg',
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
    ],
    sesion1: [
        '../Imagenes/Eventos/SesionesdeFotos/sdf1_1.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf1_2.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf1_3.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf1_4.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf1_5.jpg',
    ],
    sesion2: [
        '../Imagenes/Eventos/SesionesdeFotos/sdf2_1.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf2_2.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf2_3.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf2_4.jpg',
    ],
    sesion3: [
        '../Imagenes/Eventos/SesionesdeFotos/sdf3_1.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf3_2.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf3_3.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf3_4.jpg',
    ],
    sesion4: [
        '../Imagenes/Eventos/SesionesdeFotos/sdf4_2.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf4_1.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf4_3.jpg',
    ],
    sesion5: [
        '../Imagenes/Eventos/SesionesdeFotos/sdf5_1.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf5_2.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf5_3.jpg',
        '../Imagenes/Eventos/SesionesdeFotos/sdf5_4.jpg',
    ],
    sesion6: [
        '../Imagenes/Galeria/Retratos/retrato10.jpg',
        '../Imagenes/Galeria/Retratos/retrato11.jpg',
        '../Imagenes/Galeria/Retratos/retrato12.jpg',
    ]
    // Añadir más conjuntos de imágenes según sea necesario
};

let indicesActuales = {
    boxing: 0,
    naked: 0,
    haru: 0,
    diaGaucho: 0,
    barUnion: 0,
    sesion1: 0,
    sesion2: 0,
    sesion3: 0,
    sesion4: 0,
    sesion5: 0,
    sesion6: 0,
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