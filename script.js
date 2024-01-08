const button = document.querySelector("button");

const form = document.querySelector("form");
const feladatok = [];
function textDisplay() {
  const feladatOsztaly = document.querySelector(".feladat");
  let value = document.getElementById("feladat").value;
  feladatok.push(value);
  feladatOsztaly.innerHTML = feladatok
    .map(
      (
        i
      ) => `<li><input type="checkbox" class="inputcheck" id="" name="todo" value="todo" />
    ${i} <button class="delete">Remove task</button>
    <p class="taskReady"></p></li>`
    )
    .join("");
  const deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach(function (i) {
    i.addEventListener("click", function () {
      this.parentElement.remove();
      feladatok.splice(i, 1);
    });
  });

  let checkbox = document.querySelectorAll(".inputcheck");
  let text = document.querySelectorAll(".taskReady");

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", () => {
      if (checkbox[i].checked) {
        text[i].innerHTML = "Feladat kész";
        deleteButton[i].innerText = "Feladat törlése";
      } else {
        text[i].innerHTML = "";
      }
    });
  }
}
