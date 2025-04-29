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

Vacation Destinations Wish List is a polished, mobile-responsive app that allows users to create and manage a list of dream travel spots. Users can submit new destinations through a form, view them as dynamic cards, and remove them at any time.

This project focuses on clean design, user-friendly interactions, accessibility, and mobile-first responsiveness.

### Features

✔️ Add vacation destinations to a wish list using a form
✔️ Auto-clear form fields after submission
✔️ Display destinations as responsive cards with custom or default images
✔️ Remove destinations from the list with a smooth hover + focus experience
✔️ "Empty State" message appears when no destinations are present
✔️ Mobile-first, fully responsive layout with custom header + background design
✔️ Keyboard navigable (skip link, focusable buttons, screen reader-friendly labels)

### How It Works

- User enters destination details in the form (Name, Location, Photo URL, Description).
- On form submission:
  - Input values are captured.
  - Form fields are cleared.
  - A default image appears if no photo is provided.
  - A new destination card is created dynamically.
  - If this is the first entry, the title updates to "My Wishlist."
- Users can click the Remove button to delete a destination from the list.
- If all destinations are removed, an empty state image and message appear automatically.

### Screenshot

![](/images/Vacation%20Destination.png)

### Links

- Solution URL: [https://github.com/Jud1th1/Vacation-Destination-Project] https://github.com/Jud1th1/Vacation-Destination-Project
- Live Site URL: [https://vacationdestinationwish.netlify.app/] https://vacationdestinationwish.netlify.app/

## My process

- Started with a basic version from a course exercise.
- Redesigned layout entirely in Figma (desktop + mobile mockups).
- Implemented a mobile-first, card-based UI.
- Added visual polish: box shadows, hover transitions, button focus states.
- Focused on accessibility: skip links, aria labels, keyboard navigation.
- Troubleshooted dynamic behaviors like empty state messages.
- Created a smooth user experience across devices.

### Technologies Used

- HTML5 (Semantic structure)
- CSS3 (Custom styling + responsive design)
- JavaScript (DOM manipulation, dynamic rendering, form handling)
- Figma (UI design planning)

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

- Save destinations to LocalStorage for persistence across sessions
- Add "favorite" functionality (heart toggle)
- Add edit/update functionality to existing cards
- Animations for card entry/removal transitions

### Acknowledgments

- Thanks to William Mead|UC Davis Javascript Course
