var selectedSeason = null;
var currentSeason = 1;
function selectSeason(element) {

    if(selectedSeason) {

        selectedSeason.style.background =
        "";

    }

    element.style.background =
    "#A8E63A";

    selectedSeason =
    element;

}
// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  let startX = 0, startY = 0;
  let offsetX = 0, offsetY = 0;

  const header = document.getElementById(element.id + "header");

  (header || element).addEventListener("mousedown", startDrag);

  function startDrag(e) {
    e.preventDefault();

    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);

    element.style.transition = "none";
    element.style.zIndex = 9999;
    element.classList.add("dragging-window");
  }

  function onDrag(e) {
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;

    startX = e.clientX;
    startY = e.clientY;

    const rect = element.getBoundingClientRect();

    element.style.left = rect.left + offsetX + "px";
    element.style.top = rect.top + offsetY + "px";
  }

  function stopDrag() {
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);

    element.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    element.classList.remove("dragging-window");
  }
}
var welcomeWindow =
    document.querySelector("#welcome");

var welcomeCloseButton =
    document.querySelector("#welcomeclose");

var welcomeOpenButton =
    document.querySelector("#welcomeopen");

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "block";
}

welcomeCloseButton.addEventListener("click", function() {
    closeWindow(welcomeWindow);
});

welcomeOpenButton.addEventListener("click", function() {
    openWindow(welcomeWindow);
});
welcomeOpenButton.addEventListener(
    "click",
    function() {
        openWindow(welcomeWindow);
    }
);

var scienceWindow =
document.querySelector("#science");

var scienceCloseButton =
document.querySelector("#scienceclose");

var scienceApp =
document.querySelector("#scienceApp");

var scienceApp =
document.querySelector("#scienceApp");
dragElement(
document.getElementById("science")
);
scienceApp.addEventListener(
"click",
function() {

    openWindow(scienceWindow);

}
);
scienceCloseButton.addEventListener(
"click",
function() {

    closeWindow(scienceWindow);

}
);
var drStoneWindow =
document.querySelector("#drstone");

var drStoneFullscreen =
document.querySelector(
"#drstonefullscreen"
);

var drStoneIcon =
document.querySelector("#drstoneIcon");

var drStoneCloseButton =
document.querySelector("#drstoneclose");
drStoneIcon.addEventListener(
    "click",
    function() {

        openWindow(
            drStoneWindow
        );

    }
);
drStoneCloseButton.addEventListener(
    "click",
    function() {

        closeWindow(
            drStoneWindow
        );

    }
);
dragElement(
document.getElementById("drstone")
);

