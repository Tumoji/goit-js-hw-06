const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  console.log(emailInput.value);

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be filled in");
  } else {
    alert("Formularul a fost salvat cu suuces");
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);
  }
  loginForm.reset();
});
