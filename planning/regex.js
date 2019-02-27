const axios = require('axios');
const svgToDataURL = require('svg-to-dataurl')

//select tag from html for svg
const USER_NAME = 'fireinjun'
const svMainRX = /^<svg(.|\n|\r)+?.*\/svg>/gmi
//select text to remove x and y formatting titles
const textTagRX = /<text(.|\n|\r)+?\/text>/g
// select svg tag for xmlns
const svTagRX = /^<svg.?/
// Where we're querying for the data
const API=`https://github.com/users/${USER_NAME}/contributions`
// Add this so SVG is renderable
const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" '


const heatMap = () => {
  axios
    .get(API)
    .then(res => {
      if (res.status === 200) {
        let rawData = res.data
        let sortedData = rawData.match(svMainRX).toString();
        let finalImg = sortedData.replace(svTagRX, svgStr).replace(textTagRX,'').trim()
        // let removeText = addTag
        // console.log(finalImg);
        const dataUrl = svgToDataURL(finalImg)
        console.log(dataUrl)
        return dataUrl
       }
      return rem;
    })
    .catch(err => {
      console.error(err);
    });
};
module.exports (heatMap);