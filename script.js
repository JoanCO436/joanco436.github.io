// Shared behaviour for all pages: mobile menu + theme switching
document.addEventListener('DOMContentLoaded', function () {

  // --- mobile navigation toggle ---
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav .links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // --- colour theme switching (remembers your choice) ---
  var root = document.documentElement;
  var swatches = document.querySelectorAll('.swatch');

  function currentTheme() {
    try { return localStorage.getItem('joan-theme') || 'editorial'; }
    catch (e) { return 'editorial'; }
  }
  function markActive(name) {
    swatches.forEach(function (s) {
      s.classList.toggle('is-active', s.getAttribute('data-theme') === name);
    });
  }

  markActive(currentTheme());

  swatches.forEach(function (s) {
    s.addEventListener('click', function () {
      var name = s.getAttribute('data-theme');
      root.setAttribute('data-theme', name);
      try { localStorage.setItem('joan-theme', name); } catch (e) {}
      markActive(name);
    });
  });
});
