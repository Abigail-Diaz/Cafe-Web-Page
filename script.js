
async function getData(){
    
    const hot_drink_url = 'https://api.sampleapis.com/coffee/hot';

    try {
        const response = await fetch(hot_drink_url);

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
        //const drink = document.createElement('div');
        
        // organize the data into corresponding variables
        const title = item.title;
        const description = item.description;
        const ingredients = item.ingredients;
        const imageUrl = item.image;

        // create the html content to display the data in order
        htmlContent += `
        <div class = "drink">
        <img src = "${imageUrl}" alt = "${title}">
        <p><strong></strong> ${title}</p>
        <p><strong>Description: </strong> ${description} </p>
        <p><strong>Ingredients: </strong> ${ingredients} </p>
        </div>`;
    });

    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', () => {
    getData();
});

