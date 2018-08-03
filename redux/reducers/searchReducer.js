//importing API data
import page1Data from './../../API/CONTENTLISTINGPAGE-PAGE1.json';
import page2Data from './../../API/CONTENTLISTINGPAGE-PAGE2.json';
import page3Data from './../../API/CONTENTLISTINGPAGE-PAGE3.json';

var data1 = page1Data.page.contentItems.content;
var data2 = page2Data.page.contentItems.content;
var data3 = page3Data.page.contentItems.content;

module.exports = (state = {
  data: [],
}, action) => {
  switch (action.type) {
    case "search":

    var movieData = [...data1,...data2,...data3]

    if(action.input === "")
    var  data = state.data;
    else {
    var  data = movieData.filter( (item) => {
          if(item.name.includes(action.input))
            return item
      } )
    }

      return {
        data:data
      }
      break;
  }
  return state
}
