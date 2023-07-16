function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function enableDarkMode() {
  document.documentElement.classList.add('dark');
  sessionStorage.theme = 'dark';
}

function enableLightMode() {
  document.documentElement.classList.remove('dark');
  sessionStorage.theme = 'light';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mobile-menu-toggler').addEventListener('click', toggleMobileMenu);
  document.getElementById('moon-button').addEventListener('click', enableDarkMode);
  document.getElementById('sun-button').addEventListener('click', enableLightMode);
  document.getElementById('mobile-moon-button').addEventListener('click', enableDarkMode);
  document.getElementById('mobile-sun-button').addEventListener('click', enableLightMode);
});