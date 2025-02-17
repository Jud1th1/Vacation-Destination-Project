var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit' handleFormSubmit); 
    
function handleFormSubmit(event){
    event.preventDefault();
    //Get form values
    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;

    //Clearing out the form values
    //for loop will loop through the fields and set the values back to an empty string
    for(var i=0, i<detailsForm.length; i++){
        detailsForm.element[i].value=""; //starts at 0 var destPhoto = event.target.elements['photo'].value;
    }
}