const inputFname = document.querySelector("#fname");
const inputLname = document.querySelector("#lname");
const inputEmail = document.querySelector("#mail");
const inputSubject = document.querySelector("#subject");
const sendBtn = document.querySelector(".send-button");
const inputFnameValue = inputFname.value;
const inputLnameValue = inputLname.value;
const inputEmailValue = inputEmail.value;
const inputSubjectValue = inputSubject.value;

// firstname input field
sendBtn.addEventListener("click", function(){
    // als field leeg/fout is word onderstaande code's uitgevoerd
    if (!inputFname.checkValidity() && inputFnameValue == "") {
        inputFname.classList.add("red");
        inputFname.classList.remove("green");
        alert("Invalid, type firstname again");
    // als het goed ingevuld is word deze uitgevoerd
    } else {
        inputFname.classList.add("green");
    }
});

// lastname inputfield
sendBtn.addEventListener("click", function(){
    // als field leeg/fout is word onderstaande code's uitgevoerd
    if (!inputLname.checkValidity() && inputLnameValue == "") {
        inputLname.classList.add("red");
        inputLname.classList.remove("green");
        alert("Invalid, type lastname again");
    // als het goed ingevuld is word deze uitgevoerd
    } else {
        inputLname.classList.add("green");
    }
});

sendBtn.addEventListener("click", function(){
    // als field leeg/fout is word onderstaande code's uitgevoerd
    if (!inputEmail.checkValidity() && inputEmailValue == "") {
        inputEmail.classList.add("red");
        inputEmail.classList.remove("green");
        alert("Invalid, type email again");
    // als het goed ingevuld is word deze uitgevoerd
    } else {
        inputEmail.classList.add("green");
        inputEmail.classList.remove("red");
    }
});

sendBtn.addEventListener("click", function(){
    // als field leeg/fout is word onderstaande code's uitgevoerd
    if (!inputSubject.checkValidity() && inputSubjectValue == "") {
        inputSubject.classList.add("red");
        inputSubject.classList.remove("green");
        alert("Invalid, type subject again");
    // als het goed ingevuld is word deze uitgevoerd
    } else {
        inputSubject.classList.add("green");
        inputSubject.classList.remove("red");
    }
});

sendBtn.addEventListener("click", function(){
    if (inputFname.checkValidity() && inputLname.checkValidity() && inputEmail.checkValidity() && inputSubject.checkValidity()) {
        Swal.fire({
            title: `Bedankt ${inputFname.value}!`,
            text: "Wij hebben jouw bericht ontvangen!",
            icon: "success"
          });
    }
});

