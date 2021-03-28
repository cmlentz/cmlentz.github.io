const section = [
  { sectionTitle: "About Me", 
    sectionInfo: "Stuff about me." },
  { sectionTitle: "Job History", 
    sectionInfo: "I've worked here." },
  { sectionTitle: "Education", 
    sectionInfo: "I've learned here." },
];

const cards = document.querySelectorAll(".card")
for(i = 0; i < cards.length; i++) {
  cards[i].remove()
}

function createSection(part) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = 
  `<h3>${part.sectionTitle}</h3>
  <p>${part.sectionInfo}</p>
  `
  return card
}

const cardsContainer = document.getElementsByClassName("cards-container")[0]

for (i = 0; i < section.length; i++) {
  const card = createSection(section[i])
  cardsContainer.appendChild(card)
}