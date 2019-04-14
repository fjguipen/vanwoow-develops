const posts = [
    {
        id: 0,
        title: "Entrada de ejemplo 1",
        date: "8/2/19",
        by:"JaviGP",
        url:{
            twitter:"",
            instagram:""
        },
        body: 
        `
            <p>Párrafo uno</p>
            <p>Párrafo dos</p>       
            <p>Párrafo tres</p>       
        `
    },
    {
        id: 1,
        title: "Entrada de ejemplo 2",
        date: "15/2/19",
        by:"JaviGP",
        url:{
            twitter:"",
            instagram:""
        },
        body: 
        `
            <p>Párrafo uno</p>
            <p>Párrafo dos</p>       
            <p>Párrafo tres</p>       
        `
    },
    {
        id: 2,
        title: "Entrada de ejemplo 3",
        date: "18/2/19",
        by:"JaviGP",
        url:{
            twitter:"",
            instagram:""
        },
        body: 
        `
            <p>Párrafo uno</p>
            <p>Párrafo dos</p>       
            <p>Párrafo tres</p>       
        `
    },
    {
        id: 3,
        title: "¡Hola mundo..! ¡Hola vanwoow!",
        date: "20/2/19",
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
            <br>
            <p>Así que si como yo, bebes 5 tazas de café al día, eres un freak de las nuevas tecnologías y te encanta piká código, <strong>¡te invito a que me acompañes y colabores abiertamente durante el desarollo!</strong></p>

            <p><br>
            Ejemplo:
            <pre class="prettyprint lang-js">
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
}            </pre>
            </p>
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