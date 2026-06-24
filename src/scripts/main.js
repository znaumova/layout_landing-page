'use strict';

document.querySelector('.contacts__form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
