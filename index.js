let formm = document.getElementById("formm");

formm.addEventListener('submit', function(event) {
    event.preventDefault();
});

let submit_btn = document.getElementById("btn");

submit_btn.addEventListener('click', sendMail, false);

// emailjs.init(options);

//email object
function sendMail() {
    let email = {
        name: document.getElementById('name').value,
        tel: document.getElementById('number').value,
        message: document.getElementById('message').value 
    };

    const serviceID = "service_sz56y65";
    const templateID = "template_6g3ka5q";

    emailjs.send(serviceID,templateID,email)
    .then( res => {
        alert("Message sent successfully");
        document.getElementById('name').value = "";
        document.getElementById('number').value = "";
        document.getElementById('message').value = " ";
    }).catch(err=>console.log(err))
};

//for hire me
let Hire = document.getElementById("hire");
Hire.addEventListener("click", function(){
    alert("Use my Contact Form");
})

//greet
let today = new Date();
let hoursNow = today.getHours();
let greeting;
if(hoursNow <= 11){
    greeting ="Good Morning";
} else if(hoursNow <= 16){
    greeting ="Good Afternoon";
}else if(hoursNow <= 22){
    greeting ="Good Evening";
}else{
    greeting ="Good night";
}
alert(greeting);


