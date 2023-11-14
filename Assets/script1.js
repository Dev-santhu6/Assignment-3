// faq section
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// darkmoodset
let toggle = document.getElementById("toggleDark");
let body = document.querySelector("body");

toggle.addEventListener('click',function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high")){
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
    }else{
        body.style.background ="black";
        body.style.color = "white";
        body.style.transition = "2s";
    }

})

// map
function iniMap() {
  var opt= {
    zoom:15,
    center:{lat:9.657770,lng:80.159210}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), opt);
}

//faq
function toggleAnswer(answerId) {
  const answerBox = document.getElementById('answerBox');
  const answer = document.getElementById(answerId);
  const allAnswers = document.querySelectorAll('.answer');

  // Hide all answers
  allAnswers.forEach((item) => {
      item.style.display = 'none';
  });

  // Show the selected answer in the common box
  answerBox.style.display = 'block';
  answer.style.display = 'block';
}





   