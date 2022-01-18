import { loadStartFunc, loadAboutFunc, loadContactFunc } from "./loadPage";
import "./style.css";



//loads the default Start function
loadStartFunc();


//buttons
const StartBtn = document.querySelector("#start");
StartBtn.addEventListener('click', () => {
    loadStartFunc();
});

const AboutBtn = document.querySelector("#about");
AboutBtn.addEventListener('click', () => {
    loadAboutFunc();
});

const ContactBtn = document.querySelector("#contact");
ContactBtn.addEventListener('click', () => {
    loadContactFunc();
});

