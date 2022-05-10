console.log('Here\'s a hidden message');
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById("date");
selectElement.innerHTML = formatDate;


function aboutus() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function acc() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}