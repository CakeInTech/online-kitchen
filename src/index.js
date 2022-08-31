import './styles/style.css';
import './styles/homePageContentStyles.css';
import './styles/reservationpage.css';
import displayMainPage from './modules/displayMainPage.js';
import getLikes from './modules/diplayLikes.js';

document.addEventListener('DOMContentLoaded', async () => {
  displayMainPage();
});

// getLikes();