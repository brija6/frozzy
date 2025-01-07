<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frozy Corner Documentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f9f9f9;
    }
    h1, h2 {
      color: #a6274f;
    }
    p {
      color: #555;
    }
    code {
      background-color: #f2f2f2;
      padding: 4px 8px;
      border-radius: 4px;
    }
    pre {
      background-color: #f2f2f2;
      padding: 10px;
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <h1>Frozy Corner Documentation</h1>
  <p>Welcome to the Frozy Corner project documentation! Below, you'll find explanations and functions for each page and their corresponding components.</p>

  <h2>1. index.html</h2>
  <p><strong>Purpose:</strong> This is the homepage of Frozy Corner.</p>
  <p><strong>Key Components:</strong></p>
  <ul>
    <li><strong>Header:</strong> Displays the logo and navigation menu with links to Home, Product, About, and Feedback pages.</li>
    <li><strong>Hero Section:</strong> A title section that introduces the main theme of the website, "Cakes and Cheesecake".</li>
    <li><strong>Carousel Section:</strong> Displays a carousel of cake images. The carousel includes navigation buttons for previous and next images, with transition effects.</li>
  </ul>
  <p><strong>JavaScript:</strong> The carousel functionality is controlled through a JavaScript file (script1.js) that adds transition effects between images.</p>

  <h2>2. loginPage.html</h2>
  <p><strong>Purpose:</strong> This page allows users to log in by entering their email and birth date in order to receive a 10% discount on their birthday.</p>
  <p><strong>Key Components:</strong></p>
  <ul>
    <li><strong>Logo:</strong> Displays the Frozy Corner logo at the top.</li>
    <li><strong>Form:</strong> A form where users can input their email and birth date. The form is required to submit the information.</li>
    <li><strong>Images:</strong> Two images (a girl and a boy with cupcakes) are displayed to the sides, providing a fun and friendly visual.</li>
  </ul>

  <h2>3. script1.js</h2>
  <p><strong>Purpose:</strong> This JavaScript file controls the carousel functionality on the homepage (index.html).</p>
  <p><strong>Key Functions:</strong></p>
  <ul>
    <li><strong>updateCarousel():</strong> Updates the position and visibility of the carousel images by assigning them different classes based on their state (active, previous, or next).</li>
    <li><strong>Event Listeners:</strong> Adds functionality to the "previous" and "next" buttons for navigating through the images in the carousel.</li>
  </ul>

  <h2>4. login style (loginstyle.css)</h2>
  <p><strong>Purpose:</strong> This CSS file provides the styling for the login page (loginPage.html).</p>
  <p><strong>Key Styles:</strong></p>
  <ul>
    <li><strong>General Styles:</strong> Sets up the background color, fonts, and layout of the login page.</li>
    <li><strong>Form Styling:</strong> Customizes the form layout and inputs with a clean and modern design, including hover effects on the login button.</li>
    <li><strong>Image Placement:</strong> Positions the girl and boy cupcake images with absolute positioning to add a playful touch.</li>
  </ul>

  <h2>5. style.css</h2>
  <p><strong>Purpose:</strong> This CSS file provides the styling for the homepage (index.html).</p>
  <p><strong>Key Styles:</strong></p>
  <ul>
    <li><strong>General Styles:</strong> Sets the overall layout, including the body background color and text styles.</li>
    <li><strong>Header:</strong> Styles the navigation bar and logo, with hover effects for interactivity.</li>
    <li><strong>Hero Section:</strong> Provides a large, styled title with a modern font for the homepage.</li>
    <li><strong>Carousel Styling:</strong> Styles the carousel, including transitions, image scaling, and button hover effects.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>This documentation outlines the structure and functionality of each key page and component in the Frozy Corner project. By understanding the roles of the HTML, CSS, and JavaScript files, you can make modifications and enhancements to the site as needed.</p>

</body>
</html>
