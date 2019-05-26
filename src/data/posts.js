const posts = [
    {
        id: 0,
        title: "\xA1Hola mundo..! \xA1Hola vanwoow!",
        date: "15/4/19",
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
s
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
];


/* Template

    {
        id: 0,
        title: "",
        date: "",
        by:"JaviGP",
        url:{
            twitter: ,
            instagram: ,
            linkedin: 
        },
        body: 
        `
            <p></p>       
        `
    },

*/