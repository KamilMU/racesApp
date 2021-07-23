import axios from 'axios';

export const getRaces = () => {
  const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/Ru/RUB/3166/SVO/JFK/anytime/anytime',
    headers: {
      'x-rapidapi-key': '6cbb65ec53msh916c34ee2e74dedp122402jsn5ccc25a2f13d',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };

  return axios.request(options);
};