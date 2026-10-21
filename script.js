'use strict';

// Reading the page and opening abstracts do not require JavaScript.
// This file only adds a saved theme choice, the current year, and CV printing.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var preference = window.matchMedia('(prefers-color-scheme: dark)');
  var storageKey = 'academic-homepage-theme';
  var savedTheme = null;

  // Some browsers block storage for local files or in private sessions.
  try { savedTheme = localStorage.getItem(storageKey); } catch (error) { /* Use system preference. */ }
  if (savedTheme !== 'light' && savedTheme !== 'dark') savedTheme = null;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (button) {
      var isDark = theme === 'dark';
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Use light theme' : 'Use dark theme');
      button.title = isDark ? 'Use light theme' : 'Use dark theme';
    }
  }

  applyTheme(savedTheme || (preference.matches ? 'dark' : 'light'));

  if (button) {
    button.hidden = false;
    button.addEventListener('click', function () {
      savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(savedTheme);
      try { localStorage.setItem(storageKey, savedTheme); } catch (error) { /* Theme still changes. */ }
    });
  }

  preference.addEventListener('change', function (event) {
    if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light');
  });

  document.querySelectorAll('[data-current-year]').forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  var printButton = document.querySelector('[data-print]');
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', function () { window.print(); });
  }
}());
