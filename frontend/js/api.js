const API_BASE_URL =
"https://ai-email-generator-syc6.onrender.com/api";

async function generateEmail() {

    const prompt =
    document.getElementById(
        "prompt"
    ).value.trim();

    const tone =
    document.getElementById(
        "tone"
    ).value;

    const length =
    document.getElementById(
        "length"
    ).value;

    if(!prompt){

        showToast(
            "Please enter a prompt",
            "error"
        );

        return;
    }

    const generateBtn =
    document.getElementById(
        "generateBtn"
    );

    const typingLoader =
    document.getElementById(
        "typingLoader"
    );

    const output =
    document.getElementById(
        "generatedEmail"
    );

    try{

        generateBtn.disabled =
        true;

        generateBtn.textContent =
        "Generating...";

        typingLoader.classList.remove(
            "hidden"
        );

        const response =
        await fetch(
            `${API_BASE_URL}/email/generate`,
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify(
                    {
                        prompt,
                        tone,
                        length,
                        user_id:
                        localStorage.getItem(
                            "user_id"
                        ) || "demo-user"
                    }
                )
            }
        );

        const data =
        await response.json();

        output.value =
        data.generated_email;

        showToast(
            "Email Generated ✓"
        );

    }
    catch(error){

        console.error(
            error
        );

        showToast(
            "Email generation failed",
            "error"
        );

    }
    finally{

        generateBtn.disabled =
        false;

        generateBtn.textContent =
        "Generate";

        typingLoader.classList.add(
            "hidden"
        );

    }

}