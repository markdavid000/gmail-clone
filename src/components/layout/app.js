const menu = document.querySelector('#menu');

const sidebar = document.querySelector('#side_bar');

menu.addEventListener('click', () => {
  sidebar.classList.toggle('show_sidebar');
});
