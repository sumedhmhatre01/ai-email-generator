const userId =
localStorage.getItem(
    "user_id"
);

const accessToken =
localStorage.getItem(
    "access_token"
);

if(
    !userId ||
    !accessToken
){

    window.location.href =
    "login.html";

}