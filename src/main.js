'use strict';
import { searchImages, loadMoreImages } from './js/render-functions';

const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.more-btn');

searchForm.addEventListener('submit', searchImages);

loadMoreBtn.addEventListener('click', loadMoreImages);