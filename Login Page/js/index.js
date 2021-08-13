document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");
    const forgotPasswordForm = document.querySelector("#forgotPassword")

    document.querySelector("#linkCreateAccount").addEventListener("click", () => {
        loginForm.classList.add("form-hidden");
        forgotPasswordForm.classList.add("form-hidden");
        signupForm.classList.remove("form-hidden");
    });
    
    document.querySelector("#linkLogin").addEventListener("click", () => {
        loginForm.classList.remove("form-hidden");
        signupForm.classList.add("form-hidden");
        forgotPasswordForm.classList.add("form-hidden");
    });
    
    document.querySelector("#linkForgotPassword").addEventListener("click", () => {
        loginForm.classList.add("form-hidden");
        signupForm.classList.add("form-hidden");
        forgotPasswordForm.classList.remove("form-hidden");
    })
    
    document.querySelector("#linkPrevious").addEventListener("click", () => {
        signupForm.classList.add("form-hidden");
        forgotPasswordForm.classList.add("form-hidden");
        loginForm.classList.remove("form-hidden");
    })
});

document.querySelectorAll(".inputForm").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "log-username" && e.target.value.length > 0 && e.target.value.length < 8) {
            setInputError(inputElement, "Username must be at least 8 characters in length");
        }
    })
})