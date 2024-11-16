async function getData(){
    
    const hot_drink_url = 'https://api.sampleapis.com/coffee/hot'

    try {
        const response = await fetch(hot_drink_url);

        if (!response.ok){
            throw new Error(`Response is not okay: Status of response is ${response.status}`);
        }

            const json = await response.json();
            console.log(json);  
        
        } catch (error){
        console.error(error.message);
    }
}