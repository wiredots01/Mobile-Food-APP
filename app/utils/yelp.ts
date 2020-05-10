import axios from "axios";

const apiKey = '--get--your-api-key-on-yelp';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`,

  }
});