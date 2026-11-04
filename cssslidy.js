/**
 * Photo slider with captions
 * Last update: November 3, 2026
 * Author: Subrata Samanta
 *
 * Usage (same call as before):
 *   cssSlidy({ timeOnSlide: 4, slidyDirection: 'left' });
 *
 * Each <img> inside #slidy is wrapped in a <figure>, and its
 * data-caption text is shown as a caption at the bottom.
 * Styling lives in main.css under "Photo slider".
 */
var cssSlidy = function (newOptions) {
  var defaults = {
    timeOnSlide: 4,                          // seconds each photo is shown
    slidyContainerSelector: '#slidy-container',
    slidySelector: '#slidy',
    slidyDirection: 'left',                  // options: left, right
    captionSource: 'data-caption'            // options: data-caption, alt, none
  };
  var o = {}, k;
  for (k in defaults) o[k] = defaults[k];
  for (k in (newOptions || {})) o[k] = newOptions[k];

  var container = document.querySelector(o.slidyContainerSelector);
  var track = document.querySelector(o.slidySelector);
  if (!container || !track) return;

  // Wrap every image in a <figure> and add its caption
  var imgs = Array.prototype.slice.call(track.querySelectorAll('img'));
  if (!imgs.length) return;

  imgs.forEach(function (img) {
    var fig = document.createElement('figure');
    track.insertBefore(fig, img);
    fig.appendChild(img);

    var cap = o.captionSource === 'none' ? null : img.getAttribute(o.captionSource);
    if (cap) {
      var fc = document.createElement('figcaption');
      fc.textContent = cap;
      fig.appendChild(fc);
      if (!img.getAttribute('alt')) img.setAttribute('alt', cap);
    }
  });

  // Arrows
  var prev = document.createElement('button');
  prev.className = 'slide-btn prev';
  prev.setAttribute('aria-label', 'Previous photo');
  prev.innerHTML = '&#8249;';
  var next = document.createElement('button');
  next.className = 'slide-btn next';
  next.setAttribute('aria-label', 'Next photo');
  next.innerHTML = '&#8250;';
  container.appendChild(prev);
  container.appendChild(next);

  // Dots
  var dotsBox = document.createElement('div');
  dotsBox.className = 'slide-dots';
  container.appendChild(dotsBox);
  imgs.forEach(function (_, n) {
    var d = document.createElement('button');
    d.setAttribute('aria-label', 'Photo ' + (n + 1));
    d.addEventListener('click', function () { go(n); restart(); });
    dotsBox.appendChild(d);
  });
  var dots = dotsBox.querySelectorAll('button');

  var i = 0, timer = null;
  var step = o.slidyDirection === 'right' ? -1 : 1;

  function go(n) {
    i = (n + imgs.length) % imgs.length;
    track.style.transform = 'translateX(' + (-100 * i) + '%)';
    for (var j = 0; j < dots.length; j++) {
      dots[j].className = (j === i) ? 'active' : '';
    }
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(function () { go(i + step); }, o.timeOnSlide * 1000);
  }

  prev.addEventListener('click', function () { go(i - 1); restart(); });
  next.addEventListener('click', function () { go(i + 1); restart(); });

  // Pause while the mouse is over the slider
  container.addEventListener('mouseenter', function () { clearInterval(timer); });
  container.addEventListener('mouseleave', restart);

  // Swipe on phones
  var x0 = null;
  container.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  container.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { go(dx < 0 ? i + 1 : i - 1); restart(); }
    x0 = null;
  });

  go(0);
  restart();
};

(function () {

  /**
   * Initiate glightbox (only if the library is loaded)
   */
  if (typeof GLightbox === 'function') {
    GLightbox({ selector: '.glightbox' });
  }

  /**
   * Animation on scroll (only if the library is loaded)
   */
  window.addEventListener('load', function () {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  });

})();
