let name = document.querySelector(".name");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let image = document.querySelector(".image");
let btnCreate = document.querySelector(".btn-create");
let btnRead = document.querySelector(".btn-read");
let list = document.querySelector(".list");
// ! POST
readContact();

btnCreate.addEventListener("click", () => {
  if (
    !name.value.trim() ||
    !lastName.value.trim() ||
    !email.value.trim() ||
    !image.value.trim()
  ) {
    return alert("запоните поле!!!");
  }
  let newContact = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    image: image.value,
  };

  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.push(newContact);
  localStorage.setItem("contact", JSON.stringify(data));
  readContact();
  name.value = "";
  lastName.value = "";
  email.value = "";
  image.value = "";
});

//! GET

function readContact() {
  let newData = JSON.parse(localStorage.getItem("contact")) || [];
  list.innerHTML = "";
  newData.forEach((el, index) => {
    let p_name = document.createElement("p");
    let p_lastName = document.createElement("p");
    let p_email = document.createElement("p");
    let img = document.createElement("img");
    let info = document.createElement("div");
    let infoImg = document.createElement("div");
    let parent = document.createElement("div");
    let infoBtn = document.createElement("div");
    let btnDelete = document.createElement("button");

    // ! Class
    info.classList.add("info");
    infoImg.classList.add("infoImg");
    parent.classList.add("parent");
    infoBtn.classList.add("infoBtn");
    // !

    p_name.innerText = el.name;
    p_lastName.innerText = el.lastName;
    p_email.innerText = el.email;
    img.src = el.image;
    btnDelete.innerText = "delete";

    info.append(p_name);
    info.append(p_lastName);
    info.append(p_email);
    infoImg.append(img);
    infoBtn.append(btnDelete);

    parent.append(infoImg);
    parent.append(info);
    parent.append(infoBtn);
    list.append(parent);

    btnDelete.addEventListener("click", () => {
      deleteContact(index);
      readContact();
    });
  });
}

function deleteContact(id) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.splice(id, 1);
  localStorage.setItem("contact", JSON.stringify(data));
}
