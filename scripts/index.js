import { profiles } from "../data/index.js";

const container = document.getElementById('cards-container');

profiles
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(profile => {
        const { gender, name, jobTitle, linkedInUserName, gitHubUserName } = profile;
        const imgSrc = gender == "male" ? "man.png" : "woman.png";

        const card = `
        <div class="flex flex-col place-items-center w-[250px] gap-2 bg-white card shadow-xl p-4 rounded">
            <img class="w-4/5" src="./assets/images/${imgSrc}" />
            <h3 class="text-center">${name}</h3>
            <p class="m-0 text-[#00000099]">${jobTitle}</p>
            <div class="flex gap-2">
                <a href="https://www.linkedin.com/in/${linkedInUserName}" target="_blank">
                    <img class="hover:scale-110 cursor-pointer transition-all w-[50px]" src="./assets/icons/linkedin.png" />
                </a>
                <a href="https://github.com/${gitHubUserName}" target="_blank">
                    <img class="hover:scale-110 cursor-pointer transition-all w-[50px]" src="./assets/icons/github.png" />
                </a>
            </div>
        </div>
    `;
        container.innerHTML += card;
    });