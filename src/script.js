const section = [
  { sectionTitle: "About Me", 
    sectionInfo: "I am an aspiring web developer weaving my way through the world wide web.",
    addedInfo: "Currently, I am honing my skills through the Amazon software development course offered though Flatiron school." },
  { sectionTitle: "Job History", 
    sectionInfo: "I retired from the Navy in 2016 after 20 years. I spent the first 10 years in electronics maintenance; building, installing, and repairing electronis systems both ashore and afloat.  The remaining 10 years, I worked in Cyber Security, defending Navy networks from outsider threats.",
    addedInfo: "I am currently working for Amazon as a stow associate.  I am taking advantage of their career choice program to learn web development."  },
  { sectionTitle: "Technical Education", 
    sectionInfo: "I officaially began learning development in a Software Engineering course at University of West Florida.  There I learned the Ada, Java, Perl, and basic HTML.",
    addedInfo: "After changing job fields to Cyber Security in the Navy, I learned C, Python, Assembly, and Android application development."  },
];

const cards = document.querySelectorAll(".card")
for(i = 0; i < cards.length; i++) {
  cards[i].remove()
}

function createSection(part) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = 
  `<h2>${part.sectionTitle}</h2>
  <p>${part.sectionInfo}</p>
  <p>${part.addedInfo}</p>
  `
  return card
}

const cardsContainer = document.getElementsByClassName("cards-container")[0]

for (i = 0; i < section.length; i++) {
  const card = createSection(section[i])
  cardsContainer.appendChild(card)
}