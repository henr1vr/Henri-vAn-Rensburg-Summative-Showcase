# Visual Styling
## Colour
A mix of light and dark backgrounds are used for visual interest and content seperation. Bright coloured elements are used for strong contrast with the backgrounds. These colours highlight specific content and gives the site a playful and slight retro video game vibe.
## Typography
The site uses sans-serif fonts to make it feel modern and sleek. A pixelated font is used for headings to tie into the retro vibe.
## Layout
Different sections use different layout grids to match their content. The hero uses a 1 column grid, the My work section has 5 columns and the next two sections have 2 columns. This creates visual interest while presenting content in a way that is suited to the specific nature of the content.
# Overall Theme
I believe my styling choices support my retro-modern theme because the fonts refer to pixelated arcade games, the colours make the site feel clean and modern, and the layout is almost boxy but not in a dull or repetitive way.
# Validation
I validated my style sheet as I created it. I tried to validate each section after styling it. I used this method to polish one section before completing any styling on the next section. This helped me keep track of everything as I may have gotten confused if I tried to style and validate everything at once.
# Reflection
I was surprised with the ammount of elements that need specific styling instructions (every little thing needs to be told what to do). It took quite a lot of time to achieve the look I was going for. As someone who is used to working with design software, this approach to styling a page felt very counter intuituve to me. I also feel like I had to compromise on some thing as I simply could not get it to look the way I wanted. I feel happy with where my project is now but I see room for improvement in next iterations.

# Module 4-Responsive design
## Responive approach
I approached responsiveness by defining the base values for text, padding and so on as the mobile values. I then added media queries to specify the changes that need to be made at each breakpoint. I used this method for all sections on the page.

## Layout tools
I used flex boxes for multiple elements that have 1 directional layouts. The mobile navigation dropdown uses a column flex box to stack navigation items vertically. The project cards in the 'My work' section makes use of a horizontal flexbox to place cards next to each other. The 'About me' section uses a 2 column flexbox for larger screens which stacks column 1 on column 2 on smaller screens.

## Design decisions
I decided to use a colapsable navigation on mobile devices so that the navigation icon could be small, and stay fixed to the top of the page. I mostly made use of column layouts so that these columns can be stacked on mobile devices. the mobile nav icon is interactive and expands when it is clicked. The hamburger icon also animates into an x icon when the menu is expanded to change to a 'close menu' button. Furthermore I added a hover state to the submit button in the contact form.

## Challanges
I found it a bit counter intuitive to force a mobile first approach onto a project for which I have already spent a few weeks creating the desktop version as per the brief. These assignments asks for desktop structure first and then intoduce the idea of mobile-first design, which is then added to a project which has already been created with a desktop-first approach. I believe that the weekly content should have introduced this idea at the start of the project. That way my site would have been created for mobile screens from the get go and I would have only needed to add tablet and desktop details for this stage of the project. What I am left with now is a desktop-first design for which the css had to be changed to make it seem as though it was created for mobile first.

Furthermore I found it challenging to keep track of the sections for which breskpoints have been aded. I am also a bit confused about where I need to place my media queries in the css file as this seems to have an effect on the structure of the website.