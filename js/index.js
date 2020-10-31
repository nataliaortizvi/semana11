//DECLARACIONES
const nombre = document.getElementById('nombre');
const publicacion = document.getElementById('publicacion');
const btpublicar = document.getElementById('publicar');
var database = firebase.database();

//FUNCIONES
postear = () => {
    let n = nombre.value;
    let p = publicacion.value;
    

let objeto = {
    nombre: n,
    publicacion: p,
}

let json = JSON.stringify(objeto);
database.ref('usuario/').push().set(objeto);
}

//accion del boton de publicar
btpublicar.addEventListener('click',postear);

database.ref('usuario').on('value', function(data){
    //console.log( data.val() );
    data.forEach(
        function(user){
            let clave = user.key;
            let valor = user.val();
            console.log(clave);
            console.log(valor.nombre);
            console.log(valor.publicacion);
            
        }
    );
});

