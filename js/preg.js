class preg{
    constructor (p,resp,op1,op2,op3){
        this.p=p;
        this.resp=resp;
        this.op1=op1;
        this.op2=op2;
        this.op3=op3;
        
    }    

    op(){
        
        return [this.resp,this.op1,this.op2,this.op3].sort((a,b)=>Math.random()-0.5);
    }
}



uno=new preg("Que es el encapsulamiento de datos","Getters y Setters","Herencia","Polimorfismo","Todas las anteriores");
dos=new preg("¿Por que es importante documentar el código?","Para que cualquier individuo con acceso al código fuente pueda comprender su estrucutra","No es relevante ahcerlo","Mijefe me obliga","Ninguna de las anteriores");
tres=new preg("¿ Cual es la funcionalidad de un framework?","Reducir la complejidad de desarrollo de codigo,interacciones y comportamientos visuales","Hacer el trabajo del desarrollador","Aumentar el flujo de código","Todas las anteriores");
cuatro=new preg("¿ Para que sirve el Patrón de diseño Dao?","Para definir conexión con la base de datos.","","","");
cinco=new preg("En donde se puede ver el enrutamiento de datos en el bankend","En el controlador","En el modelo","En la vista","No se puede ver, es oculto");
seis=new preg("Los objetos en REST siempre se manipulan a partir de la URI?","Correcto","Incorrecto","URI esta obsoleto","La URI es de la fiscalia");
siete=new preg("El M.V.C a qué hace referencia?","Al Modelo Vista Controlador","Tipo de tuberia","Al Vista Controlador","Ninguna de las anteriores");
ocho=new preg("¿Una de las ventajas del ORM es?","Escribir poco código","Son muy genéricos","Gran desempeño","Realización de operaciones complejas");
nueve=new preg("Que siginifican las siglas REST","REpresentational State Transfer","REpresentat State Transfer","Ninguna de las anteriores","REpresentationa Stat Transfe");
diez=new preg("Un servicio REST esta fundamentado en un sistema cliente-servidor?","Correcto","Incorrecto","Cliente-Servidor no es un servicio","Ninguna de las anteriores");
once=new preg("Son formatos utilizados por los servicios REST","Texto plano,HTML,XML,JSON","WWW","XHTML,JHSON,RAR","Peticiones Sincrónicas");
doce=new preg("Es uno de los fundamentos de un servicio REST","Debe ser un sistema uniformemente accesible.","No es un sistema cliente-servidor","GUardar sesiones de los usuarios","Ninguna de las anteriores");
trece=new preg("Que es un recurso en REST","Cualquier cosa que sea direccionable a través de la Web","No lo se","Se me olvido","Ninguna de las anteriores");
catorce=new preg("REST se apoya en un protocolo para páginas web.¿Cual de los siguientes es ese protocolo?","HTTP","TCP/IP","SMTP","IMCP");
quince=new preg("REST se apoya en los métodos básicos de HTTP, caules son:","GET,POST,PUT,DELETE","GET,POS,PUT, DELET.","GET,POST","Ninguna de las anteriores");
diecisiete=new preg("¿En que consiste  un controlador?","Contiene una lógica que actualiza el modelo y / o vista en respuesta a las entradas de los usuarios de la aplicación.","Es un entorno de ejecución administrado para Windows que proporciona diversos servicios a las aplicaciones en ejecución.","Consiste en un patrón en el diseño de software comúnmente utilizado para implementar interfaces de usuario, datos y lógica de control."," Crea un entorno de trabajo y proporciona herramientas a los desarrolladores para ayudarles a desarrollar sus aplicaciones web.");
dieciocho=new preg("¿Un ejemplo de uso de un controlador es:","Por ejemplo, nuestra lista de compras podría tener formularios de entrada y botones que nos permitan agregar o eliminar artículos. Estas acciones requieren que se actualice el modelo, por lo que la entrada se envía al controlador, que luego manipula el modelo según corresponda, que luego envía datos actualizados a la vista."," Por ejemplo, Se solicita desarrollar un sistema de administración de usuarios con un CRUD, para esto aplicamos MVC permitiendo independizar la lógica y la parte visual del sistema usando para eso un controlador que administra los procesos sirviendo como puente entre estos."," Por ejemplo, La necesidad de vincular los datos guardados en una base de datos relacional, con los objetos de una aplicación orientada a objetos, determinó la aparición del concepto de persistencia de objetos. Siguiendo el estilo de desarrollo en tres capas, la persistencia queda recogida en su propia capa, separada de la lógica de negocio y de la interfaz de usaurio.","Por ejemplo, La capa de negocio expone la lógica necesaria a la capa de presentación para que el usuario, a través de la interfaz, interactúe con las funcionalidades de la aplicación.");
diecinueve=new preg("¿Para que se usa el encapsulamiento?","Se ultiliza   para definir direcciones URL que son semánticamente significativas para los usuarios y que pueden ayudar con la optimización del motor de búsqueda (SEO).","Se  ultiliza para obtener un elemento que funciona tanto para guardar datos, así como para asignar y representar valores en una expresión de programación.","Se ultilizan como matrices, las cuales son ampliamente utilizadas por su facilidad y liviandad para manipular y estructurar grandes cantidades de información."," Se utiliza para estructurar datos en forma de texto y permite el intercambio de información entre aplicaciones de manera sencilla, liviana y rápida.");
veinte=new preg("¿Que patron de arquitectura ultiliza controladores?","MVC","Patrón de capas","Patrón cliente-servidor","Patrón de intermediario");
veintiuno=new preg("¿Qué es el enrutamiento? ","Es un mecanismo que reescribe las URL para simplificar su aspecto","envia direcciones ip al un servidor","aun no se tiene concepto","Ninguna de las anteriores");
veintidos=new preg("pregunta","respuestacorresta","bad","bad1","bad2");
veintitres=new preg("pregunta","respuestacorresta","bad","bad1","bad2");
veinticuatro=new preg(" Proceso de dirigir una solicitud HTTP a un controlador","Routing","ActionResult","Vista","Todas las anteriores");
veinticinco=new preg("Cual de las siguientes es una función del modelo?","Interactuar con la fuente de datos","Mostrar información al usuario","Procesar las peticiones","Ninguna de las anteriores");
veintiseis=new preg("La capa encargada de crear instancias del modelo y utilizar los métodos creados en ese modelo para conseguir los datos que se presentan al usuario es...","a) El controlador","El modelo","La vista","La petición");
veintisiete=new preg("Es correcto afirmar sobre el patron MVC que:","MVC es un patrón de diseño orientado a objetos"," El controlador no es quien maneja las peticiones","La vista muestra los datos directamente de la base de datos","Todas las anteriores son correctas");
veintiocho=new preg("El uso del patron MVC proporciona simplicidad, reutilizacion de componentes, separación de interfaz, lógica de negocio y de presentación.","verdadero","falso","ninguna de las anteriores","todas las anteriores");
veintinueve=new preg("pregunta","respuestacorresta","bad","bad1","bad2");
treinta=new preg("¿El modelo es el responsable de:","Acceder a la capa de almacenamiento de datos","Recibir los eventos de entrada","ener un registro de su controlador asociado","Todas las anteriores");
treintayuno=new preg("¿El controlador es responsable de:","Contener reglas de gestión de eventos","Notificar a las vistas los cambios que en los datos","Llevar un registro de las vistas y controladores del sistema","Todas las anteriores");
treintaydos=new preg("¿Las vistas son responsables de:","Todas las anteriores","Pueden dar el servicio de Actualización()","Recibir datos del modelo y los muestra al usuario","Tienen un registro de su controlador asociado");
treintaytres=new preg("¿Qué es django?","Es un Framework"," leguaje de programación","un editor de texto","un patron de diseño");
treintaycuatro=new preg("en que lenguaje de programación está basado ruby?","PHP","JAVA","Python","c++");
treintaycinco=new preg("¿Qué es un Framework?","Estructura previamente creada con el objetivo de agilizar el desarrollo de un proyecto","Patron de arquitectura diseñado para brindar mayor desempeño al desarrollo de un proyecto web","intefaz grafica de un proyecto","Compilador web");
treintayseis=new preg("¿Qué es un lenguaje multiplataforma?","Es aquel lenguaje capaz de ejecutarse en diferentes dispositivos y sistemas operativos utilizando el mismo código."," Es aquel lenguaje capaz  de ejecutarse en diferentes navegadores web utilizando el mismo codigo"," Es aquel lenguaje capaz de ejecutarse en diferentes compiladores utilizando el mismo codigo"," Es aquel lenguaje que capaz de ejecutarse en diferentes plataformas web utilizando el mismo código.");
treintaysiete=new preg("¿Cuál es el framework con mayor demanda actualmente?","Angular","react","Java","PHP");
treintayocho=new preg("cuál es el lenguaje de programación peor pagado en la actualidad?","PHP","Java","Perl","bad bunny");
treintaynueve=new preg("que framework está instalado en Windows por defecto?","ASP .Net","Node JS","python","C++");
cuarenta=new preg("cuál es el framework con la mayor curva de aprendizaje?","Laravel","Django","Angular","Ruby");
cuarentayuno=new preg("Mencione un framework de front-end basados en JS?","Angular","Bootstrap","Laravel","Flask");
cuarentaydos=new preg("¿Cual es la mayor ventaja al utilizar un framework?","Evitar escribir código repetitivo como puede ser accesos a las bases de datos, validaciones de formularios, entre otros.","No tener la necesidad de crear una estructura desde cero."," Permite acortar los plazos de entrega.","Facilita localizar utilidades, librerías, y así adaptarlas.");
cuarentaytres=new preg("Son cuatro especificaciones del modelo de componentes web:","Custom elements, Shadow DOM, ES modules, HTML templates","css, html, etiquetas, boxes","Custom elements, etiquetas, boxes, ES modules","Ninguna de las anteriores");
cuarentaycuatro=new preg("Cuales navegadores actuales son compatibles con los componentes web standars?","Todas las anteriores","Chrome","Firefox","Opera");
cuarentaycinco=new preg("Cuales de los siguientes frameworks usan estructuras por componentes web?","Vue, angular, react","Express, css, apache","React, express, spring boot","vue, flask, node");
cuarentayseis=new preg("cuales son las ventajas de utilizar web componets:","Flexibilidad,Personalizacion,Innovacion","Personalizacion,Eficacia,estetica","Innovacion,estetica,Adaptabilidad","Ninguna de las anteriores");
cuarentaysiete=new preg("Como puedo se unen los componentes para mostrarlos en una vista?","por medio de un componente padre","todos se uninen en la vista","no pueden unirse","se unen solos ");
cuarentayocho=new preg("al momento de usar un framewoks como vue cual es la diferencia entre vista y componente?","en el componente es donde va toda la logica visual y la vista solo es la presentacion","no hay ninguna diferencia","en la vista es donde va toda la logica visual y el componente solo es para la presentacion","no se pueden utilizar vista y componentes al tiempo ");
cuarentaynueve=new preg("pregunta","respuestacorresta","bad","bad1","bad2");
cincueta=new preg("Cual de los siguientes frameworks es el unico que maneja vista y componente","Vue","Angular","React","NextJs");


