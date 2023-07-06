const request = require('request');//require request package
const fetchBreedDescription = function(breedName,callback) {// receive the path
  let path = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request.get(path, (err, res, body) => {
    if (err) {//returns error if any
      //console.error('Error:', err);
      callback(err,null);
      return;
    }

    // if (res.statusCode === 404) {//return failed connection if path is broken
    //   //console.error('Request failed with status code:', res.statusCode);
    //   callback(err,null);
    //   return;
    // }

    let data;
    
    data = JSON.parse(body);

    if (data.length === 0) {//check whether right name was passed
      //console.error('Failed connection, check the proper cat name');
      callback(err,null);
      return;
    }

    const description = data[0].description;
    callback(null, description);//log the description
  });
};
module.exports = {fetchBreedDescription};


