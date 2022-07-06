const api_url = 'https://randomuser.me/api/';
async function getUser() {
  const response = await fetch(api_url);

  const data = await response.json();

  console.log(data.results);
}

// the id of the search button to start the click event listener is #test-api-search-btn

getUser();
