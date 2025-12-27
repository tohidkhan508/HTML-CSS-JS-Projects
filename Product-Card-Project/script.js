const myForm = document.getElementById("myform");
const MRP = document.getElementById("MRP");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const productCardContainer = document.querySelector(".productCardContainer");

let editMode = false;
let editedCard = null;

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if(
    MRP.value.trim() === "" ||
    productName.value.trim() === "" ||
    productPrice.value.trim() === "" ||
    productQuantity.value.trim() === ""
  ) {
    alert("Please fill the all inputs before submitting...");
    return;
  }

  if(!editMode) {
    const card = document.createElement("div");
    card.className = "productContainer";

    card.innerHTML = `
    <div class="cardContainer">
    <h3 class="MrP">MRP : </h3><h3 class="mrp cardh">${MRP.value}</h3>
    <h3 class="MrP">Product Name : </h3><h3 class="proName cardh">${productName.value}</h3>
    <h3 class="MrP">Price : </h3><h3 class="price cardh">${productPrice.value}</h3>
    <h3 class="MrP">Quantity : </h3><h3 class="proQuantity cardh">${productQuantity.value}</h3>
    
    <div class="btnContainer">
    <button class="editbtn">Edit</button>
    <button class="deletebtn">Delete</button>
    </div>
    </div>
    `;

    productCardContainer.append(card);

    MRP.value = "";
    productName.value = "";
    productPrice.value = "";
    productQuantity.value = "";
  } else {
    editedCard.querySelector(".mrp").innerText = `${MRP.value}`;
    editedCard.querySelector(".proName").innerText = `${productName.value}`;
    editedCard.querySelector(".proName").innerText = `${productName.value}`;
    editedCard.querySelector(".price").innerText = `${productPrice.value}`;
    editedCard.querySelector(".proQuantity").innerText = `${productQuantity.value}`;

    editMode = false;
    editedCard = null;
    myForm.reset();
  }

  productCardContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("deletebtn")) {
      e.target.closest(".productContainer").remove();
    }

    if (e.target.classList.contains("editbtn")) {
      editMode = true;

      editedCard = e.target.closest(".cardContainer");

      // RIGHT CLASS NAMES
      const mrpText = editedCard.querySelector(".mrp").textContent;
      const nameText = editedCard.querySelector(".proName").textContent;
      const priceText = editedCard.querySelector(".price").textContent;
      const quanText = editedCard.querySelector(".proQuantity").textContent;

      // Set values in input
      MRP.value = mrpText.trim();
      productName.value = nameText.trim();
      productPrice.value = priceText.trim();
      productQuantity.value = quanText.trim();
    }
  });
});