async function fetchEpisodes(season) {

    if (season == 1) {

        return [
    { number: 1, title: "Stone World",url: "https://megaplay.buzz/stream/mal/38691/1/sub" },
    { number: 2, title: "King of the Stone World",url: "https://megaplay.buzz/stream/mal/38691/2/sub" },
    { number: 3, title: "Weapons of Science",url: "https://megaplay.buzz/stream/mal/38691/3/sub" },
    { number: 4, title: "Fire the Smoke Signal",url: "https://megaplay.buzz/stream/mal/38691/4/sub" },
    { number: 5, title: "Stone World the Beginning",url: "https://megaplay.buzz/stream/mal/38691/5/sub" },
    { number: 6, title: "Two Nations of the Stone World",url: "https://megaplay.buzz/stream/mal/38691/6/sub" },
    { number: 7, title: "Where Two Million Years Have Gone",url: "https://megaplay.buzz/stream/mal/38691/7/sub" },
    { number: 8, title: "Stone Road",url: "https://megaplay.buzz/stream/mal/38691/8/sub" },
    { number: 9, title: "Let There Be the Light of Science",url: "https://megaplay.buzz/stream/mal/38691/9/sub" },
    { number: 10, title: "A Flimsy Alliance",url: "https://megaplay.buzz/stream/mal/38691/10/sub" },
    { number: 11, title: "Clear World",url: "https://megaplay.buzz/stream/mal/38691/11/sub" },
    { number: 12, title: "Buddies Back to Back",url: "https://megaplay.buzz/stream/mal/38691/12/sub" },
    { number: 13, title: "Masked Warrior",url: "https://megaplay.buzz/stream/mal/38691/13/sub" },
    { number: 14, title: "Master of Flame",url: "https://megaplay.buzz/stream/mal/38691/14/sub" },
    { number: 15, title: "The Culmination of Two Million Years",url: "https://megaplay.buzz/stream/mal/38691/15/sub" },
    { number: 16, title: "A Tale for the Ages",url: "https://megaplay.buzz/stream/mal/38691/16/sub" },
    { number: 17, title: "A Hundred Nights and a Thousand Skies",url: "https://megaplay.buzz/stream/mal/38691/17/sub" },
    { number: 18, title: "Stone Wars",url: "https://megaplay.buzz/stream/mal/38691/18/sub" },
    { number: 19, title: "To Modernity",url: "https://megaplay.buzz/stream/mal/38691/19/sub" },
    { number: 20, title: "The Age of Energy",url: "https://megaplay.buzz/stream/mal/38691/20/sub" },
    { number: 21, title: "Spartan Crafts Club",url: "https://megaplay.buzz/stream/mal/38691/21/sub" },
    { number: 22, title: "The Treasure",url: "https://megaplay.buzz/stream/mal/38691/22/sub" },
    { number: 23, title: "Wave of Science",url: "https://megaplay.buzz/stream/mal/38691/23/sub3" },
    { number: 24, title: "Voices Over Infinite Distance",url: "https://megaplay.buzz/stream/mal/38691/24/sub" }
];

    }

    if (season == 2) {

        return [
    { number: 1, title: "Stone Wars Beginning",url: "https://megaplay.buzz/stream/mal/40852/1/sub" },
    { number: 2, title: "Hot Line",url: "https://megaplay.buzz/stream/mal/40852/2/sub" },
    { number: 3, title: "Call from the Dead",url: "https://megaplay.buzz/stream/mal/40852/3/sub" },
    { number: 4, title: "Full Assault",url: "https://megaplay.buzz/stream/mal/40852/4/sub" },
    { number: 5, title: "Steam Gorilla",url: "https://megaplay.buzz/stream/mal/40852/5/sub" },
    { number: 6, title: "Prison Break",url: "https://megaplay.buzz/stream/mal/40852/6/sub" },
    { number: 7, title: "Secret Mission",url: "https://megaplay.buzz/stream/mal/40852/7/sub" },
    { number: 8, title: "Final Battle",url: "https://megaplay.buzz/stream/mal/40852/8/sub" },
    { number: 9, title: "To Destroy and to Save",url: "https://megaplay.buzz/stream/mal/40852/9/sub" },
    { number: 10, title: "Humanity's Strongest Tag Team",url: "https://megaplay.buzz/stream/mal/40852/10/sub" },
    { number: 11, title: "Prologue of Dr. Stone",url: "https://megaplay.buzz/stream/mal/40852/11/sub" }
        ];

    }
if (season == 25) {

    return [

        {
            number: 1,
            title: "Dr. Stone: Ryusui",
            url: "https://megaplay.buzz/stream/mal/50612/1/sub" }
        

    ];

}
    if (season == 3) {

        return [
    { number: 1, title: "New World Map",url: "https://www.youtube.com/embed/abc123" },
    { number: 2, title: "Greed Equals Justice",url: "https://www.youtube.com/embed/abc123" },
    { number: 3, title: "First Contact",url: "https://www.youtube.com/embed/abc123" },
    { number: 4, title: "Eyes of Science",url: "https://www.youtube.com/embed/abc123" },
    { number: 5, title: "Science Vessel Perseus",url: "https://www.youtube.com/embed/abc123" },
    { number: 6, title: "Treasure Box",url: "https://www.youtube.com/embed/abc123" },
    { number: 7, title: "Ray of Despair, Ray of Hope",url: "https://www.youtube.com/embed/abc123" },
    { number: 8, title: "The Trump Card Aboard the Vessel of Science",url: "https://www.youtube.com/embed/abc123" },
    { number: 9, title: "Beautiful Science",url: "https://www.youtube.com/embed/abc123" },
    { number: 10, title: "Science Wars",url: "https://www.youtube.com/embed/abc123" },
    { number: 11, title: "With This Fist, a Miracle",url: "https://www.youtube.com/embed/abc123" },
    { number: 12, title: "The Kingdom of Science Strikes Back",url: "https://www.youtube.com/embed/abc123" },
    { number: 13, title: "The Medusa's True Face",url: "https://www.youtube.com/embed/abc123" },
    { number: 14, title: "Deal Game, Test of Wit",url: "https://www.youtube.com/embed/abc123" },
    { number: 15, title: "Battle in Three Dimensions",url: "https://www.youtube.com/embed/abc123" },
    { number: 16, title: "Total War",url: "https://www.youtube.com/embed/abc123" },
    { number: 17, title: "Joker",url: "https://www.youtube.com/embed/abc123" },
    { number: 18, title: "Flicker of Doom",url: "https://www.youtube.com/embed/abc123" },
    { number: 19, title: "Last Man Standing",url: "https://www.youtube.com/embed/abc123" },
    { number: 20, title: "First Dream",url: "https://www.youtube.com/embed/abc123" },
    { number: 21, title: "Treasure Island",url: "https://www.youtube.com/embed/abc123" },
    { number: 22, title: "Beyond the New World",url: "https://www.youtube.com/embed/abc123" }
        ];

    }

    if (season == 4) {

        return [
    { number: 1, title: "RYUSUI VS. SENKU",url: "https://megaplay.buzz/stream/mal/57592/1/sub" },
    { number: 2, title: "SCIENCE JOURNEY",url: "https://megaplay.buzz/stream/mal/57592/2/sub" },
    { number: 3, title: "Light Trap in the Darkness",url: "https://megaplay.buzz/stream/mal/57592/3/sub" },
    { number: 4, title: "Dr. X",url: "https://megaplay.buzz/stream/mal/57592/4/sub" },
    { number: 5, title: "DOCTOR VS. DOCTOR",url: "https://megaplay.buzz/stream/mal/57592/5/sub" },
    { number: 6, title: "SCIENCE IS ELEGANT",url: "https://megaplay.buzz/stream/mal/57592/6/sub" },
    { number: 7, title: "The Two Scientists",url: "https://megaplay.buzz/stream/mal/57592/7/dub" },
    { number: 8, title: "LOCK ON",url: "https://megaplay.buzz/stream/mal/57592/8/sub" },
    { number: 9, title: "Light of Science",url: "https://megaplay.buzz/stream/mal/57592/9/sub" },
    { number: 10, title: "Dirty Roads",url: "https://megaplay.buzz/stream/mal/57592/10/sub" },
    { number: 11, title: "Those Who Know the Rules; Those Who Make Them",url: "https://megaplay.buzz/stream/mal/57592/11/sub" },
    { number: 12, title: "Reunion",url: "https://megaplay.buzz/stream/mal/57592/12/sub" },
    { number: 13, title: "Watching the Same Moon",url: "https://megaplay.buzz/stream/mal/61322/1/sub" },
    { number: 14, title: "EARTH RACE",url: "https://megaplay.buzz/stream/mal/61322/2/dub" },
    { number: 15, title: "The Escape",url: "https://megaplay.buzz/stream/mal/61322/3/sub" },
    { number: 16, title: "MEDUSA MECHANISM",url: "https://megaplay.buzz/stream/mal/61322/4/sub" },
    { number: 17, title: "Sickening Yet Beautiful",url: "https://megaplay.buzz/stream/mal/61322/5/sub" },
    { number: 18, title: "DIAMOND HEART",url: "https://megaplay.buzz/stream/mal/61322/6/sub" },
    { number: 19, title: "STONE SANCTUARY",url: "http://localhost:5173/watch/189117?ep=189117%3A7" },
    { number: 20, title: "What I Once Sought to Destroy",url: "https://megaplay.buzz/stream/mal/61322/8/sub" },
    { number: 21, title: "OUR Dr. STONE",url: "https://megaplay.buzz/stream/mal/61322/9/sub" },
    { number: 22, title: "Until We Meet Again",url: "https://megaplay.buzz/stream/mal/61322/10/sub" },
    { number: 23, title: "Scientist, All Alone",url: "https://megaplay.buzz/stream/mal/61322/11/sub" },
    { number: 24, title: "WHOLE NEW WORLD",url: "https://megaplay.buzz/stream/mal/61322/12/sub" },
    { number: 25, title: "FUTURE ENGINE",url: "https://megaplay.buzz/stream/mal/62568/1/sub" },
    { number: 26, title: "FIRE",url: "https://megaplay.buzz/stream/mal/62568/2/sub" },
    { number: 27, title: "The Universe Is Written in the Language of Mathematics",url: "https://megaplay.buzz/stream/mal/62568/3/sub" },
    { number: 28, title: "Dawn of the Computer",url: "https://megaplay.buzz/stream/mal/62568/4/sub" },
    { number: 29, title: "The Truth About the Rocket",url: "https://megaplay.buzz/stream/mal/62568/5/sub" },
    { number: 30, title: "STONE TO SPACE",url: "https://megaplay.buzz/stream/mal/62568/6/sub" },
    { number: 31, title: "UNKNOWN KNOWN",url: "https://megaplay.buzz/stream/mal/62568/7/sub3" },
    { number: 32, title: "Challengers of Science",url: "https://megaplay.buzz/stream/mal/62568/8/sub3" },
    { number: 33, title: "Wanting Everything",url: "https://megaplay.buzz/stream/mal/62568/9/sub" },
    { number: 34, title: "COUNTDOWN",url: "https://megaplay.buzz/stream/mal/62568/10/sub" },
    { number: 35, title: "GIANT STEP",url: "https://www.youtube.com/embed/abc123" },
    { number: 36, title: "Episode 36",url: "https://www.youtube.com/embed/abc123" }, 
    { number: 37, title: "Episode 37",url: "https://www.youtube.com/embed/abc123" }  
        ];

    }

}

