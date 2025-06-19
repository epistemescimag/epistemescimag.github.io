const issueId = new URLSearchParams(window.location.search).get('book');

const embedLinks = {
  "volume1-issue1": "https://online.fliphtml5.com/qchhx/gxoy/",
  "volume1-issue2": "https://online.fliphtml5.com/qchhx/fsit/", 
  'volume2-issue1': "https://online.fliphtml5.com/qchhx/ytjx/",
  'volume2-issue2': "https://online.fliphtml5.com/qchhx/hkzi/",
  'special-pride': "https://online.fliphtml5.com/qchhx/bhom/",
  'special-special': "https://online.fliphtml5.com/qchhx/hvlc/",
  'volume3-issue1': "https://online.fliphtml5.com/qchhx/yclw/",
};

const viewer = document.getElementById("viewer");

if (embedLinks[issueId]) {
  viewer.innerHTML = `
    <div class="flipbook-container">
      <iframe 
        src="${embedLinks[issueId]}" 
        allowfullscreen 
        scrolling="no" 
        frameborder="0">
      </iframe>
    </div>
  `;
} else {
  viewer.innerHTML = `<div class="error">Invalid or missing book ID.</div>`;
}
