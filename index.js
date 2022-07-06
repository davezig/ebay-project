async function getUser() {
  const api_url = 'https://randomuser.me/api/';
  const response = await fetch(api_url);

  const data = await response.json();

  console.log(data.results);
}

// this search is working through the next 5 lines

// document.getElementById('test-api-search-btn').addEventListener('click', () => {
//   console.log('This is the call to the randomuser api');
//   getUser();
// });

// this is the function to call ebay api

async function searchEbay() {
  const api_url_base =
    'https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?';
  let itemToSearchFor = '';
  let searchStringToPassToApi = 'q=' + itemToSearchFor;
  let apiUrlWithSearchString = api_url_base + searchStringToPassToApi;
}

document.getElementById('test-api-search-btn').addEventListener('click', () => {
  console.log('This is the call to the ebay api');
  searchEbay();
});

// this is the initial response from calling the api without authentication
// {
//   "errors" : [ {
//     "errorId" : 1002,
//     "domain" : "OAuth",
//     "category" : "REQUEST",
//     "message" : "Missing access token",
//     "longMessage" : "Access token is missing in the Authorization HTTP request header."
//   } ]
// }
