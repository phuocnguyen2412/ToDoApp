import LoginApi from "./api/Account/LoginApi.js";
import register from "./api/Account/Register.js";
import Register from "./api/Account/Register.js";
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
$("#ButtonRegister").addEventListener("click", function (e) {
    const account = {
        login: $("#EmailRegister").value,
        password: $("#PasswordRegister").value,
    };
    register(account);
});
