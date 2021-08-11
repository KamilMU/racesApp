import axios from 'axios';

export const getRaces = async (startDate, endDate = "") => {
  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO/JFK/${startDate}`,
    params: { inboundpartialdate: `${endDate}` },
    headers: {
      'x-rapidapi-key': '6cbb65ec53msh916c34ee2e74dedp122402jsn5ccc25a2f13d',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };

  let data
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
  }).catch(function (error) {
    console.error(error);
  });

  return data;
};