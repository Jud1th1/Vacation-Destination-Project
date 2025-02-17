# Vacation Destinations Wish List

## Table of contents

- [Description](#description)
  - [Features](#features)
  - [How It Works](#how-it-works)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Technologies Used](#technologies-used)
  - [Project Breakdown](#project-breakdown)
  - [Future Improvements](#future-improvements)

## Description

This project allows users to create a wish list of vacation destinations by submitting a form. The entered details generate a dynamic card displaying the destination name, location, photo (if provided), and description. Users can also remove destinations from the list.

### Features

✔️ Add vacation destinations to a wish list using a form
✔️ Auto-clear form fields after submission
✔️ Display destinations as cards with an optional image
✔️ Default image provided when no URL is entered
✔️ Remove destinations from the list
✔️ Dynamic title update when the first destination is added

### How It Works

- User enters destination details in the form (Name, Location, Photo URL, Description).
- On form submission:
  - Input values are captured.
  - Form fields are cleared.
  - A new destination card is created dynamically.
  - If this is the first entry, the title updates to "My Wishlist."
- Users can click the Remove button to delete a destination from the list.

### Screenshot

![](/images/Vacation%20Destination.png)

### Links

- Solution URL: [https://github.com/Jud1th1/Vacation-Destination-Project] https://github.com/Jud1th1/Vacation-Destination-Project
- Live Site URL: [https://vacationdestinationwish.netlify.app/] https://vacationdestinationwish.netlify.app/

## My process

### Technologies Used

- HTML5
- CSS
- JavaScript: Handles form submission, card creation, and deletion

### Project Breakdown

- I followed a structured approach to build this project, using a flowchart to visualize the steps. Here’s a breakdown:
  ![](/images/Vacation%20Destination%20Flowchart.png)

1️⃣ Form Submission Handling

- Captured form values
- Cleared input fields after submission

2️⃣ Card Creation

- Created a new <div> element for each destination
- Added child elements dynamically (image, text, buttons)
- Used a default image if no URL was provided

3️⃣ Delete Functionality

- Each card has a remove button
- Clicking it removes the corresponding destination card

### Future Improvement

- Add local storage to save destinations across sessions
- Allow users to edit existing destinations
- Improve UI with animations and responsive design

### Acknowledgments

- Thanks to William Mead|UC Davis Javascript Course
