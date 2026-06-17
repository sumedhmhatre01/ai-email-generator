const templates = {

    "Job Application":
    "Write a professional job application email for a software developer position.",

    "Internship Application":
    "Write an internship application email for a software development internship position.",

    "Leave Request":
    "Write a professional leave request email to my manager requesting one day leave.",

    "Meeting Request":
    "Write a professional email requesting a meeting to discuss project requirements.",

    "Follow-up Email":
    "Write a follow-up email after a job interview expressing gratitude and continued interest.",

    "Sales Outreach":
    "Write a persuasive sales outreach email introducing our services to a potential client.",

    "Customer Support":
    "Write a customer support email responding to a customer issue and offering assistance.",

    "Business Proposal":
    "Write a professional business proposal email presenting our services to a company.",

    "Complaint Email":
    "Write a professional complaint email regarding poor service received.",

    "Thank You Email":
    "Write a thank-you email expressing appreciation after a meeting or interview."

};

const templateCards =
document.querySelectorAll(
    ".template-card"
);

const promptField =
document.getElementById(
    "prompt"
);

templateCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const templateName =
            card.textContent.trim();

            if(
                templates[templateName]
            ){

                promptField.value =
                templates[
                    templateName
                ];

            }

            const generatorTab =
            document.getElementById(
                "generator"
            );

            document
            .querySelectorAll(
                ".tab-content"
            )
            .forEach(tab => {

                tab.classList.remove(
                    "active"
                );

            });

            generatorTab.classList.add(
                "active"
            );

            document
            .querySelectorAll(
                ".sidebar-menu li"
            )
            .forEach(item => {

                item.classList.remove(
                    "active"
                );

                if(
                    item.dataset.tab ===
                    "generator"
                ){
                    item.classList.add(
                        "active"
                    );
                }

            });

        }
    );

});