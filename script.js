var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit); 
    
function handleFormSubmit(event){
    event.preventDefault();
    //1.Get form values
    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;

    //2.Clearing out the form values
    //for loop will loop through the fields and set the values back to an empty string
    for(var i=0; i<detailsForm.length; i++){
        detailsForm.element[i].value=""; //starts at 0 and the first time through the form, it's going to say, "Get Element 0 from that form and set its value to empty.
    }

    //3.create card here..................
    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    //4.Destination List
    var wishListContainer = document.getElementById('destinations_container');

    if(wishListContainer.children.length === 0){//If wishListContainer.children.length is exactly the same as zero, so if there's nothing in this container.
        document.getElementById('title').innerHTML = "My Wishlist";
    } 

    //5. add the card
    document.querySelector("#destinations_container").appendChild(destCard);

}

//run a function that creates new card
//create a function that has 4 parameters that match our 4 fields from the form:
function createDestinationCard(name, location, photo, description){
    var card = document.createElement(div);
    card.className = 'card';

    var img = document.createElement('img');
    img.setAttribute('alt', name); //how to set alt attribute (A11Y)

    //if photo is provided we use that or provide default photo:
    var constantPhotoUrl = "images/signpost.jpg";

    if(photoUrl.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    }
    else{
        img.setAttribute('src', photoUrl);
    }

    card.appendChild(img);

    //create class card-body
    var cardBody = document.createElement("div");
        cardBody.className = "card-body"

    //h3 & h4 element 
    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);
    
    var cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    //If there is a description:
    if (description.length !== 0){
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    //create delete button
    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;
}

//Create function that removes the card-
//When the user clicks the remove button in a card, go to the parent's parent, 
// as shown highlighted on the right, and remove that element, 
// which is the card that goes with the button that was pressed. 

function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}

//Lastly, fill in steps 3 & 5 for the function that handles the form submission. 
//This should be working now. Also remove the dummy HTML code