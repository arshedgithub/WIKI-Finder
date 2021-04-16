const form = document.querySelector('form');
const ul = document.querySelector('ul');

const updateUI = async (data) => {

    const searchResultArray = data.query.search;
    // console.log(data.query.search);
    for (let i = 0; i < searchResultArray.length; i++) {
        ul.innerHTML += `
        <li><h3>${searchResultArray[i].title}</h3><p>${searchResultArray[i].snippet}</p></li>
        `;
        console.log(searchResultArray[i]);
    }
}

form.addEventListener('keyup', e => {
    // prevent default action
    e.preventDefault();
    
    ul.innerHTML = ``;

    const keyWord = form.search.value.trim();

    searchWikipedia(keyWord)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});

form.addEventListener('submit', e => {
    e.preventDefault();

    return;
});