const preguntas=[uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce,trece,catorce,quince,diecisiete,dieciocho,diecinueve,veinte,veintiuno,veintidos,veintitres,veinticuatro,veinticinco,veintiseis,veintisiete,veintiocho,veintinueve,treinta,treintayuno,treintaydos,treintaytres,treintaycuatro,treintaycinco,treintayseis,treintaysiete,treintayocho,treintaynueve,cuarenta,cuarentayuno,cuarentaydos,cuarentaytres,cuarentaycuatro,cuarentaycinco,cuarentayseis,cuarentaysiete,cuarentayocho,cuarentaynueve,cincueta].sort((a,b)=>Math.random()-0.5);

//Funciones necesarias para el juego
function aparecer_ventana(){//ventana de comoddines y mensajes
    ventana.style.transform="scale(1)";
    document.getElementById(identificacion).style.display="block";
    clearInterval(intrv);
}
btn_comodin.onclick= ()=>{
    ventana.style.transform="scale(0)";
    document.getElementById(identificacion).style.display="none";
    if(identificacion=="resp_correcta"){
        cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());
    }
    temporizador();         
}
function cambiar_pregunta(p,r){ //funcion para cambiar la pregunta p=pregunta r=array con las respuestas
    pregunta.innerText=p;
    
    for (var i=0;i<4;i++) {
        respuestas[i].innerText=r[i];
    }          
    cont_tiempo=31;
 }
