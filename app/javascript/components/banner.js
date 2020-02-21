// app/javascript/components/banner.js
import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Mix your life", "Learn to cocktail"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
