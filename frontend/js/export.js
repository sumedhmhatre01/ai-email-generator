const pdfBtn =
document.getElementById(
    "pdfBtn"
);

const txtBtn =
document.getElementById(
    "txtBtn"
);

const generatedEmailField =
document.getElementById(
    "generatedEmail"
);

// PDF Export

if(pdfBtn){

    pdfBtn.addEventListener(
        "click",
        async () => {

            const content =
            generatedEmailField.value;

            if(!content){

                alert(
                    "Generate an email first."
                );

                return;
            }

            try{

                const response =
                await fetch(
                    "https://ai-email-generator-syc6.onrender.com/api/export/pdf",
                    {
                        method:"POST",

                        headers:{
                            "Content-Type":
                            "application/json"
                        },

                        body:JSON.stringify({
                            content
                        })
                    }
                );

                const blob =
                await response.blob();

                const url =
                window.URL.createObjectURL(
                    blob
                );

                const a =
                document.createElement(
                    "a"
                );

                a.href = url;

                a.download =
                "generated_email.pdf";

                document.body.appendChild(
                    a
                );

                a.click();

                a.remove();

            }
            catch(error){

                console.error(error);

                alert(
                    "PDF export failed."
                );

            }

        }
    );

}

// TXT Export

if(txtBtn){

    txtBtn.addEventListener(
        "click",
        () => {

            const content =
            generatedEmailField.value;

            if(!content){

                alert(
                    "Generate an email first."
                );

                return;
            }

            const blob =
            new Blob(
                [content],
                {
                    type:"text/plain"
                }
            );

            const url =
            URL.createObjectURL(
                blob
            );

            const a =
            document.createElement(
                "a"
            );

            a.href = url;

            a.download =
            "generated_email.txt";

            document.body.appendChild(
                a
            );

            a.click();

            a.remove();

        }
    );

}