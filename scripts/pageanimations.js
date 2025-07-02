// main.js

let swup;

document.addEventListener('DOMContentLoaded', () => {
  swup = new Swup({
    plugins: [
      new SwupHeadPlugin(),
      new SwupPreloadPlugin()
    ]
  });

  // Handle transition start
  swup.hooks.on('animation:out:start', () => {
    const ui = document.querySelector('.persistent-ui');
    if (ui) ui.classList.remove('fade-in');
  });

  // Handle content replacement and fade in persistent UI again
  swup.hooks.on('animation:in:end', () => {
    // Allow time for styles/layout to stabilize
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('dom-ready');
        const ui = document.querySelector('.persistent-ui');
        if (ui) ui.classList.add('fade-in');
      });
    });
  });
});
