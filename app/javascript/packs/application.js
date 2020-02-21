import 'bootstrap';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// app/javascript/packs/application.js
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner';
import { initSweetalert } from '../plugins/init_sweetalert';

initSweetalert('#sweet-alert-demo', {
  title: "Are you sure?",
  text: "This action cannot be reversed",
  icon: "warning"
}, (value) => {
  if (value) {
    const link = document.querySelector('#delete-link');
    link.click();
  }
});

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  loadDynamicBannerText();
  initUpdateNavbarOnScroll();
});

