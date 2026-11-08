const registerForm = document.getElementById("registerForm");
if (registerForm){
    registerForm.addEventListener("submit", function(event){
        event.preventDefault();
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const regno = document.getElementById("regno").value;
        const password = document.getElementById("password").value;
        if (password.length < 8){
            alert("Password must be atlest 8 characters long.");
            return;
        }
        // Here is where i will be temporarily storing my data to the server for processing
        localStorage.setItem("student name", fullname);
        localStorage.setItem("student email", email);
        localStorage.setItem("student regno", regno);
        localStorage.setItem("student password", password);
        alert("Account created successfully!");
        window.location.href = "login.html";
         // it will redirect me to the login page after successful registration
    });
}const loginForm = document.getElementById("loginForm");
if (loginForm){
    loginForm.addEventListener("submit", function
        (event){
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const storedEmail = localStorage.getItem("student email"); 
             const storedPassword = localStorage.getItem("student password");
             if (email === storedEmail && password === storedPassword){
                alert("Login successful!");
                window.location.href = "home.html";  // here it will redirect me to home page after successful login
             } else{
                alert("Invalid email or password. Please try again.");
             }
            })
        }