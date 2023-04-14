var poke_count = 1;
const items_per_page = 21;
const numPoke = 1281;

async function changePage(page) {
  // const pokecount = document.getElementById("page");
  if (page < 1) page = 1;
  if (page > numPoke) page = numPoke;

  for (let i = (page - 1) * items_per_page; i < page * items_per_page; i++) {
    let val = i + 1, //adding 1 because first pokemon has id 1
      src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        val +
        ".png";
    const img = document.createElement("img");
    console.log(img);
    img.src = src;
    img.alt = "Pokemon img";

    //get data in json, get name from data, make first letter upper case and print that name
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + val);
    const data = await response.json();
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const printName = document.createElement("div");
    printName.innerText = name;

    //get weight and height of selected pokemon
    const weight = data.weight / 10;
    const height = data.height / 10;

    //create div with id flex-item where img and data will be stored, each has unique name based on val
    const card = document.createElement("div");
    card.id = "flex-item" + val;
    document.getElementById("flex-container").appendChild(card);

    //create delete button for every flex-item
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.id = "delete" + val;
    delBtn.className = "btn-inv";

    //create expand button for every flex-item
    const expBtn = document.createElement("button");
    expBtn.innerText = "+";
    expBtn.id = "exp" + val;

    //add img, name, expand and delete button to a new div
    document.getElementById(card.id).appendChild(img);
    document.getElementById(card.id).appendChild(printName);
    document.getElementById(card.id).appendChild(expBtn);
    document.getElementById(card.id).appendChild(delBtn);

    //popover
    $("[id=" + expBtn.id + "]").popover({
      html: true,
      title: "<span class='stats'>Stats</span>",
      content: "Weight: " + weight + " kg" + "<br> Height: " + height + " m",
      placement: "bottom",
      trigger: "focus",
    });

    //hide selected Pokemon
    var deleted = document.getElementsByClassName("hidden");
    function delPoke() {
      card.className = "hidden";
      document.getElementById("deletedPoke").innerText = deleted.length;
      // let currentPokeSum = page * items_per_page - deleted.length;
      // document.getElementById("page").innerText = currentPokeSum;
    }
    document.getElementById(delBtn.id).addEventListener("click", delPoke);

    //revert all deleted Pokemons
    function revertDel() {
      for (let i = 0; i < deleted.length; i++) {
        deleted[i].className = "show";
      }
      document.getElementById("deletedPoke").innerText = 0;
      // currentPokeSum = page * items_per_page;
      // document.getElementById("page").innerText = currentPokeSum;
    }
    document.getElementById("revert").addEventListener("click", revertDel);
  }
  // pokecount.innerHTML = page * items_per_page;
}
function nextPage() {
  if (poke_count < numPoke) {
    poke_count++;
    changePage(poke_count);
  }
}
window.onload = function () {
  changePage(1);
};
