document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const accountNumber = document.getElementById("account-number").value;
    const password = document.getElementById("password").value;

    console.log('Account Number:', accountNumber, 'Password:', password); // Debugging

    if (accountNumber === "12345678" && password === "password") {
        // Redirect to dashboard.html, considering the folder structure
        window.location.href = "pages/dashboard.html";
    } else {
        // Show error message
        document.getElementById("errorMessage").innerText = "Invalid account number or password!";
    }
});
