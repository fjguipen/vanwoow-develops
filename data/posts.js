const posts = [
    {
        id: 0,
        title: "¡Hola mundo..! ¡Hola vanwoow!",
        date: "15/4/19",
        by:"JaviGP",
        url:{
            twitter:"",
            instagram:""
        },
        body:
        `
            <p><strong>¡HOLA!</strong> Me llamo Javi, autodidacta y apasionado del mundo de la programación, en especial el desarollo de aplicaciones web y la automatización. Desde que descubrí este mundillo (hace 2 años no sabía que era un bucle for <strong>:P</strong>) no he dejado de investigar y aprender. </p>
            
            <p>Aprovecharé esta primera entrada para describir el porqué de esta página y por qué deberías quedarte y acompañarnos <strong>;)</strong></p>

            <h2>¿Vanwoow?</h2>
            <p><a href="https://vanwoow.es/" target="_blank"><u>Vanwoow</u></a> es un proyecto iniciativa de Manu y Auxi y en el que Ana y yo caímos inevitablemente. Trata sobre la despoblación de la España rural, de los viajeros autocaravanistas que podrían ayudar paliarla y de la plataforma que los pondrá a todos ellos en contacto.</p>
            
            <p>Como cooperativa, nuestros socios serán los propios usuarios y anfitriones de las actividades que ellos mismos deseen compartir y disfrutar, nosotros simplemente ponemos la herramienta a la disposición de todos.</p>

            <h2>Blog tecnológico</h2>
            <p>En esta página iré describiendo el proceso de construcción de la aplicación web de vanwoow. Describiré la arquitectura, hablaré sobre las distintas tecnologías que se aplican como <strong>React</strong> o <strong>Graphql</strong>, toma de decisiones... así como comentar y describir todas aquellas novedades y descubirmientos que aparezcan durante el proceso. En definitiva, quiero <strong>compartir la experiencia de la creación de la plataforma</strong>.</p>

            <p>Así que si como yo, bebes 5 tazas de café al día, eres un freak de las nuevas tecnologías y te encanta piká código, <strong>¡te invito a que me acompañes y colabores abiertamente durante el desarollo!</strong></p>

            <p><br>
            Veamos una función que uso en este mismo blog:
            <pre class="prettyprint lang-js">
...

/** 
 * Recupera la publicación en base al índice
 * que recibe por parámetro, y lo inserta en el DOM
*/

const createContent = (index = state.current) =>{
    let postData = posts[index];
    let root = document.getElementById('content');    

    return root.innerHTML = Post(postData);
}

// Componente que contendrá la publicación
const Post = (post) => {
    return (
        \`
        &lt;article&gt;
            \${Title(post.title)}
            \${DateC(post.date, post.by)}
            \${Body(post.body)}
        &lt;/article&gt;
        \`
    )
}

...</pre>
            </p>
            <p>La primera función extrae una publicación del array de datos y lo inserta en el DOM. El índice por defecto es el último elemento de un array ordenado por fecha, de modo que siempre se muestre la última publicación cuando se accede por primera vez. Siempre que se cambie la publicación activa, el estado global (state) cambiará reflejando este cambio.</p>

            <p>La segunda funcion imita de forma descarada (y muy básica) cómo sería un componente en <strong>React.js</strong> pero con <strong>Javascript</strong> sin más (aka Vanilla). En su interior se llama al resto de componentes que lo conforman.</p>

            <p>¡Y hasta aquí la primera entrada! En las próxima explicaremos cual es la arquitectura de la plataforma y qué tecnologías intervienen en ella.</p>
        `
    },
]
/* Template

    {
        id: 0,
        title: "",
        date: "",
        by:"JaviGP",
        url:"",
        body: 
        `
            <p></p>       
        `
    },

*/