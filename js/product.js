/**image slider */
const sliderMainImage = document.getElementById("product-picture-big-img"); //product container image
const sliderImageList = document.getElementsByClassName("img-list"); // image thumblian group selection
const colorOption = document.getElementById("color-input");
console.log(sliderImageList);
console.log(colorOption);


sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
sliderImageList[4].onclick = function(){
    sliderMainImage.src = sliderImageList[4].src;
    console.log(sliderMainImage.src);
};
/**Add quantity */
let amountElement =  document.getElementById('quantity-buy');
function handlePlus() {
    amountElement.stepUp();
 }
 function handleMinus() {
    amountElement.stepDown();
 }

 colorOption.onclick =function(){
    if(colorOption.value = "pink")
        sliderMainImage.src = sliderImageList[3].src;
}