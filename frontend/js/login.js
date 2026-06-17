const API_BASE_URL =
"https://ai-email-generator-syc6.onrender.com/api";

if(
    localStorage.getItem(
        "signup_success"
    )
){

    showToast(
        "Account Created ✓"
    );

    localStorage.removeItem(
        "signup_success"
    );

}

const loginForm =
document.getElementById(
    "loginForm"
);

if(loginForm){

    loginForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const email =
            document.getElementById(
                "email"
            ).value.trim();

            const password =
            document.getElementById(
                "password"
            ).value;

            try{

                const response =
                await fetch(
                    `${API_BASE_URL}/auth/login`,
                    {
                        method:"POST",

                        headers:{
                            "Content-Type":
                            "application/json"
                        },

                        body:JSON.stringify(
                            {
                                email,
                                password
                            }
                        )
                    }
                );

                const data =
                await response.json();

                if(response.ok){

                    localStorage.setItem(
                        "access_token",
                        data.access_token
                    );

                    localStorage.setItem(
                        "user_id",
                        data.user_id
                    );

                    localStorage.setItem(
                        "user_email",
                        data.email
                    );

                    showToast(
                        "Login Successful ✓"
                    );

                    setTimeout(
                        () => {

                            window.location.href =
                            "dashboard.html";

                        },
                        1000
                    );

                }
                else{

                    showToast(
                        data.error ||
                        "Login Failed",
                        "error"
                    );

                }

            }
            catch(error){

                console.error(
                    error
                );

                showToast(
                    "Unable To Login",
                    "error"
                );

            }

        }
    );

}