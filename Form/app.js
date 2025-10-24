let myForm = document.loginform;
let txtUser = myForm.txtUser;
let txtPass = myForm.txtPass;
let btnSubmit = myForm.btnSubmit;

btnSubmit.addEventListener("click", () => {
  if (txtUser.value === "") {
    alert("Username is required");
    return false;
  } else if (txtPass.value === "") {
    alert("Password is required");
    return false;
  } else {
    alert("Form Submitted Successfully");
    return true;
  }
});

