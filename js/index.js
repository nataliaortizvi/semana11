//DECLARACIONES
var database = firebase.database();

const nombre = document.getElementById('nombre');
const publicacion = document.getElementById('publicacion');
const btpublicar = document.getElementById('publicar');
const feed = document.getElementById('feed');

//FUNCIONES
postear = () => {

    //si no escribe nada en un campo
    if(nombre.value == '' || publicacion.value == ''){
        alert('Hay un campo vacio');
        return;
    }

    //value de las variables
    let referencia = database.ref('usuario/').push();   
    let n = '@'+nombre.value;
    let p = publicacion.value;
    
    //objeto del usuario con el post
    let user = {
        nombre: n,
        publicacion: p, 
        id: referencia.key,
    }  

    referencia.set(user);
    //database.ref('usuario/').set(null);

    //al dar clic, vaciar los inputs
    nombre.value='';
    publicacion.value='';

}

//ACCION DE PUBLICAR
btpublicar.addEventListener('click',postear);

//LECTURA
database.ref('usuario/').on('value', function(data){
    feed.innerHTML = '';
    data.forEach(
        user => {
            let valor = user.val();
            let fila = new LosPost(valor);
            feed.appendChild(fila.render());
        }
    );
});