function felicidades(){//Mensaje Ganador
    ventana2.style.transform="scale(1)";
    victoria.style.display="inline-block";
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}

function perder(){//Mensaje Perdedor
    if (sonar) {
        intro.muted = true;
        m_perdiste.play();
    }
    ventana2.style.transform="scale(1)";
    clearInterval(intrv);
    victoria.innerHTML ="¡Haz perdido! Intenta nuevamente";
    victoria.style.display="inline-block";
    document.getElementById("img_vent").setAttribute("src","medios/img/perder.jpg");
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}
//Cambio y corrección de las preguntas del juego
//Además, por cada pregunta correcta se acumula una recompenza
cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());
for (let i=0;i<respuestas.length;i++){
    resp[i].onclick=() =>{
        if (respuestas[i].innerText==preguntas[nivel].resp){
            identificacion="resp_correcta";
            if (sonar) m_correcto.play();
            nivel++;
            pasaste.innerText="Pasaste al nivel:"+ (nivel+1);
            aparecer_ventana();
            recompenza=recompenza+ 10000*(nivel);
            if(nivel> preguntas.length-1){
                dinero_ganado=recompenza;
                felicidades();
            }else{
                if((nivel)%5==0){
                    dinero_ganado=recompenza;//cada vez supera un nivel (5preguntas)
                    dinero.innerText=dinero_ganado;                       
                }
            }
        }else perder();   
    }
}
//Comodines de ayuda a la resolución de las preguntas
cont_comodin.addEventListener("click",(e)=>{
    if(e.target.classList.contains("comodines")){
        
        e.target.style.backgroundColor="gray";
    }
    if(amigo==false & e.target.classList.contains("icon-phone")){
        amigo=true;
        identificacion="llamar";
        aparecer_ventana();
        document.getElementById("correcto").innerText= preguntas[nivel].resp;
    } else if(publico==false & e.target.classList.contains("icon-users")){
        publico=true;
        identificacion="audiencia";
        aparecer_ventana();
        for (var i=0;i<4;i++) {

            if(respuestas[i].innerText==preguntas[nivel].resp) barra[i].value="70";
            
        } 
    }else if(mitad==false & e.target.classList.contains("mitad")){
        mitad=true;
        let aux1=0;
        for (var i=0;i<4 & aux1<2;i++) {
            
            if(respuestas[i].innerText!=preguntas[nivel].resp){
                aux1++;
                respuestas[i].innerText="";
            }   
        }    
    }
});
//Botones para rendirse o terminar el juego
rendirse.onclick=()=>{
    ventana2.style.transform="scale(1)";
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}
terminar.onclick=()=>{ //Una vez termina el juego se recarga la pagina y vuelve al inicio
    location.reload();
}





