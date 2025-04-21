"use strict";

// First Function where we get random number between 1 to 5

function getRandomNumber() {
return new Promise((resolve) => {
    setTimeout(() => { // This will generates a numberr between 1 to 5
    const randomNum = Math.floor(Math.random() * 5) + 1;
    resolve(randomNum);
    }, 500); 
});
}


// Second Function where we make API req to geocode with the provided city name 

async function getCityData(city) {
    try {
      const response = await fetch(`https://geocode.xyz/${city}?json=1`); 
      const data = await response.json();                           // Here we parse the JSON response  into JS obj
    return data;
    }
    catch (error) {                        // Here we catch Incase there is a errors during the API req
    throw new Error(`Failed to fetch data for ${city}: ${error.message}`);                // For some reason the code works on edge but not in chrome  --- =  API Problem
}
}             


// Third Function it fetches product data from dummyjson.com API based on our product ID

async function fetchProducts(id) {
  try {
    const url = `https://dummyjson.com/products/${id}`;  
    const response = await fetch(url);                      // Here we send a  request to the API and wait for the response
 if (!response.ok) { 
    throw new Error(`HTTP error: ${response.status}`);           // This will check if the response status is not okay
      }
    const data = await response.json();                                     // After that it will convert into  response to JSON 
      return data.title;    
  } catch (error) {
      return `Could not get products: Error: ${error.message}`;       // Same as function 2 If there are any error occurs  catch it and return formatted error message
  }
}


// Fourth Function here we search  for a product's price in a store inventory from a JSON API

async function searchStorePrice(product_name) {
  try {
const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const response = await fetch(url);       //This will  fetch the inventory dataa from the API

if (!response.ok) {
   throw new Error(`HTTP error: ${response.status}`);
  }
 const products = await response.json();      // Same thing above it will convert into response to JSON   
 const product = products.find(item => item.name === product_name); // Here we use Array.prototype.find() to locate the product by name
if (!product) {
    throw new Error(`Product "${product_name}" not found`);
   }    
  return product.price;
    } catch (error) {   // Same thing again if there are any errors occurs catch it and return....
  return `Could not get products: ${error.message}`;
  }
}


// Last Function fetch and process Star Wars character data
const getStarWarsCharacters = async function() {
  try {
  const url = "https://swapi.dev/api/people/";
  const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  const characters = {};
   data.results.forEach(character => {        
          characters[character.name] = character.url;
      });
      return { characters }; 
  } catch (error) {
      console.error('Error fetching Star Wars characters:', error);
      throw error;                                // same thing above re throw  to allow test to handle failure 
  }
};