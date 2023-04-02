var poke_count = 1;
const items_per_page = 20;
const numPoke = 1281;

async function changePage(page) {
  const pokecount = document.getElementById("page");

  if (page < 1) page = 1;
  if (page > numPoke) page = numPoke;

  for (let i = (page - 1) * items_per_page; i < page * items_per_page; i++) {
    let val = i + 1, //adding 1 because first pokemon has id 1
      src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        val +
        ".png",
      img = document.createElement("img");
    img.src = src;

    //we are fetching pokemon names from pokemon api
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + val);

    //get data in json, get name from data, make first letter upper case and print that name
    const data = await response.json();
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const printName = document.createElement("div");
    printName.innerText = name;

    //create div with id flex-item where img and name data will be stored, each has unique name based on val
    const newDiv = document.createElement("div");
    newDiv.id = "flex-item" + val;
    document.getElementById("flex-container").appendChild(newDiv);

    //create delete button for every flex-item
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.id = "delete" + val;

    //add img, name and delete button to a new div
    document.getElementById(newDiv.id).appendChild(img);
    document.getElementById(newDiv.id).appendChild(printName);
    document.getElementById(newDiv.id).appendChild(delBtn);

    //add onclick event on the delete button
    document.getElementById(delBtn.id).addEventListener("click", delPoke);

    //hide selected pokemon
    function delPoke() {
      newDiv.className = "hidden";
      //newDiv.style.display = "none";
    }
    console.log(val);
  }
  pokecount.innerHTML = page * items_per_page;
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
// const revBtn = document.createElement("button");
// revBtn.innerText = "Revert";
// revBtn.id = "revert";
// document.getElementById("navigation").appendChild(revBtn);
// document.getElementById(revBtn.id).addEventListener("click", revertDel);
// function revertDel() {
//   newDiv.classList.remove("hidden");
// }
// console.log(revertDel());
