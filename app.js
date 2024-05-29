//Descripción empresas
function showDescription(empresas) {
    document.getElementById('descripcion-tauc').style.display = 'none';
    document.getElementById('descripcion-nexarte').style.display = 'none';

    document.querySelectorAll('.empresas > div').forEach(div => {
        div.classList.remove('selected');
    });

    if (empresas === 'tauc') {
        document.getElementById('descripcion-tauc').style.display = 'block';
        document.querySelector('.tauc').classList.add('selected');
    } else if (empresas === 'nexarte') {
        document.getElementById('descripcion-nexarte').style.display = 'block';
        document.querySelector('.nexarte').classList.add('selected');
    }
}

// Ventanas Emergentes Proyectos
document.addEventListener('DOMContentLoaded', () => {
    const imagenAG = document.getElementById('ag');
    const ventanaEmergenteAG = document.getElementById('ventanaEmergente-AG');
    const cerrarVentanaAG = document.getElementById('cerrarVentana-AG');
    const imagenET = document.getElementById('et');
    const ventanaEmergenteET = document.getElementById('ventanaEmergente-ET');
    const cerrarVentanaET = document.getElementById('cerrarVentana-ET');
    const imagenPF = document.getElementById('pf');
    const ventanaEmergentePF = document.getElementById('ventanaEmergente-PF');
    const cerrarVentanaPF = document.getElementById('cerrarVentana-PF');
    const fondoVE = document.getElementById('fondo-ve');
    

    imagenAG.addEventListener('click', () => {
        ventanaEmergenteAG.style.display = 'block';
        fondoVE.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    cerrarVentanaAG.addEventListener('click', () => {
        ventanaEmergenteAG.style.display = 'none';
        fondoVE.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    imagenET.addEventListener('click', () => {
        ventanaEmergenteET.style.display = 'block';
        fondoVE.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    cerrarVentanaET.addEventListener('click', () => {
        ventanaEmergenteET.style.display = 'none';
        fondoVE.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    imagenPF.addEventListener('click', () => {
        ventanaEmergentePF.style.display = 'block';
        fondoVE.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    cerrarVentanaPF.addEventListener('click', () => {
        ventanaEmergentePF.style.display = 'none';
        fondoVE.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    document.addEventListener('click', (event) => {
        if (event.target === fondoVE) {
            ventanaEmergenteAG.style.display = 'none';
            ventanaEmergenteET.style.display = 'none';
            ventanaEmergentePF.style.display = 'none';
            fondoVE.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});

// Carrusel imagenes picas y fijas
document.addEventListener('DOMContentLoaded', function() {
    let carrusel = document.querySelector('.carrusel-imgPF');
    let imagenes = document.querySelectorAll('.imagenpf');

    let currentIndex = 0;
    let totalImages = imagenes.length;

    function mostrarImagen(index) {
        imagenes.forEach(function(imagen) {
            imagen.style.display = 'none';
        });
        imagenes[index].style.display = 'block';
    }

    mostrarImagen(currentIndex);

    function siguienteImagen() {
        currentIndex = (currentIndex + 1) % totalImages;
        mostrarImagen(currentIndex);
    }

    carrusel.addEventListener('click', siguienteImagen);
});