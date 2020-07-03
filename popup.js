document.addEventListener('DOMContentLoaded', function () {
    var checkDesktopPage = document.getElementById('checkDesktopPage');
    var checkMobilePage = document.getElementById('checkMobilePage');
    checkDesktopPage.addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            window.open("https://developers.google.com/speed/pagespeed/insights/?url=" + tab.url +"&tab=desktop", "_blank");
        });
    }, false);
    checkMobilePage.addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            window.open("https://developers.google.com/speed/pagespeed/insights/?url=" + tab.url + "&tab=mobile", "_blank");
        });
    }, false);
}, false);