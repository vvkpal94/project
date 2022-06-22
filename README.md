fetching data from an API and displaying it in the browser
I Used a shopping API 
The items that are displayed on the page come from our shopping API
step1-npx create-react-app my-app 
step2-We’re going to be making our Get requests using Axios, so let’s go ahead and install that now as well:  npm i axios
step3- npm start
step 4-create featuredproduct.js inside src folder
step 5 -As mentioned above, we will be using a simple shopping API that I created. The data includes six different items, along with their prices, images, descriptions, etc.
We’re going to be using the useState and useEffect Hooks, so let’s start by importing those in FeaturedProducts.js. Next, we need to create a state variable (which we’ll call products) and a function that updates it (which we’ll call setProducts). Since the data we’ll be fetching is essentially one big array, products will initially be set to an empty array:
Next, we’ll use Axios to fetch the data from the URL endpoint, so let’s go ahead and import Axios. And we’ll create a function for this called fetchProducts. So here, we’ll do axios.get(), which accepts our URL endpoint . That is the URL for our shopping API. The Get request returns a promise. Then, inside the then block, we’ll log the response. And if there’s an error, we’ll log it in the catch block:
Now that we’ve created our fetchProducts function, we’ll use useEffect to call it. Since the useEffect Hook always gets called on the first render, we need to put our fetchProducts function inside useEffect so that it gets called when the page loads. Otherwise, our function will not get called and our data will not be fetched. So now when our page loads, our data will be fetched.

To prevent the useEffect Hook from being executed in an endless loop (due to the fact that it runs after every render and every update by default), we pass an empty array as a second argument to useEffect. By doing this, our useEffect Hook will run only after the first render — even if the component’s state is updated:
If we take a look in the console, we can see that we have successfully fetched the data from our API:

In order to display this data, we need to pass in this data to our setProducts function so that we can set our state to the data. As you can see in the console, we need to use data (highlighted in the screenshot) to access this data. So let’s go ahead and add setProducts(res.data) to our fetchProducts function inside the then block:

Displaying the Data
Now that we’ve fetched our data, we’re ready to display it on the page. So down in our return, let’s create a div for our products. And we’ll give it a className of item-container (we’ll be adding some basic styles just so that we can have something a little more interesting to look at). Now, we’ll take our products (our fetched data), map through them, and call each item product (the name we will use for each item when we render the specific properties we want to render). Then, we’ll put each of these products in a card div with a className of card, which we will use to create some very simple cards:
Now, all that we need to do is to get our data displayed on the screen. If we look at one of the items in the console, we can see that we have access to the the brand, color, description, id, image, item, and price:
For our cards, let’s display the item, brand, and image. To render these, we simply write product (the name we chose above for each item) and then whatever it is that we want to display (e.g. product.item):
And there we go. We now have our products displayed on the page:
Conclusion
So there we go. We’ve fetched the data from our API using React Hooks and Axios and displayed it on the screen. In Part 2, we will continue with the data we have here and set up dynamic routing so that we can display each item dynamically on its own page. Stay tuned.
add delete button on each card and again using axios delete the fetched data with the help of onclick event.

add new items to the list as we click a button

step 1 Let’s create a file Button.js:
step 2 Next, we will write our modular component, that is, the component that will get added to the screen whenever the button is clicked. We’ll call it ListComponent and write it in a file ListComponent.js
We use props to determine the function that gets called when the onClick event fires, and the text within the button. We do this also for the ListComponent’s inner text.

This means that we have to set these attributes in the function that calls Button, App.js:
We’ll add two CSS classes, one for the button and the other for the modular component. In the App.css file created for us by create-react-app:
Now, we have to update the className attribute for both our button and modular component. In Button.js:

It’s time to implement the creation of new elements when we click the ‘Call Component’ button.

We’ll start in App.js:
We’ve made a few changes to the element in the code above.

First, we import useState(), which will help us to always re-render the page when we add new components.

We use useState() when setting the components and setComponents variables, so that whenever we change the components in the array, the component will re-render itself.

We next define the addComponent function, which uses setComponents() to append a new string to the components array. We do this by writing ‘…components’, which copies the values of the current components array into the new one, and add another string, “Sample Component”, to the new array.

Finally, perhaps the most important addition is the map function used in our return statement. We use components.map, which allows us to take each value in our components array and convert it into a rendered element on the screen.
It worked! After clicking the ‘Call Component’ button three times, we end up having four components on the screen (including the one we started off with). They pop up dynamically just as we want them to.
We’ll notice that each of the elements we created above has the same inner text, “Sample Component”. As proof of concept, we’ll now change this so that each component gets its own unique name.

For this, we’ll pre-set the future component’s values.

Back in App.js, we will set our components to be the names of all the planets in the solar system, in order:
We add a new useState with the variables componentNames and setComponentNames. We set this to the names of all the planets in the solar system, excluding Mercury, which we start off with in the ‘components’ variable.

Next, we make changes to our addComponent() function. We first check to see if there are any planets left to render — if not, we send a message to the user via window.alert(), telling them that they’ve already added all the planets.

If there are indeed planets left to render, we use setComponents to append the next planet name to the array of component labels. After doing so, we use .splice() to get rid of the first element in the array, so that we can get the next one during the next time the user clicks the button.

