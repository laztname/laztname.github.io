window.onload = () => document.getElementById("loading").style.display = "none"; setTimeout(() => document.getElementById("loading").style.display = "none", 3000);

(function () {
  var adDetected = false;

  function showBanner() {
    if (document.getElementById("adblock-banner")) return;

    var banner = document.createElement("div");
    banner.id = "adblock-banner";

    banner.style.position = "fixed";
    banner.style.bottom = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.background = "#f9f2db";
    banner.style.color = "#000";
    banner.style.boxShadow = "0 -2px 12px rgba(0,0,0,0.25)";
    banner.style.zIndex = "999999";
    banner.style.fontFamily = "Arial, sans-serif";
    banner.style.padding = "30px max(30px, env(safe-area-inset-right)) calc(30px + env(safe-area-inset-bottom)) max(30px, env(safe-area-inset-left))";

    var container = document.createElement("div");
    container.style.maxWidth = "900px";
    container.style.margin = "0 auto";
    container.style.display = "flex";
    container.style.alignItems = "flex-start";
    container.style.gap = "12px";

    // Responsive stacking
    if (window.innerWidth < 600) {
      container.style.flexDirection = "column";
      container.style.alignItems = "center";
      container.style.textAlign = "center";
    }

    var icon = document.createElement("div");
    icon.textContent = "⚠️";
    icon.style.fontSize = window.innerWidth < 600 ? "24px" : "20px";

    var textWrap = document.createElement("div");

    var title = document.createElement("div");
    title.style.fontWeight = "bold";
    title.style.marginBottom = "6px";
    title.style.fontSize = window.innerWidth < 600 ? "16px" : "14px";
    title.textContent =
      "Ad blocker detected";

    var desc = document.createElement("div");
    desc.style.fontSize = window.innerWidth < 600 ? "15px" : "13px";
    desc.textContent =
      "Please disable your ad blocker and reload the page to continue.";

    textWrap.appendChild(title);
    textWrap.appendChild(desc);

    container.appendChild(icon);
    container.appendChild(textWrap);
    banner.appendChild(container);

    document.body.appendChild(banner);
  }

  function detectAdblock() {
    var script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;

    script.onerror = function () {
      showBanner();
    };

    script.onload = function () {
      adDetected = true;
    };

    document.head.appendChild(script);

    setTimeout(function () {
      if (!adDetected) showBanner();
    }, 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", detectAdblock);
  } else {
    detectAdblock();
  }
})();
