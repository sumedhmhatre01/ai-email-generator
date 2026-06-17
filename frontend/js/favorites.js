async function addToFavorites(emailId) {

    try {

        const response =
        await fetch(
            `http://127.0.0.1:5000/api/email/favorite/${emailId}`,
            {
                method: "PUT"
            }
        );

        if(response.ok){

            showToast(
                "Added to Favorites ✓"
            );

        }

    }
    catch(error){

        console.error(error);

        showToast(
            "Failed to add favorite",
            "error"
        );

    }

}


async function loadFavorites() {

    try {

        const userId =
        localStorage.getItem(
            "user_id"
        ) || "demo-user";

        const response =
        await fetch(
            `http://127.0.0.1:5000/api/email/favorites/${userId}`
        );

        const favorites =
        await response.json();

        const favoriteList =
        document.getElementById(
            "favoriteList"
        );

        favoriteList.innerHTML = "";

        if(favorites.length === 0){

            favoriteList.innerHTML =
            `
            <div class="history-item">
                No favorite emails found.
            </div>
            `;

            return;
        }

        favorites.forEach(email => {

            const item =
            document.createElement(
                "div"
            );

            item.className =
            "history-item";

            item.innerHTML =
            `
            <h4>
                ⭐ ${email.subject || "No Subject"}
            </h4>

            <p>
                Tone:
                ${email.tone}
            </p>

            <p>
                Length:
                ${email.length}
            </p>

            <button
                class="view-favorite-btn"
                data-email="${encodeURIComponent(
                    email.email_body
                )}">
                View Email
            </button>
            `;

            favoriteList.appendChild(
                item
            );

        });

        attachFavoriteViewHandlers();

    }
    catch(error){

        console.error(error);

        showToast(
            "Failed to load favorites",
            "error"
        );

    }

}


function attachFavoriteViewHandlers(){

    const buttons =
    document.querySelectorAll(
        ".view-favorite-btn"
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