const containerEle = document.querySelector(".main-container");
const downButton = document.getElementById("down-button");
const upButton = document.getElementById("up-button");
const titleElement = document.querySelector(".main-title");

currentIndex = 0;

const carouselTitles = [
  "Introduction",
  "Location",
  "Biotic Factors",
  "Abiotic Factors",
];

const carouselInfos = [
  `Hello, and thank you for visiting this site. <br>
     You will learn about the taiga biome today. <br>
    <ul>
        <li>Location</li>
        <li>Biotic Factors</li>
        <li>Abiotic Factors</li>

    </ul>
    `,

  `Just south of the Arctic Circle is where the taiga biome can be found. <br>
    The taiga is located between the tundra and temperate forests to <br> the north and south, respectively.
    Taigas can be found in Alaska, Canada, Scandinavia, and Siberia. <br> `,

  `
  The biotic factos of the taiga biome are 

  <ul>
  Wildlife
    <ul>
      <li>Moose</li>
      <li>Reindeer</li>
      <li>Beaver</li>
      <li>Etc.</li>
    </ul>
  Plants
    <ul>
      <li>Coniferous Trees</li>
      <li>Larch</li>
      <li>Spruce</li>
      <li>Etc.</li>

    </ul
  </ul>
  
  
  `,

  `
  The taiga biome receives 10 to 30 inches of rain on average.<br>
  Also, the taiga biome's average annual temperature is 32°F,<br>
 while summer temperatures can reach over 50°F. 
  `,
];

function loadItems() {
  containerEle.innerHTML = `
    <h1 class="carousel-titles" >${carouselTitles[currentIndex]}</h1>
    <p class="carousel-items" >${carouselInfos[currentIndex]}</p>
    `;
}

loadItems();

upButton.addEventListener("click", (e) => {
  if (currentIndex <= 0) {
    currentIndex = carouselTitles.length - 1;
    loadItems();
    return;
  }
  currentIndex -= 1;
  loadItems();
});

downButton.addEventListener("click", (e) => {
  if (currentIndex >= carouselTitles.length - 1) {
    currentIndex = 0;
    loadItems();
    return;
  }
  currentIndex += 1;
  loadItems();
});
