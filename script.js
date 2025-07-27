//  ------------------------LOGIN & SIGN UP FORM START----------------------------
//  Selecting DOM elements
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");



// ------BLUR FORM START-----
// Function to add blur class to specified elements
function addBlurToElementsf() {
  const elementsToBlurf = [
    document.querySelector('.header'),
    document.querySelector('.index'),
    document.querySelector('.sections-container'),
    document.querySelector('.footer')
  ];

  elementsToBlurf.forEach(element => {
    element.classList.add('blurred_form');
  });
}

// Function to remove blur class from specified elements
function removeBlurFromElementsf() {
  const elementsToBlurf = [
    document.querySelector('.header'),
    document.querySelector('.index'),
    document.querySelector('.sections-container'),
    document.querySelector('.footer')
  ];

  elementsToBlurf.forEach(element => {
    element.classList.remove('blurred_form');
  });
}

// Function to blur elements when login button is clicked
function blurFormOnClick() {
  addBlurToElementsf();
}

// Function to remove blur when login form is closed
function removeBlurOnClick() {
  removeBlurFromElementsf();
}
// ------BLUR FORM END-----


//   Login form open and close
formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
  blurFormOnClick(); 
});

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  removeBlurOnClick(); 
});


//  Password visibility
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

//   Swiching sign up form
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
//   Swiching login form
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// Switching to signup form when "Forgot password?" is clicked
document.querySelector('.forgot_pw').addEventListener('click', function (e) {
  e.preventDefault(); 
  formContainer.classList.add('active');
  alert("Sign up again!")
});

//  ------------------------LOGIN & SIGN UP FORM END----------------------------








//  ------------------------LOCAL DATABASE START----------------------------

//  ------------------------SIGN UP FORM SUBMISSION----------------------------
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  // Extract user data from the form
  const userData = {
    name: form.querySelectorAll('input')[0].value,
    phone: form.querySelectorAll('input')[1].value,
    email: form.querySelectorAll('input')[2].value,
    password: form.querySelectorAll('input')[3].value
  };

  // Save user data in localStorage
  localStorage.setItem('user', JSON.stringify(userData));
  // Hide the signup form
  formContainer.classList.remove('active'); 
});

//  ------------------------LOGIN FORM SUBMISSION----------------------------
document.querySelector('#login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Extract email and password from the login form
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('user'));

  // Email and password validation
  if (email !== userData.email && password !== userData.password) {
    alert('Invalid email or password!');
  } else if (email !== userData.email) {
    alert('Invalid email');
  } else if (password !== userData.password) {
    alert('Invalid password');
  } else {
    // Hide the login form
    home.classList.remove('show'); 
    location.reload();
  }
});

//  ------------------------LOCAL DATABASE END----------------------------





//  ------------------------SHOW THE USER NAME START----------------------------
//  Retrieve user's name from localStorage
function getUserName() {
  const userData = JSON.parse(localStorage.getItem('user'));
  if (userData && userData.name) {
    return userData.name;
  } else {
    return null;
  }
}

// Show user's name on button if logged in
const userName = getUserName();
if (userName) {
  document.getElementById('user_info').textContent = userName;
}
//  ------------------------SHOW THE USER NAME END----------------------------




//  ------------------------LOGIN & USER NAME & LOGOUT BUTTON START----------------------------
// Retrieve user name and get button refference
const userrName = getUserName();
const loginnBtn = document.getElementById('form-open');
const userBtn = document.getElementById('user_info');
const logoutBtn = document.getElementById('logout');

// Check user is logged in or not then button visible or hide
if (userrName) {
  loginnBtn.style.display = 'none';
  userBtn.style.display = 'block';
  logoutBtn.style.display = 'block';
} else {
  loginnBtn.style.display = 'block';
  userBtn.style.display = 'none';
  logoutBtn.style.display = 'none';
}


//User infomation function
document.getElementById('user_info').addEventListener('click', function () {
  // Function to display user information
  function displayUserInfo() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      document.getElementById('user-name').textContent = userData.name;
      document.getElementById('user-phone').textContent = userData.phone;
      document.getElementById('user-email').textContent = userData.email;
    }
    // Show the user information
    document.querySelector('.userInfo').style.display = 'block';
  }


// ------BLUR USER INFO START-----
// Function to add blur class to specified elements
function addBlurToElements() {
  const elementsToBlur = [
    document.querySelector('.header'),
    document.querySelector('.index'),
    document.querySelector('.sections-container'),
    document.querySelector('.footer')
  ];

  elementsToBlur.forEach(element => {
    element.classList.add('blurred_userInfo');
  });
}

// Function to remove blur class from specified elements
function removeBlurFromElements() {
  const elementsToBlur = [
    document.querySelector('.header'),
    document.querySelector('.index'),
    document.querySelector('.sections-container'),
    document.querySelector('.footer')
  ];

  elementsToBlur.forEach(element => {
    element.classList.remove('blurred_userInfo');
  });
}
// ------BLUR USER INFO END-----


  // Call Display and blur function
  displayUserInfo();
  addBlurToElements();
  
  //OK button function
  document.getElementById('ok-btn').addEventListener('click', function () {
    // Hide user information and remove blur
    document.querySelector('.userInfo').style.display = 'none';
    removeBlurFromElements();
  });
});


// Logout function
document.getElementById('logout').addEventListener('click', function () {
  localStorage.removeItem('user');
  location.reload();
});

//  ------------------------LOGIN & USER NAME & LOGOUT BUTTON END----------------------------


