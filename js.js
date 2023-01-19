var correctKey = "dai2k4bn";
var formShown = false;
document.getElementById("avatar").addEventListener("click", function() {
    if (formShown) {
        document.getElementById("key-form").style.display = "none";
            formShown = false;
    } else {
        document.getElementById("key-form").style.display = "block";
            formShown = true;
    }
    });
    document.getElementById("key-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var key = document.getElementById("key-input").value;
        if (key === correctKey) {
            window.location.href = "https://drive.google.com/drive/folders/1AkG7LJMA-9mC_nqlXQSZTWz84t4wC6iw?usp=sharing";
        } else {
            alert("Wrong key. Please try again.");
        }
    });