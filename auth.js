function signup(){

  const email =
    document.getElementById("signupEmail").value;

  const password =
    document.getElementById("signupPassword").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Signup Successful");

  window.location.href = "login.html";
}

function login(){

  const email =
    document.getElementById("loginEmail").value;

  const password =
    document.getElementById("loginPassword").value;

  const storedEmail =
    localStorage.getItem("email");

  const storedPassword =
    localStorage.getItem("password");

  if(
    email === storedEmail &&
    password === storedPassword
  ){
    alert("Login Successful");

    window.location.href = "index.html";
  }
  else{
    alert("Invalid Credentials");
  }

}
