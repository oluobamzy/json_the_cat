const request = require('request');//require request package
const args = process.argv.slice(2);//receive user input
let argpath;

for (const item of args) {
  argpath = `https://api.thecatapi.com/v1/breeds/search?q=${item}`; //concatenate using template literals to ensure only the cat id changes
}

const returnCatsDescription = (path) => {// receive the path
  request.get(path, (err, res, body) => {
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

returnCatsDescription(argpath);


