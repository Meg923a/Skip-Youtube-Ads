// ==UserScript==
// @name         Skip Youtube Ads
// @namespace    https://github.com/Sp0kzz
// @version      2024-06-15
// @description  Skip Youtube Ads Manually
// @author       Sp0kzz
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

(function () {
    let ii = false;
    const observer = new MutationObserver((mutations) => {
        var btn = document.querySelector(".ytp-skip-ad-button");
        if (btn) btn.click();
        var btn2 = document.querySelector(".ytp-preview-ad__text");
        var btn3 = document.querySelector(".ytp-ad-textt");
        if ((btn2 || btn3) && !ii) {
            let video = document.querySelector("video");
            if (video) video.currentTime = 50;
            ii = true;
            setTimeout(function () {
                ii = false;
            }, 100);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    removePageAds();

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
            ytd-banner-promo-renderer-background
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
})();
