// Sidebar Navigation

const menuItems =
document.querySelectorAll(
    ".sidebar-menu li"
);

const tabContents =
document.querySelectorAll(
    ".tab-content"
);

menuItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            menuItems.forEach(
                menu =>
                menu.classList.remove(
                    "active"
                )
            );

            item.classList.add(
                "active"
            );

            const tabName =
            item.dataset.tab;

            tabContents.forEach(
                tab => {

                    tab.classList.remove(
                        "active"
                    );

                    if(
                        tab.id === tabName
                    ){
                        tab.classList.add(
                            "active"
                        );
                    }

                }
            );

        }
    );

});


// Generate Email

const generateBtn =
document.getElementById(
    "generateBtn"
);

const typingLoader =
document.getElementById(
    "typingLoader"
);

const generatedEmail =
document.getElementById(
    "generatedEmail"
);

if(generateBtn){

    generateBtn.addEventListener(
        "click",
        generateEmail
    );

}


// Copy Email

const copyBtn =
document.getElementById(
    "copyBtn"
);

if(copyBtn){

    copyBtn.addEventListener(
        "click",
        () => {

            const content =
            generatedEmail.value;

            if(!content){

                showToast(
                    "No email to copy",
                    "error"
                );

                return;
            }

            navigator.clipboard.writeText(
                content
            );

            showToast(
                "Email Copied ✓"
            );

            copyBtn.textContent =
            "Copied ✓";

            setTimeout(
                () => {

                    copyBtn.textContent =
                    "Copy";

                },
                1500
            );

        }
    );

}


// Regenerate

const regenerateBtn =
document.getElementById(
    "regenerateBtn"
);

if(regenerateBtn){

    regenerateBtn.addEventListener(
        "click",
        () => {

            generateEmail();

        }
    );

}


// History Loader

const historyTab =
document.querySelector(
    '[data-tab="history"]'
);

if(historyTab){

    historyTab.addEventListener(
        "click",
        () => {

            loadHistory();

        }
    );

}


// Favorites Loader

const favoritesTab =
document.querySelector(
    '[data-tab="favorites"]'
);

if(favoritesTab){

    favoritesTab.addEventListener(
        "click",
        () => {

            loadFavorites();

        }
    );

}


// Logout

const logoutBtn =
document.getElementById(
    "logoutBtn"
);

if(logoutBtn){

    logoutBtn.addEventListener(
        "click",
        () => {

            localStorage.clear();

            sessionStorage.clear();

            window.location.href =
            "login.html";

        }
    );

}


// Dashboard Load

window.addEventListener(
    "load",
    () => {

        loadAnalytics();

    }
);