import { BaseComponent } from './Base.js';

document.addEventListener("DOMContentLoaded", () => {
    // Handle password visibility toggle
    const pwdTogglers = document.querySelectorAll('[data-win-toggle="password"]');
    pwdTogglers.forEach(toggler => {
        const inputPwdID = toggler.getAttribute("data-win-target");
        const inputPwd = new BaseComponent(document.querySelector(inputPwdID));

        toggler.addEventListener("click", () => {
            const currentType = inputPwd.getProperty('type');
            inputPwd.setProperty('type', currentType === "password" ? "text" : "password");
        });
    });

    // Handle text clearing
    const txtClearers = document.querySelectorAll('[data-win-clear="text"]');
    txtClearers.forEach(clearer => {
        const inputTxtID = clearer.getAttribute("data-win-target");
        const inputTxt = new BaseComponent(document.querySelector(inputTxtID));

        inputTxt.addEventListener("input", () => {
            const isNotEmpty = inputTxt.getProperty('value') !== "";
            clearer.style.visibility = isNotEmpty ? "visible" : "hidden";
        });

        clearer.addEventListener("click", () => {
            inputTxt.setProperty('value', '');
            inputTxt.element.focus();
            clearer.style.visibility = "hidden";
        });
    });
});
