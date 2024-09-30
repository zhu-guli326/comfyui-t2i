const images = [
    "D:\\AI\\picture\\pic\\DSC_8337.JPG",
    "D:\\AI\\picture\\pic\\mmexport1575896258845.jpg"
];
let currentIndex = 0;

const displayImage = document.getElementById('displayImage');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage.src = images[currentIndex];
});