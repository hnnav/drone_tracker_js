function addData() {

    fetch ('https://assignments.reaktor.com/birdnest/drones') 
    .then(function(response) { 
        console.log(response.json())  
    })  
    
    .catch(function(error) { 
        console.error(error); 
    })
}