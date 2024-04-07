import LoginApi from "./api/LoginApi.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const account = localStorage.getItem("account");

if (account)
    LoginApi(
        JSON.parse(account),
        "https://recruitment-api.pyt1.stg.jmr.pl/login"
    );

$("#ButtonLogin").addEventListener("click", function (e) {
    const account = {
        login: $("#email").value,
        password: $("#password").value,
    };
    LoginApi(account, "https://recruitment-api.pyt1.stg.jmr.pl/login");
    
});