async function loadEpisodes(season) {

var episodes =
await fetchEpisodes(season);

    var episodeList =
    document.querySelector("#episodeList");

    episodeList.innerHTML = "";

episodes.forEach(function(episode) {

    var button =
    document.createElement("button");

    var searchText =
    episodeSearch.value
    .toLowerCase();

    if(
        !episode.title
        .toLowerCase()
        .includes(searchText)
    ) {

        return;

    }

  button.style.width = "100%";

button.style.marginBottom = "10px";

button.style.padding = "12px";

button.style.cursor = "pointer";

button.style.borderRadius = "12px";

button.style.border = "1px solid #A8E63A";

button.style.background =
"linear-gradient(135deg,#d8ff8b,#c9ffcf)";

button.style.fontFamily =
"Orbitron";

button.style.fontWeight =
"bold";

button.style.boxShadow =
"0 0 10px rgba(168,230,58,0.3)";

button.style.transition =
"0.2s";
button.addEventListener(
"mouseenter",
function() {

button.style.transform =
"scale(1.02)";

button.style.boxShadow =
"0 0 20px rgba(168,230,58,0.8)";

}
);

button.addEventListener(
"mouseleave",
function() {

button.style.transform =
"scale(1)";

button.style.boxShadow =
"0 0 10px rgba(168,230,58,0.3)";

}
);
button.innerText =
"Ep " +
episode.number +
" - " +
episode.title;

button.addEventListener(
    "click",
    function() {

document.querySelector(
"#playerBox"
).innerHTML =
`
<iframe
width="100%"
height="400"
src="${episode.url}"
allowfullscreen>
</iframe>
`;

    }
);

        episodeList.appendChild(button);

    });

}

