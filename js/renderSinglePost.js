import renderContent from './renderContent.js';
import renderHeader from './renderHeader.js';
import renderFooter from './renderFooter.js';
function renderSinglePost(data) {

return `<div class="post">
            ${renderHeader(data.author)}
            ${renderContent()}
            ${renderFooter()}
        </div>`;

    console.log('Generuoju viena posta');
}

export default renderSinglePost;