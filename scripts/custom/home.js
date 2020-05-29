const imageSrc = [
	"./images/extern/carousel-images/tekken1.png",
	"./images/extern/carousel-images/tekken2.png",
	"./images/extern/carousel-images/tekken3.png"
];

const imagePresentate = [
	{
		imagePath: "",
		imageIndex: 0
	},
	{
		imagePath: "",
		imageIndex: 1
	},
	{
		imagePath: "",
		imageIndex: 2
	}
];

// Right Arrow
const carouselPushLeft = () => updateImagePresentate('right');

// Left Arrow
const carouselPushRight = () => updateImagePresentate('left');

const updateImagePresentate = (gowhere) => {
	const imageSrcLastElemIdx = imageSrc.length-1;
	const imagePreLastElemIdx = imagePresentate.length-1;
	if (gowhere === 'left') {
		for (image of imagePresentate){
			if (image.imageIndex === 0) 
				image.imageIndex = imageSrcLastElemIdx;
			else
				image.imageIndex--;
			image.imagePath = imageSrc[image.imageIndex];
		}
	}
	else if (gowhere === 'right') {
		for (image of imagePresentate){
			if (image.imageIndex === imageSrcLastElemIdx) 
				image.imageIndex = 0;
			else
				image.imageIndex++; 
			image.imagePath = imageSrc[image.imageIndex];
		}
	}
	else if (gowhere === 'here') {
		for (image of imagePresentate){
			image.imagePath = imageSrc[image.imageIndex];
		}
	}
	else
		new Error('Invalid updateImagePresentate() argument given!');
	for (var iter=0; iter < imagePreLastElemIdx+1; iter++){
		document.getElementById('carousel-element-img' + iter).src = imagePresentate[iter].imagePath;
	}
};

const setFilter = (num) => {
	document.getElementById('carousel-element-img' + num + '-filter').style.opacity = 1;
};

const clearFilter = (num) => {
	document.getElementById('carousel-element-img' + num + '-filter').style.opacity = 0;
}

$(document).ready(() => updateImagePresentate('here'));