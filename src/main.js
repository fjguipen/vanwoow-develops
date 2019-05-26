const state = {
    current: posts.length - 1
}

window.onload = () => {
    createContent();
    createMoreTrigger();
  
    rerunPrism();
}

const createContent = (index = state.current) =>{

    let search = window.location.search
    let query = new Map();
    let postData= {};

    if(search){
        let queriedPost;
        search = search.replace(/\?/, '')
        search = search.split(',')
        search.forEach(option => {
            let pair = option.split('=')
            query.set(pair[0], isNaN(pair[1])
                        ? pair[1]
                        : parseInt(pair[1]))
        })
        queriedPost = query.get('post')

        if(typeof queriedPost != undefined){
            
            postData = posts[queriedPost]
            if (!postData){
                postData = posts[state.current];        
            } else {
                state.current = queriedPost
            }
        } else {
            postData = posts[state.current];    
        }

    } else {
        postData = posts[index];
    }
    
    window.history.pushState({}, "", window.location.pathname + "/")

    let root = document.getElementById('content');    

    return root.innerHTML = Post(postData);
}

const createNavigationContent = () => {
    let hook = document.getElementById('more');
    let filteredPosts = posts.filter((post)=>{
        return post.id != state.current
    })

    setTimeout(()=>{
        document.getElementById('navigation').classList.add('fading')
    },100)
    
    return hook.insertAdjacentHTML('beforeend', Navigation(filteredPosts.reverse()))
} 

const createMoreTrigger = (target = null) => {
    if(!target){
        target = document.getElementById('more');
    }
    setTimeout(()=>{
        target.classList.add('visible')
    },1000)
}

const showMore = (target) => {
    if (target.classList.contains('opened')) return
    target.classList.add('opened')
    document.querySelector('body').classList.add('no-scroll')

    target.querySelector('#label').classList.add('closed')
    createNavigationContent()
}

const handleChildClick = (e, action) => {
    e.stopPropagation()
    if (action === 'open') {
        showMore(e.target.parentNode)
    } else if (action === 'close'){
        close(e.target.parentNode)
    }
    
}

const close = (target) => {
    target.classList.add('none')
    target.classList.remove('opened')
    document.querySelector('body').classList.remove('no-scroll')
    setTimeout(()=>{
        target.classList.remove('none', 'visible')
        target.querySelector('#label').classList.remove('closed')
        target.removeChild(target.querySelector('#navigation'))
        createMoreTrigger(target)
    }, 300)
}

const handleClickChangePost = (index) => {
    close(document.getElementById('more'))
    state.current = index
    return createContent(index) & rerunPrism() & scrollToTop();
}

const rerunPrism = () =>{
    document.querySelectorAll('code').forEach( e => {
        Prism.highlightElement(e)
    })
}

const scrollToTop = () => {
    scrollTo(0,0)
}