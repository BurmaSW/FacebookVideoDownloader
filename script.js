document.getElementById('downloadForm').addEventListener('submit', function (e) {
  const videoUrl = document.getElementById('videoUrl').value;
  const error = document.getElementById('error');

  if (!videoUrl.includes('facebook.com')) {
    e.preventDefault();
    error.textContent = 'Please enter a valid Facebook video URL.';
  } else {
    error.textContent = '';
  }
});