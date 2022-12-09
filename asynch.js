

async function getData(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    var data =  await fetch(apiUrl);
    var items = await data.json();
    console.log('I am Passed',data)
    console.log('I am Items',items)

}

function success(){
    getData()
    console.log('I am success')
}

success();