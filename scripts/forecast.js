const searchWikipedia = async (keyWord) => {
    
    const base = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&';
    const query = `format=json&origin=*&srlimit=20&srsearch=${keyWord}`;
        // format  = json => expect json response,
        // origin = * => cors restriction, 
        // srlimit = 20 => how many response(20)  

    const response = await fetch(base + query);
    const data = await response.json();

    return data;

};

