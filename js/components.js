(function () {
  'use strict';

  var navHTML =
    '<nav class="navbar">' +
    '  <div class="container">' +
    '    <div class="backbutton-icons">' +
    '      <a href="javascript:history.back()">' +
    '        <i class="fas fa-chevron-left"></i>' +
    '      </a>' +
    '    </div>' +
    '    <div class="project-detail-title">' +
    '      <h3>Project <strong>Details</strong></h3>' +
    '    </div>' +
    '  </div>' +
    '</nav>';

  var footerHTML =
    '<footer class="site-footer">' +
    '  <div class="container">' +
    '    <div class="row">' +
    '      <p class="col-12 text-center">' +
    '        Copyright &copy; ' + new Date().getFullYear() + ' All rights reserved |' +
    '        This template is made with <i class="icon-heart" aria-hidden="true"></i> by' +
    '        <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>' +
    '      </p>' +
    '    </div>' +
    '  </div>' +
    '</footer>';

  var navEl = document.getElementById('shared-nav');
  var footerEl = document.getElementById('shared-footer');

  if (navEl) navEl.outerHTML = navHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
