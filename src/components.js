/**
 *  POST COMPONENT
 */

const Post = (post) => {
    return (
        `
        <article>
            ${Title(post.title)}
            ${DateC(post.date, post.by)}
            ${Body(post.body, post.url)}
        </article>
        `
    );
} 


const Title = (title) => {
    return (
        `<h1 class="post-title regular">${title}</h1>`
    )
}

const DateC = (date, by) => {
    return (
        `<span class="date">${date}  ·  ${by}</span>`
    )
}

const Body = (text, url) => {

    const {twitter, instagram, linkedin} = url
    return (
        `
        <div class="post-content">${text}</div>
        ` + ( twitter || instagram || linkedin
            ? `<div class="footer">
            <h4>¿Te gustaría dejar un comentario? Puedes hacerlo cualquiera de las publicaciones en las RRSS</h4>`
            
            + (twitter
                ? `<a href="${url.twitter}" target="_blank">
                    <img src="assets/img/twi-g.png">
                </a>`
            : '')

            + (instagram
                ? `<a href="${url.instagram}" target="_blank">
                    <img src="assets/img/insta-g.png">
                </a>`
                : '')

            + (linkedin
                ? `<a href="${url.linkedin}" target="_blank">
                    <img src="assets/img/lin-g.png">
                </a>`
                : '')

            + `</div>`
        : '')
        

    );
}

/**
 * 
 * NAVIGATION COMPONENT
 */

const Navigation = (posts) => {
    return (
        `
        <div id="navigation" class="fade-in" onclick="handleChildClick(event, 'null')">
            <div id="nav-title">
                <h2>Vanwoow: Cómo se hizo, cómo se hace y cómo se hará.</h2>
                <p>Te contamos todo todito sobre el desarrollo de la plataforma de vanwoow. Sus avances, las decisiones que se toman, los problemas con los que nos encontramos y como los resolvemos. <strong>¡Vamos.. participa!</strong></p>
            </div>
            <div id="post-selector">
                <h3>Otras publicaciones</h3>
                ${PostSelector(posts)}
            </div>
        </div>
        `
    )
}

/**
 *  POSTSELECTOR COMPONENT
 */

const PostSelector = (posts) => {
    if (posts.length < 1) return `<span class="nomorePost">Aún no hay más publicaciones</span>`;
    let salida = '<ul>';
    posts.forEach((post)=>{
        salida += `
            <li  key="${post.id}" class="post" onclick="handleClickChangePost(${post.id})">
                <span class="name">${post.title}</span>
                <span class="date" >${post.date}</span>
            </li>
        `
    })
    salida += '</ul>'
    
    return salida;

}