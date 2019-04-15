"use strict";

var posts = [{
  id: 0,
  title: "¡Hola mundo..! ¡Hola vanwoow!",
  date: "15/4/19",
  by: "JaviGP",
  url: {
    twitter: "",
    instagram: ""
  },
  body: "\n            <p><strong>\xA1HOLA!</strong> Me llamo Javi, autodidacta y apasionado del mundo de la programaci\xF3n, en especial el desarollo de aplicaciones web y la automatizaci\xF3n. Desde que descubr\xED este mundillo (hace 2 a\xF1os no sab\xEDa que era un bucle for <strong>:P</strong>) no he dejado de investigar y aprender. </p>\n            \n            <p>Aprovechar\xE9 esta primera entrada para describir el porqu\xE9 de esta p\xE1gina y por qu\xE9 deber\xEDas quedarte y acompa\xF1arnos <strong>;)</strong></p>\n\n            <h2>\xBFVanwoow?</h2>\n            <p><a href=\"https://vanwoow.es/\" target=\"_blank\"><u>Vanwoow</u></a> es un proyecto iniciativa de Manu y Auxi y en el que Ana y yo ca\xEDmos inevitablemente. Trata sobre la despoblaci\xF3n de la Espa\xF1a rural, de los viajeros autocaravanistas que podr\xEDan ayudar paliarla y de la plataforma que los pondr\xE1 a todos ellos en contacto.</p>\n            \n            <p>Como cooperativa, nuestros socios ser\xE1n los propios usuarios y anfitriones de las actividades que ellos mismos deseen compartir y disfrutar, nosotros simplemente ponemos la herramienta a la disposici\xF3n de todos.</p>\n\n            <h2>Blog tecnol\xF3gico</h2>\n            <p>En esta p\xE1gina ir\xE9 describiendo el proceso de construcci\xF3n de la aplicaci\xF3n web de vanwoow. Describir\xE9 la arquitectura, hablar\xE9 sobre las distintas tecnolog\xEDas que se aplican como <strong>React</strong> o <strong>Graphql</strong>, toma de decisiones... as\xED como comentar y describir todas aquellas novedades y descubirmientos que aparezcan durante el proceso. En definitiva, quiero <strong>compartir la experiencia de la creaci\xF3n de la plataforma</strong>.</p>\n\n            <p>As\xED que si como yo, bebes 5 tazas de caf\xE9 al d\xEDa, eres un freak de las nuevas tecnolog\xEDas y te encanta pik\xE1 c\xF3digo, <strong>\xA1te invito a que me acompa\xF1es y colabores abiertamente durante el desarollo!</strong></p>\n\n            <p><br>\n            Veamos una funci\xF3n que uso en este mismo blog:\n            <pre class=\"prettyprint lang-js\">\n...\n\n/** \n * Recupera la publicaci\xF3n en base al \xEDndice\n * que recibe por par\xE1metro, y lo inserta en el DOM\n*/\n\nconst createContent = (index = state.current) =>{\n    let postData = posts[index];\n    let root = document.getElementById('content');    \n\n    return root.innerHTML = Post(postData);\n}\n\n// Componente que contendr\xE1 la publicaci\xF3n\nconst Post = (post) => {\n    return (\n        `\n        &lt;article&gt;\n            ${Title(post.title)}\n            ${DateC(post.date, post.by)}\n            ${Body(post.body)}\n        &lt;/article&gt;\n        `\n    )\n}\n\n...</pre>\n            </p>\n            <p>La primera funci\xF3n extrae una publicaci\xF3n del array de datos y lo inserta en el DOM. El \xEDndice por defecto es el \xFAltimo elemento de un array ordenado por fecha, de modo que siempre se muestre la \xFAltima publicaci\xF3n cuando se accede por primera vez. Siempre que se cambie la publicaci\xF3n activa, el estado global (state) cambiar\xE1 reflejando este cambio.</p>\n\n            <p>La segunda funcion imita de forma descarada (y muy b\xE1sica) c\xF3mo ser\xEDa un componente en <strong>React.js</strong> pero con <strong>Javascript</strong> sin m\xE1s (aka Vanilla). En su interior se llama al resto de componentes que lo conforman.</p>\n\n            <p>\xA1Y hasta aqu\xED la primera entrada! En las pr\xF3xima explicaremos cual es la arquitectura de la plataforma y qu\xE9 tecnolog\xEDas intervienen en ella.</p>\n        "
}];
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