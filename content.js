function blockAds() {
    const adSelectors = [
        "iframe[src*='ads']",       
        "div[class*='ad']",       
        "div[id*='ad']",  
        "[class*='sponsored']",    
        "[id*='sponsored']",
        "div[data-ad]",             
        "a[href*='utm_source=ad']",  
        ".jw-media.jw-reset"        
    ];

    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
    });
}

window.addEventListener("load", blockAds);

const observer = new MutationObserver(blockAds);
observer.observe(document.body, { childList: true, subtree: true });