var season1 =
document.querySelector("#season1");

var season2 =
document.querySelector("#season2");

var season25 =
document.querySelector("#season25");

var season3 =
document.querySelector("#season3");

var season4 =
document.querySelector("#season4");

season1.addEventListener(
    "click",
    function() {

      selectSeason(season1);

currentSeason = 1;
selectSeason(season1);

var episodeSearch =
document.querySelector(
"#episodeSearch"
);

selectSeason(season1);
loadEpisodes(1);

    }
);

season2.addEventListener(
    "click",
    function() {

    selectSeason(season2);
currentSeason = 2;

loadEpisodes(2);

    }

);
season25.addEventListener(
    "click",
    function() {

        selectSeason(season25);

        currentSeason = 25;

        loadEpisodes(25);

    }
);

season3.addEventListener(
    "click",
    function() {

        selectSeason(season3);
   currentSeason = 3;
loadEpisodes(3);

    }
);

season4.addEventListener(
    "click",
    function() {

        selectSeason(season4);
        currentSeason = 4;
        loadEpisodes(4);

    }
    
);

selectSeason(season1);
loadEpisodes(1);

episodeSearch.addEventListener(
    "input",
    function() {

        loadEpisodes(
            currentSeason
        );

    }
);
var drStoneMaximized = false;

drStoneFullscreen.addEventListener(
"click",
function() {

 if(!drStoneMaximized) {

    drStoneWindow.style.top = "0";
    drStoneWindow.style.left = "0";

    drStoneWindow.style.width = "100vw";
    drStoneWindow.style.height = "100vh";

    drStoneWindow.style.maxWidth = "100vw";

    drStoneMaximized = true;

}
else {

    drStoneWindow.style.top = "5vh";
    drStoneWindow.style.left = "10vw";

    drStoneWindow.style.width = "80vw";
    drStoneWindow.style.height = "80vh";

    drStoneWindow.style.maxWidth = "80vw";

    drStoneMaximized = false;

}

}
);
document.querySelector(
"#drstoneheader"
).addEventListener(
"dblclick",
function() {

    drStoneFullscreen.click();

}
);