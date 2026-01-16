# Enhanced Calculator Web App

This project is an enhanced, user-friendly calculator web application built with HTML, CSS, and JavaScript. It provides basic arithmetic operations with improved security, usability, and a sleek, responsive interface.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Clear function to reset calculations
- Backspace function to delete the last character
- Decimal point support for floating-point numbers
- Prevention of multiple consecutive operators
- Prevention of multiple decimal points in a single number
- Secure calculation without using unsafe `eval()` function
- Responsive design for various screen sizes
- Sleek UI with Font Awesome icons
- Improved visual design with gradient backgrounds and smooth animations

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

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (version 6.1.1) for icons

## HTML Structure

The `index.html` file contains the structure of the calculator:

- A container div for the entire calculator
- A screen div to display calculations and results
- A buttons container with rows of buttons for numbers and operations
- Semantic class names for better maintainability

## CSS

The project uses a separate CSS file (`calc-style.css`) for styling with:
- Modern CSS features (flexbox, gradients, shadows)
- Responsive design for different screen sizes
- Smooth transitions and hover effects
- Consistent spacing and typography

## JavaScript

The calculator's functionality is implemented in `main.js` with:

- `addToDisplay(value)`: Adds the clicked number or operator to the display with validation
- `clearAll()`: Clears the display
- `calcAll()`: Safely calculates the result of the expression
- `deleteLast()`: Removes the last character from the display
- Input validation to prevent errors
- Secure calculation without using `eval()`

## Security Improvements

- Replaced unsafe `eval()` with a safer Function constructor approach
- Added input validation to prevent code injection
- Implemented proper error handling

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
