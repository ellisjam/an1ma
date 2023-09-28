console.log('it works!');

document.addEventListener('DOMContentLoaded', function() {
    const imageBank = [
        'images/anima1.jpg',
        'images/anima2.jpg',
        'images/anima3.jpg',
        // ... add more image paths as needed
    ];

    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % imageBank.length; // This will loop back to the first image after the last one
        document.getElementById('dynamicImage').src = imageBank[currentImageIndex];
    }

    // Change image every 2 seconds
    setInterval(changeImage, 1000);

    // Change image on click as well
    document.body.addEventListener('click', changeImage);
});