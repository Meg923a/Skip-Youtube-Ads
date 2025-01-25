// ==UserScript==
// @name         Skip Youtube Ads
// @namespace    https://github.com/Meg923a
// @version      2025-01-26
// @description  A simple script to skip Youtube ads
// @author       Meg923a
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

(function () {
    var fastForwarding = false;

    const observer = new MutationObserver((mutations) => {
        const adText1 = document.querySelector(".ytp-preview-ad__text");
        const adText2 = document.querySelector(".ytp-ad-textt");
        const adText3 = document.querySelector(".ytp-ad-button-vm__text");
        const adText4 = document.querySelector(".ad-simple-attributed-string");
        
        if ((adText1 || adText2 || adText3 || adText4) && !fastForwarding) {
            var video = document.querySelector("video");
            if (video) { video.currentTime = 600; }
            
            fastForwarding = true;
            setTimeout(function () {
                fastForwarding = false;
            }, 100);
        }

        var skipButtons = document.querySelectorAll(
            ".ytp-skip-ad-button",
            ".ytp-ad-skip-button-modern"
        );

        skipButtons.forEach(button => {
            if (button) { btn.click(); }
        });
    });

    function removeVideoAds() {
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function removePageAds() {
        const style = document.createElement("style");
        style.textContent = `
            ytd-action-companion-ad-renderer,
            ytd-display-ad-renderer,
            ytd-video-masthead-ad-advertiser-info-renderer,
            ytd-video-masthead-ad-primary-video-renderer,
            ytd-in-feed-ad-layout-renderer,
            ytd-ad-slot-renderer,
            yt-about-this-ad-renderer,
            yt-mealbar-promo-renderer,
            ytd-statement-banner-renderer,
            ytd-ad-slot-renderer,
            ytd-in-feed-ad-layout-renderer,
            ytd-banner-promo-renderer-background,
            ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"],
            statement-banner-style-type-compact,
            .ytd-video-masthead-ad-v3-renderer,
            div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,
            div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,
            div#main-container.style-scope.ytd-promoted-video-renderer,
            div#player-ads.style-scope.ytd-watch-flexy,
            ad-slot-renderer,
            ytm-promoted-sparkles-web-renderer,
            masthead-ad,
            tp-yt-iron-overlay-backdrop,

            #masthead-ad {
                display: none !important;
            }
        `;

        document.head.appendChild(style);
    }

    removeVideoAds()
    removePageAds();

})();
