function generateResume() {
  let name = document.getElementById("name").value;
  let surName = document.getElementById("surname").value;
  let aboutMe = document.getElementById("form-about-me").value;
  let about = document.getElementById("about-me").value;
  let number = document.getElementById("input-number").value;
  let mail = document.getElementById("input-mail").value;

  const resumeHTML = `
  <h1>${name + " " + surName}</h1> 
  <p class="el-post">${mail}</p>
  <p class="mob-number">${number}</p>

  <p class="about">${aboutMe}</p> 
  
  





`;
  resume.innerHTML = resumeHTML;
}

function validateEmail() {
  var email = document.getElementById("email");
  if (checkEmail(email.value)) {
    email.classList.remove("invalid");
    email.classList.add("valid");
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
  }
}

function checkEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@redberry.ge$/;
  return re.test(String(email).toLowerCase());
}
