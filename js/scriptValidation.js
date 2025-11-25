
function validate(){

    event.preventDefault();

    let email = document.getElementById("input").value;
    let message = document.getElementById("messege").value;

    let emailP = /^[^@]+@[^@]+\.[^@]+$/;

    console.log(email);
    console.log(message);

    if (email === "") {
        alert("Email must be filled out");
        event.preventDefault(); 
        return;
    }

    else if (!emailP.test(email)) {
        alert("Please enter a valid email address");
        event.preventDefault();
        return;
    }

    if (message === "") {
        alert("Message must be filled out");
        event.preventDefault();
        return;
    } 

    else if (message.length > 256) {
        alert("Message cannot exceed 256 characters");
        event.preventDefault();
        return;
    }

    alert("Messege sent, we will contact you shortly")

    document.getElementById("input").value = "";
    document.getElementById("messege").value = "";
};