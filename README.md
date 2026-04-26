## Task 2: Reflection on My Website

**Chosen theme and purpose**  
I created a **Hybrid Portfolio** that blends personal creativity with professional design work. The purpose of the site is to introduce myself as a UX/UI and visual designer while showcasing my projects, skills, and personality. I used a modern yet playful aesthetic (Pixelify Sans font and vibrant accents) to reflect my belief that good design should be both functional and enjoyable.

**Structure of the site**  
The website consists of four pages:  
- `index.html` – Home page featuring a hero section with background image, tag pills, and an interactive "My Work" project gallery with clickable modals.  
- `about.html` – About Me page with a two-column layout (photo, name card, CV download, and skills on the left; bio and experience timeline on the right).  
- `contact.html` – Contact page with a validated form and success modal.  
- `404.html` – Custom 404 page styled with the same hero background for consistency.  

Navigation is consistent across all pages, using a pill-style menu on desktop and a hamburger menu on mobile.

**Challenges faced and how I solved them**  
- **Navigation consistency**: "My Work" needed to scroll on the home page but navigate correctly from other pages. I solved this by using `index.html#mywork` on all pages and `#mywork` on the home page.  
- **Project modals**: I wanted hover behaviour on desktop and click + close button on mobile. I implemented this using JavaScript with screen-size detection and different event handlers. I eventually swapped desktop to clickable modals so that one modal doesn't open when the user closes another.  
- **GitHub Pages deployment**: The site initially showed the 404 page as the landing page because the file was named `Index.html` (capital I). Renaming it to lowercase `index.html` and pushing the change fixed the issue.  
- **CV download**: Linking the PDF correctly from the `Images` folder required precise path handling and the `download` attribute.

**How I applied accessibility and semantic HTML best practices**  
I used semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) to create a clear, logical document structure. All images include descriptive `alt` text. Form inputs are properly associated with `<label>` elements using `for` and `id`. The site is fully responsive with a mobile-first approach and media queries. I also maintained good color contrast and tried to ensure keyboard navigation works well.
