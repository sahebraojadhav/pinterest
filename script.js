import example from './obj.js';
import example2 from './obj2.js'; // Renamed import

const image = document.querySelector('.img-placement');
console.log(image);

for (let i = 0; i < 13; i++) {
    const original_image_url = example.resource_response.data.results[i].images.orig.url;

    const img = document.createElement('img');
    img.src = original_image_url;
    img.alt = "here is my image";
    img.height = 200;
    img.width = 120;
    img.classList.add('my-image');
    image.appendChild(img);

    if (i % 2 === 0) {
        img.classList.add('my-image');
        console.log(i);
    } else {
        img.classList.add('second-class');
    }
}

console.log(example); // Corrected from example2 to examples
console.log(example2);
