const API_BASE_URL =
"https://ai-email-generator-syc6.onrender.com/api";

const signupForm =
document.getElementById(
    "signupForm"
);

if(signupForm){

    signupForm.addEventListener(
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
                    `${API_BASE_URL}/auth/signup`,
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
                        "signup_success",
                        "true"
                    );

                    window.location.href =
                    "login.html";

                }
                else{

                    showToast(
                        "Signup Failed",
                        "error"
                    );

                    console.log(
                        data
                    );

                }

            }
            catch(error){

                console.error(
                    error
                );

                showToast(
                    "Unable To Signup",
                    "error"
                );

            }

        }
    );

}