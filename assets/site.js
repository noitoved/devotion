document.addEventListener("DOMContentLoaded", function(){

  burger = document.querySelector('a.burger');
  doc = document.querySelector('html.single');
  burger.addEventListener('click', function(event) {
    event.preventDefault();
    if (doc.classList.contains('menu-on')) {
      doc.classList.remove('menu-on');
      burger.innerHTML = '<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="5" y="9" width="22" height="2"/><rect x="5" y="15" width="22" height="2"/><rect x="5" y="21" width="22" height="2"/></svg>';
    } else {
      doc.classList.add('menu-on');
      burger.innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5563 23.5563L9 8L7.58579 9.41421L23.1421 24.9706L24.5563 23.5563Z" /><path d="M23.1421 8L7.58579 23.5563L9 24.9706L24.5563 9.41421L23.1421 8Z" /></svg>';
    }
  })
});
