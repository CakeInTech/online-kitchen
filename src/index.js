import './styles/style.css';
import './styles/homePageContentStyles.css';
import './styles/reservationpage.css';
import './styles/displayReserv.css';
import displayMainPage from './modules/displayMainPage.js';

document.addEventListener('DOMContentLoaded', async () => {
  await displayMainPage();

});
