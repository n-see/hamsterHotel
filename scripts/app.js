let clickMe = document.getElementById("clickMe");
let checkIn = document.getElementById("checkIn");
let checkOut = document.getElementById("checkOut");
let guest = document.getElementById("guest");
let roomType = document.getElementById("roomType");

clickMe.addEventListener("click", function() {
    alert("Access Denied (•ˋ _ ˊ•)");
    checkIn.innerText = " ";
    checkOut.innerText = " ";
    guest.innerText = " ";
    roomType.innerText = " ";
});

console.log(checkIn, checkOut, guest, roomType);