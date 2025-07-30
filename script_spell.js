const spells = [
  {
    name: "Accio",
    description: "Summons objects toward the caster. Used by Harry to grab his broom in the Triwizard Tournament."
  },
  {
    name: "Expelliarmus",
    description: "Disarms the opponent. Harry's signature spell to disarm enemies instead of harming them."
  },
  {
    name: "Lumos",
    description: "Lights up the wand's tip. Hermione uses it often while studying late nights in Hogwarts."
  },
  {
    name: "Alohomora",
    description: "Unlocks doors and objects. Frequently used by Hermione to get out of trouble."
  },
  {
    name: "Expecto Patronum",
    description: "Conjures a protective Patronus. Harry’s stag Patronus protects against Dementors."
  },
  {
    name: "Wingardium Leviosa",
    description: "Makes objects fly. Ron mastered it with the feather in Professor Flitwick's class."
  },
  {
    name: "Avada Kedavra",
    description: "The killing curse. Used by Voldemort—instantly fatal and unblockable."
  },
  {
    name: "Stupefy",
    description: "Stuns the opponent. Used in battles to immobilize Death Eaters quickly."
  },
  {
    name: "Protego",
    description: "Shields against minor spells. Hermione and Harry often use it during duels."
  },
  {
    name: "Obliviate",
    description: "Erases specific memories. Hermione used it on her parents to protect them from Voldemort."
  }
];

const grid = document.getElementById("spellGrid");

spells.forEach(spell => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">${spell.name}</div>
      <div class="card-face card-back">${spell.description}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  grid.appendChild(card);
});
