document.getElementById('imageUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // Clear previous images

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            grid.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
