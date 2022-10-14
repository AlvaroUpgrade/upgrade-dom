// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
function firstEx() {
  const list = document.querySelector("body");
  const firstEmptyDiv = document.createElement("div");
  firstEmptyDiv.className = "firstDiv";
  list.appendChild(firstEmptyDiv);
}

firstEx();

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
function secondEx() {
  const list = document.querySelector("body");
  const div = document.createElement("div");
  div.className = "firstDivWithContent";
  list.appendChild(div);

  const divSelector = document.querySelector(".firstDivWithContent");
  const p = document.createElement("p");
  p.textContent = "Primer p dentro de un Div";
  divSelector.appendChild(p);
}

secondEx();

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
function thirdEx() {
  const div$$ = document.createElement("div");
  div$$.className = "thirdExDiv";
  div$$.style.backgroundColor = "red";
  document.body.appendChild(div$$);

  for (let i = 0; i < 6; i++) {
    const text = document.createElement("p");
    text.textContent = "thirdExDiv";
    div$$.appendChild(text);
  }
}

thirdEx();

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
function fourthEx() {
  const text = document.createElement("p");
  text.textContent = "Soy dinámico";
  document.body.appendChild(text);
}

fourthEx();

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
function fifthEx() {
  const titleWithClass = document.getElementsByClassName("fn-insert-here");
  titleWithClass[0].textContent = "Wubba Lubba dub dub";
}
fifthEx();

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
function sixthEx() {
  const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
  const list = document.createElement("ul");

  for (const items of apps) {
    const sections = document.createElement("li");

    sections.textContent = items;

    document.body.appendChild(list);
    list.appendChild(sections);
  }
}
sixthEx();

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
function seventhEx() {
  const deleteNodes = document.querySelectorAll(".fn-remove-me");

  for (const items of deleteNodes) {
    items.remove();
  }
}
seventhEx();

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
function eighthEx() {
  const insert = document.createElement("p");
  insert.textContent = "Voy en medio!";

  const div = document.querySelectorAll("div");

  document.body.insertBefore(insert, div[1]);
}
eighthEx();

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
function ninethEx() {
  const divs = document.querySelectorAll("div");

  for (const elements of divs) {
    console.log(elements);

    const insert = document.createElement("p");
    insert.textContent = "Voy dentro!";
    insert.style.backgroundColor = "lightblue";
    elements.appendChild(insert);
  }
}

ninethEx();
