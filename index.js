const {fetchBreedDescription} = require('./breedFetcher');
const args = process.argv[2];//receive user input
let breedName =  `https://api.thecatapi.com/v1/breeds/search?q=${args}`;
 

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    
    console.log(desc);
    
  }
});