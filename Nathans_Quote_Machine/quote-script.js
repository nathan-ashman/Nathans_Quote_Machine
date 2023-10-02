const API_KEY = "afuizqetC4f44ZBN6D8kzw==JTpYFHvw82Rj6xUt"
const requestURI = "https://api.api-ninjas.com/v1/quotes?category=history";
function getNewQuote() {
  $.ajax({
    method: 'GET',
    url: requestURI,
    headers: { 'X-Api-Key': API_KEY},
    contentType: 'application/json',
    success: function(result) {
      let [rawData] = result;
      let {quote, author} = rawData;
      console.log(rawData);
      $( "#text" ).html(quote);
      $( "#author" ).html(`- ${author}`);
      let randRed = Math.floor(Math.random() * 256);
      let randGreen = Math.floor(Math.random() * 256);
      let randBlue = Math.floor(Math.random() * 256);
      let rgbStr = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
      $( "body" ).css("background-color", rgbStr);
      $( "#tweet-quote" ).css("background-color", rgbStr);
      $( "#tumblr-quote" ).css("background-color", rgbStr);
      $( "#new-quote" ).css("background-color", rgbStr);

  },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    } 

    
});
}

$( document ).ready(function() {
    //get random number between 1 and 255
    //Math.random() = 0 to 1(non-inclusive)
    //Math.random * 10 = 0 to 10(non-inclusive)
    //^let's call this wholeNumbers
    //how to buff it up to 255? simple
    //Math.random() * 256 (since 256 can't exist) and then floor to smallest possible number 
    //(so that it can never reach 256 even if its upwards to 256)
    // let randRGB = Math.floor(Math.random() * 256);
    
    
    getNewQuote();


  $( "#new-quote" ).click(()=>{
    
    getNewQuote();
  })  
});


