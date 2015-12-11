var remoteStyles = ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic']

window.requestAnimationFrame(function() {
    var elementToInsertLinkBefore =
      document.getElementsByTagName('script')[0];
    for (var i = 0; i < remoteStyles.length; i++) {
      var linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.media = 'all';
      linkElement.href = remoteStyles[i];

      elementToInsertLinkBefore.parentNode.insertBefore(linkElement,
        elementToInsertLinkBefore);
    }
});