import axios from 'axios';
import { pageNum } from '../index';

async function fetchPix(requestWord) {
  const BASE_URL = `https://pixabay.com/api/`;
  const API_KEY = `39858400-2317542a926fa097b28c76f60`;
  const params = {
    key: API_KEY,
    q: requestWord,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    page: pageNum,
    per_page: 40,
  };

  const resp = await axios.get(BASE_URL, { params });

  const totalHits = resp.data.totalHits;

  const data = resp.data.hits;

  if (data.length === 0) {
    throw new Error(error);
  }

  const result = data.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      };
    }
  );

  return { result, totalHits }; // Повертаємо об'єкт з результатами і загальною кількістю
}
export { fetchPix };