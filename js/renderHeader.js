function renderHeader(data) {
    console.log(data);
    return `<header class="post-header">
                <img class="avatar" src"./img/users/homer-simpson.jpg" alt="User profile picture"></img>
                <div class="post-user">
                    <a  href="#">${data.name} ${data.lastname}</a>
                    
            </header>`;
}

export default renderHeader;