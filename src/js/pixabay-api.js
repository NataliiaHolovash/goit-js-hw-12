'use strict';

import axios from 'axios';

export default async function getImages(searchWord, page = 1) {
  const searchList = new URLSearchParams({
    key: '43977507-2af66c517d7aa54537609b2b2',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  const imagesData = await axios.get(`https://pixabay.com/api/?${searchList}`);

  return imagesData.data;
}