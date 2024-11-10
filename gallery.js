// Image data with captions
const images = [
    { name: 'flowers-pink', caption: 'Pink Flowers: A symbol of grace and joy!' },
    { name: 'flowers-purple', caption: 'Purple Flowers: Represents royalty and elegance!' },
    { name: 'flowers-red', caption: 'Red Flowers: Signifies love and passion!' },
    { name: 'flowers-white', caption: 'White Flowers: Symbolizes purity and innocence!' },
    { name: 'flowers-yellow', caption: 'Yellow Flowers: Represents friendship and happiness!' }
];

// Update image function to change the featured image and caption
function updateImage(imageName, captionText) {
    const featuredImage = document.getElementById('featured-image');
    const imageCaption = document.getElementById('image-caption');
    featuredImage.src = `${imageName}-large.jpg`;
    featuredImage.alt = captionText;
    imageCaption.textContent = captionText;
}

// Shuffle button: selects a random image from the array
document.getElementById('shuffle-button').addEventListener('click', () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    updateImage(randomImage.name, randomImage.caption);
});

// Theme toggle button for light/dark mode
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
