
$(document).ready(function() {
  $('.button-collapse').sideNav();
  Materialize.showStaggeredList('.introduction');
  $('.parallax').parallax();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
$('#terms').modal();


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDev4rhIwycCk0JyaRHLoyqgF636rhvknI",
    authDomain: "hedsa-b4a3e.firebaseapp.com",
    databaseURL: "https://hedsa-b4a3e.firebaseio.com",
    projectId: "hedsa-b4a3e",
    storageBucket: "hedsa-b4a3e.appspot.com",
    messagingSenderId: "284653757517"
  };
  firebase.initializeApp(config);
});

function getData(e) {
        e.preventDefault();
    }

    // Get a reference to the database service
    var database = firebase.database();

function uploaddata() {
  if ($('#check').is(":checked")) {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
    var em =document.getElementById('email').value;
    var msg = document.getElementById('message').value;
    if (fname.length > 0 && lname.length > 0 && em.length>0 && msg.length > 0) {
        Materialize.toast('Message sent! Expect a reply in 1-2 weeks.',3000, 'green');

        saveToDB(fname,lname,em,msg);
    }
    else {
      Materialize.toast("All fields must be full.", 4000, 'red')
    }
  }

}


function saveToDB(first_name, last_name, email, message) {
  firebase.database().ref('/message/' + first_name).set({
    first_name: first_name,
    last_name: last_name,
    email : email,
    message: message
  });
  window.location.reload();
}
