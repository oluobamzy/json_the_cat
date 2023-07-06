const {fetchBreedDescription} = require('./breedFetcher');
const args = process.argv[2];//receive user input
let breedName = args;
 

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    
    console.log(desc);
    
  }
});