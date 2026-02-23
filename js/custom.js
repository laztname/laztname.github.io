window.onload = () => document.getElementById("loading").style.display = "none"; setTimeout(() => document.getElementById("loading").style.display = "none", 3000);

(function () {
  var adsLoaded = false;

  function loadAdsense() {
    if (adsLoaded) return;
    adsLoaded = true;

    //console.log("User interaction detected → loading Adsense");

    var adsScript = document.createElement('script');
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1926937123072670";
    adsScript.async = true;
    adsScript.crossOrigin = "anonymous";

    adsScript.onload = function () {
      //console.log("Adsense loaded");
    };

    adsScript.onerror = function () {
      //console.log("Adsense blocked → loading Funding Choices");

      var fc = document.createElement('script');
      fc.async = true;
      fc.src = "https://fundingchoicesmessages.google.com/i/pub-1926937123072670?ers=1";
      document.head.appendChild(fc);
    };

    document.head.appendChild(adsScript);

    removeListeners();
  }

  function interactionHandler() {
    loadAdsense();
  }

  function removeListeners() {
    window.removeEventListener('scroll', interactionHandler);
    window.removeEventListener('mousemove', interactionHandler);
    window.removeEventListener('click', interactionHandler);
    window.removeEventListener('touchstart', interactionHandler);
    window.removeEventListener('keydown', interactionHandler);
  }

  // Listen for first interaction
  window.addEventListener('scroll', interactionHandler, { passive: true });
  window.addEventListener('mousemove', interactionHandler);
  window.addEventListener('click', interactionHandler);
  window.addEventListener('touchstart', interactionHandler, { passive: true });
  window.addEventListener('keydown', interactionHandler);

})();
