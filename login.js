function loginUser(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(username === "" || password === ""){
alert("Please enter username and password");
return;
}

/* حفظ المستخدم الصحيح */
localStorage.setItem("mathsphereUser", username);

/* انتقال */
window.location.href="index.html";
}
