//characters
const harry = document.querySelector("#Harry")
const hermione = document.querySelector("#Hermione")
const fetchchar = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/characters')
    const char = await res.json()
    hsrc = char[0].image
    harry.src = hsrc;
    hesrc = char[1].image
    hermione.src = hesrc
}
fetchchar()

//spells
const fetchSpells = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    const spells = await res.json()
    console.log(spells[0].spell)
}

fetchSpells()