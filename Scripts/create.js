let blogTitleEl = document.querySelector(".blog-title");
let blogAuthorEl = document.querySelector(".blog-author");
let blogBodyEl = document.querySelector(".blog-body");
const form = document.querySelector("form");



const createBlog = async (e) => {
     e.preventDefault();

    const post = {
        title: blogTitleEl.value,
        body: blogBodyEl.value,
        author: blogAuthorEl.value
    }

    await fetch('http://localhost:8000/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    })

    window.history.back();
    
    blogTitleEl.value = '';
    blogAuthorEl.value = '';
    blogBodyEl.value = '';
}

form.addEventListener('submit', createBlog)