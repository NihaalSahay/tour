const slides =document.querySelectorAll(".slide") //This statement will catch all the elements having the className slide and will put them in the variable slide , here the images are elemnts on which the slides class have been put
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left =`${index*100}%`// here the value of index will begin from 0 to 3 just as an array
    }
)
// The above function statement will put the images in the horizontal order as it goes from the logic , where the word left signifies that the slide variable which actually contains the image as its value will be how much far from the left as index starts from  0 so 0*100 will give that it will be 0% from the frame  them 100%,200%  so these will be getting out of the frame but in the horizontal x direction .So again this can be sorted out by overflow hidden in the parent of the slide 
const goPrev=()=>{

    if(counter!=0){
        counter--
    slideImage()
    }
    
}
const goNext=()=>{
    if(counter<slides.length-1){
        counter++
    slideImage()
    }
    
}
const slideImage =()=>{
    slides.forEach(
        (slide) =>{
            slide.style.transform =`translateX(-${counter*100}%)`
        }
    )
}