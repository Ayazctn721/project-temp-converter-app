# Temperature Converter

### Description
**Temperature Converter** is a beginner-friendly web application that allows users to convert temperatures between Celsius (°C) and Fahrenheit (°F). The project uses **Vite** for a modern development experience, **Bootstrap** for styling, and **Vitest** for unit testing. This template serves as a practical guide for learning how to structure a front-end project, implement conversion logic, and write unit tests.

---

## Project Features
- **Simple Bootstrap UI**: A clean interface with an input field for temperature and a selector to choose conversion direction (°C to °F or °F to °C).  
- **Temperature Conversion**: Converts user input based on selected conversion.  
- **Live Result Display**: Shows the converted value instantly upon clicking “Convert.”  
- **Theme Switcher**: Toggle between light and dark themes (or any custom themes you’d like).  
- **Unit Tests with Vitest**: Ensure conversion logic is accurate and reliable.

---

## Checklist: Things to Complete

### 1. HTML Structure
- [ ] Create a basic HTML page with **Bootstrap** CDN (or local files) included.  
- [ ] Add a form (or simple input group) for temperature input.  
- [ ] Include a selector (dropdown or radio buttons) to choose conversion type (°C → °F or °F → °C).  
- [ ] Add a “Convert” button.  
- [ ] Provide a section/element to display the result.  
- [ ] Include a theme switch toggle (button or switch).

### 2. CSS Styling
- [ ] Use **Bootstrap** utility classes for a clean layout.  
- [ ] Optionally add custom CSS or override Bootstrap variables.  
- [ ] Style the theme switcher to clearly indicate the current theme.  
- [ ] Ensure the design is responsive for different screen sizes.

### 3. JavaScript Functionality
- [ ] **Select** the necessary DOM elements (input, dropdown/selector, convert button, result display, theme switcher).  
- [ ] Implement **conversion logic**:
  - (°C → °F): `F = (C * 9/5) + 32`
  - (°F → °C): `C = (F - 32) * 5/9`
- [ ] **Display** the converted temperature in the result area.  
- [ ] **Theme Switcher** logic:
  - Toggle CSS classes or variables to switch between light/dark (or other) themes.

### 4. Unit Tests with Vitest
- [ ] Create test cases covering both °C → °F and °F → °C conversions.  
- [ ] Check edge cases (e.g., negative values, zero, large numbers).  
- [ ] Aim for **high coverage**—cover as many scenarios as possible.

### 5. Deployment
- [ ] Configure **Vite** for production builds (e.g., `npm run build`).  
- [ ] Deploy to a static hosting service (GitHub Pages, Netlify, Vercel, etc.).  
- [ ] Verify that the application works correctly in production mode.

---

## Technologies Used
- **HTML**: Structure and layout of the application.  
- **CSS & Bootstrap**: Styling and responsive design.  
- **JavaScript**: Core logic for temperature conversion and theme switching.  
- **Vite**: Fast, modern development server and build tool.  
- **Vitest**: A lightweight unit testing framework similar to Jest.

---

## What is Vite?
[Vite](https://vitejs.dev/) is a **modern front-end build tool** that offers a super-fast development experience. Instead of bundling your entire project up-front, Vite utilizes **ES Modules** in the browser to provide near-instant server start and lightning-fast hot module replacement (HMR). When you’re ready to deploy, Vite bundles your application using [Rollup](https://rollupjs.org/) under the hood for an optimized production build.

---

## Folder Structure Explanation

Here’s the default structure you’ll see in this template:
```
project-conv-app
├── tests/              # Folder containing your Vitest test files
├── public/
│   └── yollo-logo.svg
├── src/
│   ├── main.js         # Main JS entry file (where you'll write conversion logic and DOM interaction)
│   ├── style.css       # Main CSS (or SCSS) file
│   └── yollo-logo.svg
├── .gitignore
├── index.html          # Main HTML file; references 'src/main.js'
├── package-lock.json
├── package.json

```



- `__tests__`: Contains all your **Vitest** test files.  
- `public`: Static assets that need to be served directly (if any).  
- `src`: Core application code (JavaScript, CSS, images).  
- `index.html`: Your app’s entry point, pulling in styles and scripts.  
- `package.json`: Lists dependencies and scripts (e.g., `npm run dev`, `npm run build`, `npm run test`).  
- `vite.config.js`: Optional config file for advanced Vite settings.

---

**Happy Converting!**  
With this template, you’ll learn how to structure your project, implement logic with JavaScript, style with Bootstrap, test with Vitest, and leverage Vite for a modern development workflow. Feel free to customize it for your needs and, most importantly, have fun while learning!
