function Confirm() {
    let name = document.getElementById("name").value.trim();
    let db = document.getElementById("db").value.trim();
    let id = document.getElementById("CCCD").value.trim();
    let Address = document.getElementById("Address").value.trim();

    if (name === "" || db === "" || id === "" || Address ==="") {
        alert("Please fill in all fields.");
        return false;
    }

    if(name.length > 100){
        alert("Message must be 100 characters or less");
        return false;
    }
    if(id.length > 12){
        alert("Invalid CCCD ");
        return false;
    }

    alert("Your message has been sent successfully!");
}

