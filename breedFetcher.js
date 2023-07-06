const request = require('request');//require request package
const fetchBreedDescription = (breedName,callback) => {// receive the path
  request.get(breedName, (err, res, body) => {
    if (err) {//returns error if any
      console.error('Error:', err);
      return;
    }

    if (res.statusCode === 404) {//return failed connection if path is broken
      console.error('Request failed with status code:', res.statusCode);
      return;
    }

    let data;
    try {//catch parsing errors
      data = JSON.parse(body);
    } catch (error) {
      console.error('Failed to parse response:', error);
      return;
    }

    if (data.length === 0) {//check whether right name was passed
      console.error('Failed connection, check the proper cat name');
      return;
    }

    const description = data[0].description;
    console.log(description);//log the description
  });
};
module.exports = {fetchBreedDescription};


