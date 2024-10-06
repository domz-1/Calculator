# Simple Calculator Web App

This project is a simple, user-friendly calculator web application built with HTML, CSS, and JavaScript. It provides basic arithmetic operations and a clean, responsive interface.

## Live Demo

Check out the live demo of the calculator: [https://domz-calculator.netlify.app/](https://domz-calculator.netlify.app/)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Clear function to reset calculations
- Decimal point support for floating-point numbers
- Responsive design for various screen sizes
- Sleek UI with Font Awesome icons

## Project Structure

```
calculator/
│
├── index.html
├── calc-style.css
├── main.js
└── README.md
```

## Setup

1. Clone the repository or download the project files.
2. Ensure all files are in the same directory.
3. Open `index.html` in a web browser to use the calculator.

Alternatively, you can view the live version at [https://domz-calculator.netlify.app/](https://domz-calculator.netlify.app/)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome (version 6.1.1) for icons

## HTML Structure

The `index.html` file contains the structure of the calculator:

- A container div for the entire calculator
- A screen div to display calculations and results
- A buttons container with rows of buttons for numbers and operations

## CSS

The project uses a separate CSS file (`calc-style.css`) for styling. Make sure this file is in the same directory as your HTML file.

## JavaScript

The calculator's functionality is implemented in `main.js`. This file should include the following functions:

- `addToDisplay(value)`: Adds the clicked number or operator to the display
- `clearAll()`: Clears the display
- `calcAll()`: Calculates the result of the expression

Ensure that `main.js` is in the same directory as your HTML file.

## Customization

- To change the styling, modify the `calc-style.css` file.
- To add new functions or modify existing ones, edit the `main.js` file.
- You can replace Font Awesome icons with custom images or different icon sets by modifying the HTML and CSS accordingly.

## Contributing

Contributions to improve the calculator are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a new Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

For more information or support, please contact the project maintainer.
