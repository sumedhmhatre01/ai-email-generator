async function loadAnalytics() {

    try {

        const userId =
        localStorage.getItem(
            "user_id"
        ) || "demo-user";

        const response =
        await fetch(
            `http://127.0.0.1:5000/api/email/analytics/${userId}`
        );

        const emails =
        await response.json();

        // Total Emails

        document.getElementById(
            "totalEmails"
        ).textContent =
        emails.length;

        // Favorites Count

        const favorites =
        emails.filter(
            email =>
            email.is_favorite === true
        );

        document.getElementById(
            "favoriteCount"
        ).textContent =
        favorites.length;

        // Most Used Tone

        const toneCounts = {};

        emails.forEach(email => {

            const tone =
            email.tone;

            toneCounts[tone] =
            (toneCounts[tone] || 0) + 1;

        });

        let mostUsedTone = "-";
        let maxCount = 0;

        Object.entries(
            toneCounts
        ).forEach(
            ([tone, count]) => {

                if(
                    count > maxCount
                ){

                    maxCount =
                    count;

                    mostUsedTone =
                    tone;

                }

            }
        );

        document.getElementById(
            "mostUsedTone"
        ).textContent =
        mostUsedTone;

        // Recent Activity

        if(
            emails.length > 0
        ){

            document.getElementById(
                "recentActivity"
            ).textContent =
            "Last Email Generated";

        }
        else{

            document.getElementById(
                "recentActivity"
            ).textContent =
            "No Activity";

        }

    }
    catch(error){

        console.error(
            error
        );

    }

}