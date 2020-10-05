function renderContentText() {
    const shortTextLength = 60;
    const normalTextlength = 300;
    const largeTextlength = 400;
    const textLength = text.length;

    if (textLength <= shortTextLength) {
        return `<p class='big-font> ${text} </p>`;
    } else if (textLength <= normalTextLength) {
        return `<p> ${text} </p>`;
    } else if (textLength <= largeTextLength) {
        // nukerpam teksta ir pridedam see more..
        let shortText = '';
        for (let i=; i<normalTextlength; i) {
            shortText += text[i];
        }
        return `<p> ${shortText}<span class= "See-more"> See more </span></p>`;
    } else {
        // virs 10k, rodom klaida
        console.log(`ERROR: virsyta maksimali (${largeTextlength}) teksto riba`);
        return '';
    }
}

export default renderContentText;