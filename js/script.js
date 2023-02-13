//GENERATE EDUCATION

function generatePersonalInfo() {
  let name = document.getElementById("name");
  let surName = document.getElementById("surname");
  let aboutMe = document.getElementById("form-about-me");
  let number = document.getElementById("input-number");
  let mail = document.getElementById("email");
  let resume = document.getElementById("resume");

  name.addEventListener("input", function () {
    const resumeHTML = `
      <h1>${name.value + " " + surName.value}</h1> 
      <p class="el-post">${mail.value}</p>
      <p class="mob-number">${number.value}</p>

      <p class="about">${aboutMe.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });

  surName.addEventListener("input", function () {
    const resumeHTML = `
      <h1>${name.value + " " + surName.value}</h1> 
      <p class="el-post">${mail.value}</p>
      <p class="mob-number">${number.value}</p>

      <p class="about">${aboutMe.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });

  aboutMe.addEventListener("input", function () {
    const resumeHTML = `
      <h1>${name.value + " " + surName.value}</h1> 
      <p class="el-post">${mail.value}</p>
      <p class="mob-number">${number.value}</p>

      <p class="about">${aboutMe.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });

  number.addEventListener("input", function () {
    const resumeHTML = `
      <h1>${name.value + " " + surName.value}</h1> 
      <p class="el-post">${mail.value}</p>
      <p class="mob-number">${number.value}</p>

      <p class="about">${aboutMe.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });

  mail.addEventListener("input", function () {
    const resumeHTML = `
      <h1>${name.value + " " + surName.value}</h1> 
      <p class="el-post">${mail.value}</p>
      <p class="mob-number">${number.value}</p>

      <p class="about">${aboutMe.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });
}

window.addEventListener("load", function () {
  generatePersonalInfo();
});

//GENERATE EXPERIENCE

function generateExperience() {
  let position = document.getElementById("position");
  let employer = document.getElementById("employer");
  let startDate = document.getElementById("start");
  let endDate = document.getElementById("end");
  let description = document.getElementById("form-description");

  position.addEventListener("input", function () {
    const resumeHTML = `
      <p class="positionj">${position.value}</p> 
      <p class="employerj">${employer.value}</p>
      <p class="strtenddatej">${startDate.value + " " + endDate.value}</p>
      <p class="descriptionj">${description.value}</p>  
    `;
    resume.innerHTML = resumeHTML;
  });
  employer.addEventListener("input", function () {
    const resumeHTML = `
      <p class="positionj">${position.value}</p> 
      <p class="employerj">${employer.value}</p> 
      <p class="strtenddatej">${startDate.value + " " + endDate.value}</p>
      <p class="descriptionj">${description.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });
  startDate.addEventListener("input", function () {
    const resumeHTML = `
      <p class="positionj">${position.value}</p> 
      <p class="employerj">${employer.value}</p> 
      <p class="strtenddatej">${startDate.value + " " + endDate.value}</p>
      <p class="descriptionj">${description.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });
  endDate.addEventListener("input", function () {
    const resumeHTML = `
      <p class="positionj">${position.value}</p> 
      <p class="employerj">${employer.value}</p> 
      <p class="strtenddatej" >${startDate.value + " " + endDate.value}</p>
      <p class="descriptionj" >${description.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });
  description.addEventListener("input", function () {
    const resumeHTML = `
      <p class="positionj">${position.value}</p> 
      <p class="employerj">${employer.value}</p> 
      <p class="strtenddatej >${startDate.value + " " + endDate.value}</p>
      <p class="descriptionj">${description.value}</p> 
    `;
    resume.innerHTML = resumeHTML;
  });
}

window.addEventListener("load", function () {
  generateExperience();
});

//GENERATE EDUCATION

function generateEducation() {
  let collage = document.getElementById("collage");
  // let degree = document.getElementById("degree");
  let endDate = document.getElementById("end-date");
  let description = document.getElementById("form-description");

  collage.addEventListener("input", function () {
    const resumeHTML = `
      <p">${collage.value}</p> 

      <p>${endDate.value + " " + endDate.value}</p>
      <p>${description.value}</p>  
    `;
    resume.innerHTML = resumeHTML;
  });
  // degree.addEventListener("input", function () {
  //   const resumeHTML = `
  //   <p ">${collage.value}</p>

  //   <p>${endDate.value}</p>
  //   <p>${description.value}</p>
  // `;
  //   resume.innerHTML = resumeHTML;
  // });
  endDate.addEventListener("input", function () {
    const resumeHTML = `
    <p ">${collage.value}</p> 

    <p>${endDate.value}</p>
    <p>${description.value}</p>  
  `;
    resume.innerHTML = resumeHTML;
  });
  description.addEventListener("input", function () {
    const resumeHTML = `
    <p ">${collage.value}</p> 
   
    <p>${endDate.value}</p>
    <p>${description.value}</p>  
  `;
    resume.innerHTML = resumeHTML;
  });
}

window.addEventListener("load", function () {
  generateEducation();
});

//Email Validation Function

function validateEmail() {
  var email = document.getElementById("email");

  email.addEventListener("input", function () {
    if (checkEmail(email.value)) {
      email.classList.remove("invalid");
      email.classList.add("valid");
    } else {
      email.classList.remove("valid");
      email.classList.add("invalid");
    }
  });
}

window.onload = function () {
  validateEmail();
};

function checkEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@redberry.ge$/;
  return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form");
const input = document.getElementById("form-about-me");

form.addEventListener("input", function () {
  let isValid = false;
  let inputValue = input.value;

  // Check if the input value contains at least two Georgian letters
  let GeorgianLetters = /[ა-ჰ]/g;
  let GeorgianLettersMatch = inputValue.match(GeorgianLetters);
  if (GeorgianLettersMatch && GeorgianLettersMatch.length >= 2) {
    isValid = true;
  }

  // Change the border color based on the validation result
  if (isValid) {
    input.style.borderColor = "#98E37E";
    console.log(true);
  } else {
    console.log(false);
    input.style.borderColor = "#bcbcbc";
  }
});
