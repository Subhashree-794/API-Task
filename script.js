// const spells = [
  "Accio", "Alohomora", "Expelliarmus", "Lumos", "Nox",
  "Wingardium Leviosa", "Expecto Patronum", "Avada Kedavra", "Crucio", "Imperio",
  "Stupefy", "Petrificus Totalus", "Obliviate", "Reducto", "Rictusempra",
  "Protego", "Silencio", "Incendio", "Aparecium", "Finite Incantatem"
// ];

const spells = [
  "Accio", "Alohomora", "Expelliarmus", "Lumos", "Nox",
  "Wingardium Leviosa", "Expecto Patronum", "Avada Kedavra", "Crucio", "Imperio",
  "Stupefy", "Petrificus Totalus", "Obliviate", "Reducto", "Rictusempra",
  "Protego", "Silencio", "Incendio", "Aparecium", "Finite Incantatem"
];
// const bgImages =[
//   "https://i.pinimg.com/736x/41/ce/f1/41cef17d1e74836e86c41794d891f13b.jpg","https://i.pinimg.com/736x/f7/e6/23/f7e623dfb53a3532588208fadb7d98ed.jpg","https://i.pinimg.com/736x/88/b1/be/88b1be840854dbfd6e6f794d1875fb57.jpg"
// ]

const grid = document.getElementById("spellGrid");

spells.forEach(spell => {
  const card = document.createElement("div");
  card.classList.add("card");

  const inner = document.createElement("div");
  inner.classList.add("inner-card");

  const front = document.createElement("div");
  front.classList.add("front");
  front.innerText = "Click Me";

  //setting unique background image for each front//
  front.style.backgroundImage=`url('book.png')`;
    front.style.backgroundSize="cover";
    front.style.backgroundPosition="center";
    


  const back = document.createElement("div");
  back.classList.add("back");
  back.innerText = spell;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  grid.appendChild(card);
});
