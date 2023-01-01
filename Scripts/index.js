const blogBody = document.querySelector('.blogs');
    const uri = 'http://localhost:8000/posts';

    async function fetchData() {
        const res = await fetch(uri);
        const data = await res.json();
        
        let template = '';
        const blogs = data.map(item => {
            template += `
                <div class="blog">
                    <h2>${item.title}</h2>
                    <h3>${item.author}</h3>
                    <p>
                        ${item.body.slice(0, 198)}...
                    </p>
                    <p class="body-link"><a href="./HTMLFILES/blog-body.html?id=${item.id}">Read Blog...</a></p>
                </div>
            `;
        })
        if (template) {
            blogBody.innerHTML = template;
        }
        else {
            blogBody.innerHTML = `
                <div class = "no-blog">
                    No Blogs Yet!!!
                </div>
            `;
        }
    }


    

window.addEventListener('DOMContentLoaded', (e) => {
    if (fetchData()) {
        fetchData()
        console.log(fetchData())
    }
    localStorage.setItem('url', document.URL);
});