Spacestagram
- - - -

A simple web application that automatically generates the image of the day from NASA's api.


Technologies Used
- - - -
* Frontend - HTML, CSS, and JavaScript
* Library - React
* Backend - Node.JS, Express



About the app
- - - -

The webpage automatically generates the daily NASA API image along with a description, date, photographer's name. There is a ternary operator to handle a different HTMX display(loading screen) until the API is retrieved. Lastly, the heart at the buttom left of the image is clickable. Onclick, the heart changes colors to display a liked image, red is for liked.




Getting Started
- - - -
Frontend deployment - https://edward-cabral-spacestagram.netlify.app/

* GitHub for Frontend - https://github.com/CabralE/spacestagram-client-vite

Backend deployment - https://ed-spacestagram-shopify-backen.herokuapp.com/

* GitHub for Backend - https://github.com/CabralE/spacestagram-client







Future Enhancements and Challenges
- - - -
- [ ] I was getting a build.command error when deploying my frontend to Netlify if I used 'create-react-app'. I opted to use 'npm init vite' instead. This is my first time using Vite. I believe there are 'build.command' errors with the latest react. In particularly with 'CI=false npm run build'.
- [ ] Add a Modal to inform user that the image has been liked/unliked, or a Sandwich Menu
- [ ] Add a count for liked images
