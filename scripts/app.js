const form = document.querySelector('form');
const list = document.querySelector('.list');

const updateUI = (data) => {

    const searchResultArray = data.query.search;

    for (let i = 0; i < searchResultArray.length; i++) {
        list.innerHTML += `
        <div class="items" id='${searchResultArray[i].pageid}' style="padding: 2vh 2vh 2vh 4vh;">
        <h3>${searchResultArray[i].title}</h3>
        <p>${searchResultArray[i].snippet}</p>
        </div>
        `;
    }

};

form.addEventListener('keyup', e => {
    // prevent default action
    e.preventDefault();

    list.innerHTML = ``;

    const keyWord = form.search.value.trim();

    searchWikipedia(keyWord)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});

form.addEventListener('submit', e => {
    e.preventDefault();

    return;
});

list.addEventListener('click', e => {
    let id;
    const { target } = e;
    console.log(target.getAttribute("class") == 'items');

    if (target.getAttribute("class") == 'items') {
        id = target.getAttribute("id");
    } else {
        id = target.parentElement.getAttribute("id");
    }
    const page = `https://en.wikipedia.org/?curid=${id}`;
    window.open(page, "_blank");

});
