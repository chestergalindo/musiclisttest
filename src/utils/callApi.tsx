import axios from 'axios';

axios.defaults.baseURL = 'https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/';

export const callApi = async (endpoint: string) => {
  const response = await axios.get(endpoint);
  return response.data;
};
