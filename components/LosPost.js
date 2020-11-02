class LosPost{
    constructor(user){
        this.user = user;

    }

    render () {
        let component = document.createElement('div');
        component.className = 'lospost';

        let pubCont = document.createElement('div');
        pubCont.className = 'loquepub';
        pubCont.innerHTML = (
            this.user.publicacion
        );

        let nomCont = document.createElement('div');
        nomCont.className = 'loquepubnom';
        nomCont.innerHTML = (
            this.user.nombre
        );

        let responderinp = document.createElement('input');
        responderinp.className = 'responderinp';
        responderinp.placeholder = 'Escribe una respuesta' ;

        let responderbt = document.createElement('button');
        responderbt.className = 'responderbt';
        responderbt.innerHTML = (
            'Responder' 
        );

        let component2 = document.createElement('div');
        component2.className = 'loscoments';

        component.appendChild(pubCont);
        component.appendChild(nomCont);
        component.appendChild(component2);
        component.appendChild(responderinp);
        component.appendChild(responderbt);

        responderbt.addEventListener('click', ()=>{
            let comments = document.createElement('p');
            comments.className = 'comments';
            comments.innerHTML = (
                responderinp.value
            );
            component2.appendChild(comments);
            responderinp.value='';
            
        });
        return component;
    }
}