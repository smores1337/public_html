"use strict";

const chai = window.chai;
const expect = chai.expect;

// First Test
describe('getRandomNumber()', () =>  {
    it('This asyn/wait function get a random number between 1-5',  async () => {
        expect(await getRandomNumber()).to.be.closeTo(1, 4)
    })
})

// Second Test
describe('getCityData()', () =>  {
    it('This asyn/wait function calls geocode to return data associated with a city',  async () => {
        expect((await getCityData("Toronto")).longt).to.deep.equal("-79.41946");
        //expect((await getCityData("Ottawa")).longt).to.deep.equal("-75.70914");
        //expect((await getCityData("New York")).longt).to.deep.equal("-73.97449");
    })
})

// Third  Test
describe('fetchProducts()', () =>  {
    it('This asyn/wait function fetchs products from the dummy json products api',  async () => {
        expect(await fetchProducts(1)).to.deep.equal("Essence Mascara Lash Princess");
        expect(await fetchProducts(12)).to.deep.equal("Annibale Colombo Sofa");
        expect(await fetchProducts(50)).to.deep.equal("Black Whisk");
        expect(await fetchProducts(1000)).to.deep.equal("Could not get products: Error: HTTP error: 404");
    })
})

// Fourth Test
describe('searchStorePrice()', () =>  {
    it('This asyn/wait function search products from store json api',  async () => {
        expect(await searchStorePrice("chicken noodle soup")).to.deep.equal(1.89);
        expect(await searchStorePrice("tomato soup")).to.deep.equal(1.40);
        expect(await searchStorePrice("spam")).to.deep.equal(2.85);
        expect(await searchStorePrice("refried beans")).to.deep.equal(0.99);
    })
})

// Last Test
describe('getStarWarsCharacters()', () =>  {
    it('This promise calls the star wars api, returing JSON object {key, value} of characters', async () => {
        expect((await getStarWarsCharacters()).characters["R2-D2"]).to.deep.equal("https://swapi.dev/api/people/3/");
        expect((await getStarWarsCharacters()).characters["C-3PO"]).to.deep.equal("https://swapi.dev/api/people/2/");
        expect((await getStarWarsCharacters()).characters["Luke Skywalker"]).to.deep.equal("https://swapi.dev/api/people/1/");
    })
})


/***************************************************************************************
 Testing TEMPLATES

 //To test a regular function
 describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result);
    })
})

 //To test async/await functions
 describe('yourFunctionName()', () =>  {
    it('The async/await function description',  async () => {
          expect(await yourFunctionName()).to.deep.equal(expected_result);
    })
})
 ***************************************************************************************/