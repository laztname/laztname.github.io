console.log(document.referrer)
if (document.referrer !== "" && document.referrer !== null) {
    window.location = 'https://google.com/';
}
