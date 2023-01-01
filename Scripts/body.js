const blogDetailBody = document.querySelector('.section');
const deleteBtn = document.querySelector('.delete--blog');
const id = new URLSearchParams(window.location.search).get('id');

const showDetails = async () => {
    const res = await fetch('http://localhost:8000/posts/' + id);
    const data = await res.json();
    let template = `
        <div class="blog-blog-body">
            <h2>${data.author}</h2>
            <p class="blog-blog-text">
                ${data.body}
            </p>
        </div>
    `;

    blogDetailBody.innerHTML = template;

}

let homeUrl = localStorage.getItem('url');

deleteBtn.addEventListener('click', async () => {
    const res = await fetch('http://localhost:8000/posts/' + id, {
        method: 'DELETE',
    });
    window.location.href = homeUrl;
})


window.addEventListener('DOMContentLoaded', (e) => {
    showDetails();
})