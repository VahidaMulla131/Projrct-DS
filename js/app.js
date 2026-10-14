/**
 * Application Entry Point
 * 
 * Boots the Data Science Subject Digital Library SPA.
 */

import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
});
