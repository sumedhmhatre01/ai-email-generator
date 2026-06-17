async function loadHistory() {

    try {

        const userId =
        localStorage.getItem(
            "user_id"
        ) || "demo-user";

        const response =
        await fetch(
            `https://ai-email-generator-syc6.onrender.com/api/email/history/${userId}`
        );

        const history =
        await response.json();

        const historyList =
        document.getElementById(
            "historyList"
        );

        historyList.innerHTML = "";

        if(history.length === 0){

            historyList.innerHTML =
            `
            <div class="history-item">
                No emails found.
            </div>
            `;

            return;
        }

        history.forEach(email => {

            const item =
            document.createElement(
                "div"
            );

            item.className =
            "history-item";

            item.innerHTML =
            `
            <h4>
                ${email.subject || "No Subject"}
            </h4>

            <p>
                Tone:
                ${email.tone}
            </p>

            <p>
                Length:
                ${email.length}
            </p>

            <p>
                ${new Date(
                    email.created_at
                ).toLocaleString(
                    "en-IN",
                    {
                        dateStyle: "medium",
                        timeStyle: "short"
                    }
                )}
            </p>

            <div class="button-group">

                <button
                    class="view-email-btn"
                    data-email="${encodeURIComponent(
                        email.email_body
                    )}">
                    View Email
                </button>

                <button
                    class="favorite-btn"
                    data-id="${email.id}">
                    ⭐ Favorite
                </button>

                <button
                    class="delete-btn"
                    data-id="${email.id}">
                    🗑 Delete
                </button>

            </div>
            `;

            historyList.appendChild(
                item
            );

        });

        attachViewHandlers();

        attachFavoriteHandlers();

        attachDeleteHandlers();

        initializeHistorySearch();

    }
    catch(error){

        console.error(
            error
        );

        showToast(
            "Failed to load history",
            "error"
        );

    }

}


function attachViewHandlers(){

    const buttons =
    document.querySelectorAll(
        ".view-email-btn"
    );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const email =
                decodeURIComponent(
                    button.dataset.email
                );

                document.getElementById(
                    "generatedEmail"
                ).value = email;

                document
                .querySelectorAll(
                    ".tab-content"
                )
                .forEach(tab => {

                    tab.classList.remove(
                        "active"
                    );

                });

                document
                .getElementById(
                    "generator"
                )
                .classList.add(
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

}


function attachFavoriteHandlers(){

    const buttons =
    document.querySelectorAll(
        ".favorite-btn"
    );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const emailId =
                button.dataset.id;

                try {

                    const response =
                    await fetch(
                        `https://ai-email-generator-syc6.onrender.com/api/email/favorite/${emailId}`,
                        {
                            method: "PUT"
                        }
                    );

                    if(response.ok){

                        button.textContent =
                        "⭐ Added";

                        button.disabled =
                        true;

                        showToast(
                            "Added to Favorites ✓"
                        );

                    }

                }
                catch(error){

                    console.error(
                        error
                    );

                    showToast(
                        "Failed to add favorite",
                        "error"
                    );

                }

            }
        );

    });

}


function attachDeleteHandlers(){

    const buttons =
    document.querySelectorAll(
        ".delete-btn"
    );

    const deleteModal =
    document.getElementById(
        "deleteModal"
    );

    const confirmDeleteBtn =
    document.getElementById(
        "confirmDeleteBtn"
    );

    const cancelDeleteBtn =
    document.getElementById(
        "cancelDeleteBtn"
    );

    let selectedEmailId =
    null;

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedEmailId =
                button.dataset.id;

                deleteModal.classList.remove(
                    "hidden"
                );

            }
        );

    });

    cancelDeleteBtn.onclick =
    () => {

        deleteModal.classList.add(
            "hidden"
        );

        selectedEmailId =
        null;

    };

    confirmDeleteBtn.onclick =
    async () => {

        if(
            !selectedEmailId
        ){
            return;
        }

        try {

            const response =
            await fetch(
                `https://ai-email-generator-syc6.onrender.com/api/email/delete/${selectedEmailId}`,
                {
                    method:
                    "DELETE"
                }
            );

            if(response.ok){

                deleteModal.classList.add(
                    "hidden"
                );

                showToast(
                    "Email Deleted ✓"
                );

                loadHistory();

            }

        }
        catch(error){

            console.error(
                error
            );

            showToast(
                "Delete Failed",
                "error"
            );

        }

    };

}


function initializeHistorySearch(){

    const searchInput =
    document.getElementById(
        "historySearch"
    );

    if(!searchInput){
        return;
    }

    searchInput.addEventListener(
        "input",
        () => {

            const searchTerm =
            searchInput.value
            .toLowerCase();

            const historyItems =
            document.querySelectorAll(
                ".history-item"
            );

            historyItems.forEach(item => {

                const text =
                item.textContent
                .toLowerCase();

                if(
                    text.includes(
                        searchTerm
                    )
                ){

                    item.style.display =
                    "block";

                }
                else{

                    item.style.display =
                    "none";

                }

            });

        }
    );

}