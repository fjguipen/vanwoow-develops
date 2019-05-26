const posts = [
    {
        id: 0,
        title: "\xA1Hola mundo..! \xA1Hola vanwoow!",
        date: "15/04/2019",
        by: "JaviGP",
        url: {
            twitter: "https://twitter.com/GuisadoJavier/status/1118235526191042560",
            instagram: "https://www.instagram.com/p/BwU_jRDnhV7/?hl=es",
            linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6524692568092086272"
        },
        body: "<p><strong>\xA1HOLA!</strong> Me llamo Javi, autodidacta y apasionado del mundo de la programaci\xF3n, en especial el desarollo de aplicaciones web y la automatizaci\xF3n. Desde que descubr\xED este mundillo (hace 2 a\xF1os no sab\xEDa que era un bucle for <strong>:P</strong>) no he dejado de investigar y aprender. </p>\n            \n            <p>Aprovechar\xE9 esta primera entrada para describir el porqu\xE9 de esta p\xE1gina y por qu\xE9 deber\xEDas quedarte y acompa\xF1arnos <strong>;)</strong></p>\n\n            <h2>\xBFVanwoow?</h2>\n            <p><a href=\"https://vanwoow.es/\" target=\"_blank\">Vanwoow</a> es un proyecto iniciativa de Manu y Auxi, en el que Ana y yo ca\xEDmos inevitablemente. Trata sobre la despoblaci\xF3n de la Espa\xF1a rural, de c\xF3mo los viajeros en furgo o autocaravana pueden llegar a dinamizar con sus viajes los recursos de estos peque\xF1os municipios y, obviamente, de la plataforma que pondr\xE1 a toda la Comunidad (viajeros, pueblos, productores locales) en contacto.</p>\n            \n            <p>En la <strong>Cooperativa</strong>, nuestros socios ser\xE1n usuarios y anfitriones que pondr\xE1n vivir u ofrecer experiencias, compartirlas y apoyar una causa social, entre otras. Nosotros simplemente ponemos las herramientas a disposici\xF3n de todos ellos.</p>\n\n            <h2>Blog tecnol\xF3gico</h2>\n            <p>En esta p\xE1gina ir\xE9 describiendo el proceso de construcci\xF3n de la aplicaci\xF3n web de vanwoow. Describir\xE9 la arquitectura, hablar\xE9 sobre las distintas tecnolog\xEDas que se est\xE1n utilizando, como <strong>React</strong> o <strong>Graphql</strong>, de las bondades de <strong>ES6</strong>, las decisiones que se toman, etc. Adem\xE1s, describir\xE9 todas aquellas novedades y descubirmientos que aparezcan durante el proceso. En definitiva, quiero <strong>compartir la experiencia de la creaci\xF3n de la plataforma</strong>.</p>\n\n            <p>As\xED que si como yo, bebes 5 tazas de caf\xE9 al d\xEDa, eres un freak de las nuevas tecnolog\xEDas y te encanta pik\xE1 c\xF3digo, <strong>\xA1te invito a que me acompa\xF1es y colabores abiertamente durante el desarollo!</strong></p>\n\n            <p><br>\n            Vamos a ver un ejemplo muy b\xE1sico, de una funci\xF3n que uso en este mismo blog, el cual est\xE1 alojado en github. Sigue la estela de una SPA (o aplicaci\xF3n de una sola p\xE1gina), utilizando s\xF3lamente Javascript (en su versi\xF3n 2015 o <strong>ES6</strong>).</p>\n            \n            <p>ES6 es una actualizacion de Javascript que pr\xE1cticamente todos los navegadores modernos lo incluyen como estandar y que viene con los bolsillos llenos de nuevas y maravillosas funcionalidades y atajos sint\xE1cticos. Para garantizar la compatilibidad con el mayor n\xFAmero de navegadores, he compilado el c\xF3digo fuente a ES5 utilizando Babel.js, de modo que aunque desarrolle utilizando ES6, para el navegador (cliente) ser\xE1 como si estuviese escrito en Javascript convencional (en una pr\xF3xima publicaci\xF3n hablar\xE9 sobre <strong>Babel</strong> y <strong>Webpack</strong>, herramientas que nos ayudan y agilizan enormemente el trabajo).\n            <pre><code class='lang-js'>/** \n * Recupera la publicaci\xF3n en base al \xEDndice\n * que recibe por par\xE1metro, y lo inserta en el DOM\n*/\n\nconst createContent = (index = state.current) =>{\n    let postData = posts[index];\n    let root = document.getElementById('content');    \n\n    return root.innerHTML = Post(postData);\n}\n\n// Componente que contendr\xE1 la publicaci\xF3n\nconst Post = (post) => {\n    return (\n        `\n        &lt;article&gt;\n            ${Title(post.title)}\n            ${DateC(post.date, post.by)}\n            ${Body(post.body)}\n        &lt;/article&gt;\n        `\n    )\n}</code></pre>\n            </p>\n            <p>La primera funci\xF3n extrae una publicaci\xF3n del array de datos y lo inserta en el DOM. El \xEDndice por defecto es el \xFAltimo elemento de un array ordenado por fecha, de modo que siempre se muestre la \xFAltima publicaci\xF3n cuando se accede por primera vez al blog. Siempre que se cambie la publicaci\xF3n activa, el estado global (state) tambi\xE9n lo har\xE1, reflejando este cambio y permitiendonos controlar qu\xE9 post se est\xE1 visualizando en todo momento.</p>\n\n            <p>La segunda funci\xF3n imita de forma descarada (y muy b\xE1sica) c\xF3mo ser\xEDa un componente en <strong>React.js</strong> pero con <strong>Javascript</strong> sin m\xE1s (aka Vanilla). En su interior se llama al resto de componentes que lo conforman.</p>\n\n            <p>\xA1Y hasta aqu\xED la primera entrada! En la pr\xF3xima explicar\xE9 cual es la arquitectura de la plataforma y qu\xE9 tecnolog\xEDas intervienen en ella.</p>\n        "
    },
    {
        id: 1,
        title: "Una mirada al interior de la app web de vanwoow",
        date: "20/04/2019",
        by:"JaviGP",
        url:{
            twitter: "https://twitter.com/GuisadoJavier/status/1122911375154716672",
            instagram: "https://www.instagram.com/p/Bw2OuPzHslR/",
            linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:6528677165909835776" 
        },
        body: `<h2>El proceso de selección</h2>`+
              `<p>Lo primero que hice cuando supe que tendría que desarrollar la app de <a href="https://vanwoow.es" target="_blank">vanwoow</a> fue dedicar un largo período de tiempo a documentarme y a buscar información sobre las distintas tecnologías que tenía a mi disposición. </p>`+
              
              `<p>Iba buscando aquellas con una <strong>curva de rápido aprendizaje, frescas y que estuviesen en boca de muchos</strong>, con el objetivo de poder encontrar una mayor cantidad de información actualizada. Ya que como muchos, inicié este viaje muy verde y con tan solo una base de programación (en Java..) y bases de datos.</p>`+

              `<p>Fue un proceso difícil porque estaba continuamente expuesto al peligro de caer enamorado de alguna tecnología que para nada encajase en nuestro proyecto. Y así fue… con <strong>MongoDB</strong>. Su sistema de colecciones no relacional resultaba muy tentador, aunque por suerte no tardé mucho en darme cuenta de que estaba intentado implementar MongoDB con calzador</p>`+

              `<p>El punto crítico por la que al final descarté MongoDB fue la necesidad de tener un set de réplicas como requisito para realizar transacciones, ya que <strong>todas las actualizaciones en MongoDB (de manera natural) son atómicas para cada documento</strong>. Tener un set de réplicas en MongoDB implica una reducción importante en la velocidad de las operaciones realizadas contra la base de datos, por lo que hacía que el principal beneficio de usar MongoDB, su velocidad, se tambalease.</p>`+

              `<p>Al final me decanté por <strong>PostgreSQL</strong> y la verdad es que estoy bastante contento con lo que me está ofreciendo.</p>`+

              `<p>Otro punto importante, fue pensar en el tipo de aplicación web que quería hacer, o mejor dicho, que necesitábamos tener. SSR, SPA, isomorfa, progresiva... ¡madre mía!</p>`+
              
              `<p>Todas ellas tienen sus ventajas e inconvenientes, pero tenía claro que <strong>vanwoow tenía que ser especial</strong>.</p>`+

              `<p>En este punto la elección del <strong>Framework</strong> tuvo mucho que ver, ya que en este caso <strong>React.js</strong> te pone las cosas fáciles para montar una <strong>SPA isomorfa</strong>: renderiza por igual en el servidor como en el cliente. Esto permite, servir la primera carga de la aplicación de manera muy rápida ya que es renderizada totalmente por el servidor antes de enviarla, y por el otro, nos garantiza que los buscadores indexen correctamente el contenido de nuestra web, contrarrestando los dos principales inconvenientes de las SPA (Aplicaciones de una sola página). Tras el primer renderizado, la app sigue renderizando sólo en el cliente, utilizando el servidor como fuente de datos (esto lo veremos un poco mejor más adelante). El reto: <strong>asegurar que tanto el servidor como el cliente permanezcan sincronizados</strong>, de lo contrario, correremos el riesgo de encontrarnos con resultados inesperados y muy desagradables <strong>:P</strong>.</p>`+
              
              `<p>Así pues, tenía más o menos claro que usaría postgre, react para el frontend y <strong>Node.js</strong> como principal candidato para el back. Node.js , que aun cuando se ejecuta en un único thread, destaca por su velocidad a la hora de manejar procesos de entrada/salida gracias a su <strong>asincronía</strong> (procesos que se ejecutan de manera “simultánea” sin necesidad de esperar a que terminen unos u otros). Como nuestra app principalmente se renderiza en el cliente, node resulta ideal. Nunca podría aconsejar el uso de Node.js para cualquier cosa que implique grandes (o no tan grandes..) procesamiento de datos, ya que en cuanto a procesos síncronos se refiere resulta bastante lento (Ojo, esto está cambiando en las últimas versiones de Node y sus workers, pero eso amigos… es otra película).</p>`+
              
              `<p>Junto con node, vino <strong>express.js</strong>. Se trata de un framework ligero para crear infraestructuras de servidores http en node. Su simpleza y facilidad de uso con sus middlewares hicieron que lo eligiera como candidato prácticamente al instante (<strong>Koa.js</strong> habría sido la principal alternativa).</p>`+
              
              `<p>Prácticamente lo tenía todo. Mientras buscaba información sobre qué era una aplicación <strong>RESTFul</strong>, una <strong>API REST</strong>, <strong>CRUD</strong>.. me topé con <strong>Graphql</strong> (Así es.. otro gran invento por parte del equipo de Facebook). Y junto con Graphql, <strong>Apollo Graphql</strong>. Esta librería viene con una serie de herramientas preparadas para ayudarnos a implementar un servidor y un cliente utilizando Graphql, optimizado para React.js. Y para redondear, su documentación está genial (un punto importante a la hora de elegir tecnologías, al menos, para mí).</p>`+

              `<img src="assets/img/logos-tecnologias.png" alt="logos" />`+
              
              `<p>Graphql te permite definir una API en la que en la propia petición se describen qué y cómo se quieren recibir los datos:</p>`+

              `<div class="two-columns-code">\
<pre><code class="lang-graphql">\
#Petición
query obtenerUsuario{
    usuario(id: 5){
        nombre
        edad
    }
}\
</code>\
</pre>\
<pre>\
<code class="lang-json">\
//Respuesta
"data": {
    "usuario": {
        "nombre": "Pepe",
        "edad": 34
    }
}\    
            </code>\
            </pre>\
            </div>`+

              `<p>Para completar el círculo mágico, añadí <strong>Knex.js</strong> y <strong>Objection.js</strong>. Knex.js nos permite crear querys SQL usando Javascript mientras que Objection.js es un ORM muy ligero que nos permite mapear las relaciones de nuestros datos de una manera sencilla. Y además, funciona a las mil maravillas con PostgreSQL.</p>`+

              `<p>Un ejemplo de Knex.js sacado de la documentación oficial:</p><pre><code class="lang-js">\
const subquery = knex('users')
    .where('votes', '>', 100)
    .andWhere('status', 'active')
    .orWhere('name', 'John')
    .select('id');

knex('accounts').where('id', 'in', subquery)

Es igual a:
select * from accounts
where id in (select id from users
                where votes > 100 and status = 'active' or name = 'John'\
              </code></pre>`+
              
              `<p>Objection, que mantiene su propia sintaxis, usa por debajo Knex.js. Por lo general, si usamos Objection no usaremos demasiado los métodos de Knex directamente.</p>`+

              `<p>Un ejemplo real que uso actualmente en la API de vanwoow:</p><pre><code class="lang-js">\
class Anfitrion extends Objection {
    static get tableName(){
        return 'anfitriones';
    }
    static relationMappings(){
        return {
            usuario:{
                relation: Model.BelongsToOneRelation,
                model: Usuario,
                join:{
                    from: 'anfitriones.id',
                    to: 'usuarios.id'
                }
            }
        }
    }
}
              
const anfitrion = await Anfitrion.query()
    .where('id', Anfitrion.$relatedQuery('usuario')
        .select('id')
        .where('email', provided.email)

Es igual a:
select * from anfitriones
    where id = (select id from usuarios
                    where email = email);\
              </code></pre>`+

              `<h2>Código libre</h2>`+

              `<p>Pues sí, aunque es algo que me da bastante respeto y miedo (quizás por desconocimiento), siento que se lo debemos al código libre, de hecho pienso que de no ser así, hoy no podría estar desarrollando la app de vanwoow.</p>`+

              `<p>Por ello, y millones de razones más, la plataforma de vanwoow será de código abierto, para que todos puedan colaborar y disfrutar del trabajo que estamos realizando.</p>`+

              `<p>Desde hoy, puedes ver en el <a href="https://github.com/vanwoow" target="_blank">repositorio de github de vanwoow</a> una parte de la API, en la cual utilizo Graphql para construir los endpoints.</p>`+

              `<p>Conforme vaya explicando cada sección de la aplicación y como se ha hecho, veremos más en profundidad todas estas tecnologías, pero por lo pronto si no conocías alguna y te pica la curiosidad, te animo a que busques un poco sobre ellas.</p>`+
              
              `<p>En la próxima publicación veremos cómo podemos crear un entorno de desarrollo para <strong>Javascript (ES6, ES7)</strong>, utilizando node, <strong>babel</strong> y <strong>webpack</strong>.</p>`
    },
    {
        id: 2,
        title: "Graphql para principiantes",
        date: "9/05/2019",
        by:"JaviGP",
        url:{
            twitter:null ,
            instagram:null ,
            linkedin: null
        },
        body: 
            `<h2>¿Qué es?</h2>` +
            `<p>Resumiendo y mucho, Graphql es una sintaxis que describe de manera podemos preguntar o requerir un recurso.</p>` +
            `<p>La principal característica de Graphql es que deja en manos del cliente decidir qué datos quiere recibir.</p>` +

            `<h2>¿Cómo funciona?</h2>` +
            `<h3>Schema</h3>` +
            `<p>Es necesario definir los tipos de datos, sus campos, y los tipos de estos campos. Los tipos básicos de graphql son <strong>Query</strong> y <strong>Mutation</strong>. Query será usado para acceder a la información, mientras que con Mutation podremos modificarla (o mejor dicho, mutarla).</p>` +
            `<p>Veamos un ejemplo, en el que definimos un Query para recuperar un usuario o todos los usuarios, cuyo tipo definimos a continuación, utilizando los tipos escalares genéricos de graphql:</p>` +
            `<pre><code class="lang-graphql">\
type Query {
    usuario: Usuario #Devuelve un tipo Usuario
    usuarios: [Usuario] #Devuelve un array de tipos Usuario
}

#Define el tipo Usuario, a través de sus campos,
type Usuario {
    id: ID
    nombre: String
    edad: Int 
    #Podría incluir otro tipo complejo:
    mensajes: [Mensaje]
}

type Mensaje {
    id: ID
    fecha: Date
    autor: Usuario
    titulo: String
    contenido: String
}
</code></pre>` +
            `<h3>Resolvers</h3>` +
            `<p>Los resolvers son las funciones que nos permiten acceder a los datos previamente definidos. Como parámetros reciben:</p>` +
            `<ul>\
            <li><p>parent: En este caso es Query.</p></li>\
            <li><p>args: argumentos pasados como variables en la petición</p></li>\
            <li><p>context: Objeto definido en la creación del servidor</p></li>\
            <li><p>info: Información adicional, rara vez se usa.</p></li>\
            </ul>` +
            `<p>Veamos cómo podemos preguntar por la información de un usuario: </p>` +
            `<pre><code class="lang-js">\
{
    Query: {
        usuario: (parent, args, context, info) => {
            return User.get(args.id);
        },
        usuarios: (parent, args, context, info) => {
            return User.getAll()
        }
    }
} </code></pre>` + 
    `<p>Con esto ya tenemos suficiente para empezar a solicitar al servidor los datos de nuestros usuarios. Usando el siguiente query obtendremos el siguiente resultado:</p>` +
    `<div class="two-columns-code">\
<pre><code class="lang-graphql">\
#Petición
query obtenerUsuario{
    usuario(id: 5){
        nombre
        edad
        mensajes {
            id
            fecha
        }
    }
}\
</code>\
</pre>\
<pre>\
<code class="lang-json">\
//Respuesta
"data": {
    "usuario": {
        "nombre": "Pepe",
        "edad": 34
        "mensajes": [
            {
                id: "1",
                fecha: "2019-05-10T20:12:27.397Z"
            },
            {
                id: "2",
                fecha: "2019-05-24T18:33:16.343Z"
            }
        ]
    }
}\    
            </code>\
            </pre>\
            </div>` +
            `<p>Si quisiéramos podríamos solicitar el id, bastaría con añadir el campo dentro del query de la petición.</p>` +
            `<p>Del mismo modo que existe postman para REST, en graphql tenemos Graphql PlayGround, un marco donde poder jugar con nuestra API, testear su funcionamiento e inspeccionar el schema: </p>` + 
            `<img src="img/gql_pg.PNG" alt="graphql playground" />` +
            `<p>En una futura entrega hablaré de los problemas que introduce Graphql (no es oro todo lo que reluce), y cómo podemos solventarlos.</p>`
    },

    {
        id: 3,
        title: "Aplicaciones web isomorfas",
        date: "20/05/2019",
        by:"JaviGP",
        url:{
            twitter: null,
            instagram: null,
            linkedin: null
        },
        body: `<h2>SSR (Server Side Rendering)</h2>` +
            `<p>Quizás la forma más clásica de servir páginas web. El servidor se encarga de procesar todo el código y entregar al cliente la página web con todo “montado”, a partir de ahí, gracias a javascript podríamos <strong>realizar cambios en la página sin necesidad de volver a cargarla</strong> (el principio de las SPA). Aquí no tenemos el problema del SEO, pero la velocidad de respuesta se resiente, ya que es necesario solicitar al servidor el renderizado cada vez que queramos visitar otra página dentro del sitio web.</p>`+

            `<h2>SPA (Single Page Application)</h2>` +
            `<p>Por lo general, siempre que hablamos de aplicaciones web solemos pensar en aplicaciones del tipo SPA. Este tipo de aplicación web se caracteriza por <strong>delegar todo el control y renderizado al cliente</Strong> (navegador). Cuando se intenta acceder a una SPA a través de su URL, el navegador recibe un paquete con todo el código necesario para generar el sitio web. Una vez el paquete es recibido, se ejecuta. Esto permite una gran velocidad de respuesta para las sucesivas acciones sobre la página pero,  ¿qué ocurriría si el navegador tuviese el procesamiento por javascript desactivado? Pues la página nos sería visible.</p>` +
            `<p>Además, esto genera otros problemas  de cara al SEO, ya que no todos los indexadores de búsqueda son capaces de ejecutar el contenido que aguarda en el código fuente. Otra desventaja es que la primera carga es muy lenta debido a que el tamaño del paquete suele ser bastante grande.</p>` +
            
            `<h2>¿Y por qué no todo?</h2>` +
            `<p>En una aplicación isomorfa, <strong>la primera petición realizada por el navegador es renderizada por el servidor</strong> y servida lista para presentarse en el navegador. <strong>A partir de ese momento, el navegador toma el relevo</strong> y se encargará de renderizar y controlar las sucesivas acciones (de ahí su nombre, isomorfo o universal, ya que el mismo código es capaz de correr tanto en el cliente como en el servidor). Con ello logramos que la primera carga sea mucho más rápida que en las SPA (no se requiere javascript en el navegador) y las sucesivas lo sean más que en las SSR, además, no tendremos ningún problema de SEO. <strong>WIN WIN</strong></p>` +
            `<p>El único requisito es que tanto servidor como cliente estén sincronizados en todo momento para evitar problemas y situaciones extrañas.</p>` +
            `<p>Controlador todo esto no es fácil pero existen herramientas que nos ayudan a gestionarlo de manera más o menos sencilla.</p>` +
            `<h2>Ejemplo con Apollo Graphql y React</p>` +
            `<p>Veamos un simple ejemplo de como podríamos implementar esto, necesitaremos dos ficheros. En uno incluiremos la lógica para el renderizado en el servidor, fijaros en el uso de <strong>StaticRouter</strong> en el servidor, mientras que en el cliente usaremos <strong>BrowserRouter</strong>, ambos implementaciones de <strong>React Router 4</strong></p>` +
            `<p><strong>server.js</strong></p>` +
            `<pre><code class="lang-jsx">\
import React from 'react'
import ReactDOM from 'react-dom/server'
import {ApolloProvider, renderToStringWithData} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from "apollo-cache-inmemory";
import {StaticRouter} from 'react-router-dom';    
import Root from './src/components/App';  

//Apollo client
const client = new ApolloClient({
    ssrMode:true,
    link:new HttpLink({
        uri: process.env.API_PATH_URL,
        //There is no fetch method in Node.js
        fetch: fetch,
        //Send cookies along with request
        credentials: 'include',
        headers:{
            cookie: req.header('Cookie'),
        },
    }),
    cache: new InMemoryCache()
})

//This object will be passed to router children
const context =  {}
        
const App = ()
    &lt;ApolloProvider client={client}&gt;
        &lt;StaticRouter context={context} location={req.url}&gt;
            &lt;Root /&gt;
        &lt;/StaticRouter&gt;
    &lt;/ApolloProvider&gt;
)
        
renderToStringWithData(App).then((content) => {
    const initialState = client.extract();
    const html = <Html content={content} state={initialState}/>;
                
    res.status(200);
    res.send(\`&lt;!doctype html&gt;\${ReactDOM.renderToStaticMarkup(html)}\`);
    res.end();
})
.catch( error => console.log(error))
        
//Html component
function Html({ content, state }) {
    return (
        &lt;html&gt;
            &lt;head&gt;&lt;/head&gt;
            &lt;body&gt;
                &lt;div id="root" dangerouslySetInnerHTML={{ __html: content }}&gt;&lt;/div&gt;
                &lt;script dangerouslySetInnerHTML={{
                    __html: \`window.__PREV_STATE__=\${JSON.stringify(state).replace(/&lt;/g, '\\u003c')};\`,
                  }}&gt;&lt;/script&gt;
            &lt;/body&gt;
            &lt;script src="/client_bundle.js"&gt;&lt;/script&gt;
        &lt;/html&gt;
    );
}</code></pre>` +
    `<br><p><strong>client.js</strong></p>` +
    `<pre><code class="lang-jsx">\
import React from 'react';
import ReactDom from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import App from './components/App';

//Apollo Client
const client = new ApolloClient({
    link:new HttpLink({
        uri: process.env.API_PATH_URL,
        //Send cookies with server requests
        credentials: 'include',
    }),
    // Restore cache with current state (from SSR)
    cache: new InMemoryCache().restore(window.__PREV_STATE__),
});
    
//Rehydrates DOM, It doesn't make changes if not needed and takes the control
    ReactDom.hydrate(
        &lt;ApolloProvider client={client}&gt;
            &lt;BrowserRouter&gt;
                &lt;App /&gt;
            &lt;/BrowserRouter&gt;
        &lt;/ApolloProvider&gt;, document.getElementById('root')
    )</code></pre>`

    },{
        id: 4,
        title: "Autentificación de lado del servidor y SPAs",
        date: "24/05/2019",
        by:"JaviGP",
        url:{
            twitter: null,
            instagram: null,
            linkedin: null 
        },
        body: `<p>Un punto clave en el desarrollo de cualquier aplicación web es definir e implementar cómo manejaremos la autentificación del usuario. Existen numerosos sistemas de implementarlo pero al final todos se basan en un mismo principio.</p>` +
            `<p>Uno muy habitual en aplicaciones SPA es el uso de <strong>JWT</strong>. En el momento que el usuario inicia sesión correctamente, se almacena un token con la información del usuario encriptada (por favor, nunca incluir la contraseña aquí) en el sistema de almacenamiento del navegador (localStorage), entonces desde la aplicación podremos acceder a esta información y comprobar así la identidad del usuario. <strong>Todo ocurre en el cliente</strong> (con las vulnerabilidades que ello conlleva).</p>` +
            `<p>En <strong>vanwoow</strong> he optado por el tradicional sistema de sesiones del lado del servidor. Cuando un usuario inicia sesión mediante sus credenciales usuario y contraseña correctamente, se crea un registro en la base de datos con la información relevante a la actual sesión. Esta sesión consta de un identificador con el cual se creará la <strong>Cookie</strong> que será enviada al cliente junto con la respuesta. La cookie tan solo nos vale para decir qué usuario va con qué sesión, la información relevante al usuario y a su sesión no es expuesta y permanece del servidor. 
            </p>` +
            `<p>El servidor encargado del control de usuarios será el propio servidor de la API (montado con Apollo Graphql Server y express), teniéndolo así como única fuente de verdad a la hora de realizar las comprobaciones de seguridad.</p>` +
            `<p>En nuestro caso usamos la librería express-session junto con connect-pg-simple para almacenar las sesiones en PostgreSQL. Para simplificar, usaré el ejemplo con las sesiones almacenadas en memoria.</p>` +
            `<p>En primer lugar, añadiremos express-session junto con su configuración a nuestra app express:</p>` +
            `<pre><code class="lang-js">\
import express from 'express';
import session from 'express-session';
            
app.use(session({
    name: "qid",
    //Generates unique id
    genid: function (req) {
        return genuuid()
    },
    secret: process.env.SECRET_KEY,
    resave: false,
    //Creates cookie on first request (for visitors tracking)
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000 //30 days
    }
}));</code></pre>` +
    `<p>Creamos nuestro servidor Apollo. Pasamos a los resolvers los datos del usuario en el caso de que exista una sesión activa en el contexto, junto con la propia petición y los modelos de datos (creados con <strong>Objection.js</strong>):</p>` +
    `<pre><code class="lang-js">\
import {ApolloServer} from 'apollo-server-express';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        return {
            req,
            models,
            loggedIn: await getLoggedInUser(req),
        }
      },
    });
    
// This is our unique source of true, with every request we check
// the actual user status from the database, then we pass this to resolvers
const getLoggedInUser = async (req) => {
    if (!req.session || !req.session.user) return null
    
    let user = await models.Usuario.query()
        .select('nombre', 'email', 'rol', 'verificado', 'socio_desde')
        .where('email', req.session.user.email)
        .first();
    
    return user;
}</pre></code>` +
    `<p>Necesitaremos un endpoint en el que administrar el inicio de sesión, para ello se define un resolver que recibe como parámetros el email y la contraseña del usuario. Haremos las validaciones necesarias (por simpleza he omitido este paso), si todo es correcto modifaremos la sesión en la petición, express-session se encargara del resto.</p>` +
    `<pre><code class="lang-js">\
Mutation:{
    //User login graphql resolver mutation
    //Validates user login data and creates the session
    logIn: async (_, { email, password }, { req, loggedIn, models }) => {
        //Check for user credentials...
        //... More code
        if (succes){
            //Just modofy session from request object, express-session handles everything
            req.session["user"] = { email };
        }
    }
}</code></pre>` +
    `<p>Por último, necesitaremos otro endpoint al que preguntaremos si el usuario actual tiene una sesión activa. Esto es útil para poder modificar lo que mostramos en el cliente en función de si el usuario está logueado o no. Recordemos que estas funciones reciben la información de la sesión del usuario que realiza la petición como contexto. Si existe, se la entregamos:</p>` +
    `<pre><code class="lang-js">\
Query: {
    //Returns current logged in user data (himself)
    getCurrentUser: (_, __, { loggedIn }) => {
        if (loggedIn && loggedIn.email) {
        return loggedIn;
        } else {
        return null
        }
    }
}</code></pre>`
    }
];


/* Template

    {
        id: 0,
        title: "",
        date: "",
        by:"JaviGP",
        url:{
            twitter: null,
            instagram: null,
            linkedin: null 
        },
        body: 
        `
            <p></p>       
        `
    },

*/