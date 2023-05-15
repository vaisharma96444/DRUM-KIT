

//button press touches
var numberOfButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfButtons; i++) {




    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //as from document . a query will generate at drum class button and  i will give 1,2,3,4,5 eventlister if clic then call function 

        //var audio = new Audio('sounds/tom-1.mp3');
        //audio.play();

        //this.style.color ="white";


        var buttonInnerHtml = this.innerHTML;
        // now var buttonInnerHtml jisme value hai li ye press hua 
        makesound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);



    });

}

//key press

document.addEventListener("keypress", function (event) {

    //document m se kou bhi ki press hui to function call and (event - means jo key pass hui uska name )

    makesound(event.key);

    buttonAnimation(event.key);
})

function makesound(key) {

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;


    }


}

 function buttonAnimation(currentkey){
 
    var activeButton = document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");
     // in the class we add one more class for css to get press


     // timeout
     setTimeout(function(){
         activeButton.classList.remove("pressed");

     },100);

}

