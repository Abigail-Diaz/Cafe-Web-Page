
async function getData(url){

    try {
        const response = await fetch(url);

        if (!response.ok){
            throw new Error(`Response is not okay: Status of response is ${response.status}`);
        }

        // get the data
            const data = await response.json();
            console.log(data);
            displayData(data)
        
        } catch (error){
        console.error(error.message);
    }
}

function displayData(data){
    
    const container = document.getElementById('data-container');
    
    let htmlContent = '';
    
    data.forEach(item => {

        
        // organize the data into corresponding variables
        const title = item.title;
        const description = item.description;
        const ingredients = item.ingredients;
        const imageUrl = item.image;

        // create the html content to display the data in order
        if (title !==''){
            htmlContent += `
            <div class="drink">
                <img src="${imageUrl}"
                alt="${title}">
                <div class="drink-details">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <p><strong>Ingredients:</strong> ${ingredients.join(', ')}</p>
                </div>
            </div>`;}
    });
    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', () => {
    
    const hot_drink_url = 'https://api.sampleapis.com/coffee/hot';
    const cold_drink_url = 'https://api.sampleapis.com/coffee/iced';
    
    // Select the link element
    const hot_drink_link = document.querySelector('#hot-drinks-link');
    const cold_drink_link = document.querySelector('#cold-drinks-link');
    const pageTitle = document.querySelector('#page-title'); // Select the h1 element
    
    // check if the links work
    console.log('hot_drink_link:', hot_drink_link);
    console.log('cold_drink_link:', cold_drink_link);
    
    // display the hot drinks first
    getData(hot_drink_url);
    
    // Add an event listener for the 'click' event on the menu selection links
    if (hot_drink_link) {
        hot_drink_link.addEventListener('click', (event) => {
            event.preventDefault();
            pageTitle.textContent = 'Hot Drinks'; // Update the h1 title
            getData(hot_drink_url);
        });
    }
     else {
        console.error('hot_drink_link not found!');
    }

    if (cold_drink_link){
        cold_drink_link.addEventListener('click', (event) => {
            event.preventDefault();
            pageTitle.textContent = 'Cold Drinks'; // Update the h1 title
            getData(cold_drink_url);
        });
    } else {
        console.error('cold_drink_link not found!');
    }
});
