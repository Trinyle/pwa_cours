const $articles = document.querySelector('#articles');
const ajax = () => {
fetch("data.json")
.then(response => response.json())
.then(response => {
    console.log(response)
    $articles.innerHTML = ""
    response.forEach(data => {
    const template = `
        <article class="article">
                    <div class="" style="height: 200px;"><img src="${data.image}" alt="photo de ${data.title}"></div>
                    <div class="article-title">${data.title1}</div>
                    <div class="article-subtitle">${data.title2}</div>
                    <div class="article-content">${data.content}</div>
                    <div class="article-meta">${data.date} - ${data.author}</div>
                </article>
    `
    $articles.innerHTML += template
})
})
}
setTimeout(e=> {
    ajax()
},1000)