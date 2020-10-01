import posts from "./data.js";
import renderPosts from "./renderPosts.js";

renderPosts(posts);


const headerDOM = document.querySelector('header');
headerDOM.innerHTML = '<h1>hiiii</h1>';