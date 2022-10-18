const removePadTypeEquipment = document.querySelectorAll(
  ".remove-pad-equipment"
);
const removeDesctopTypeEquipment = document.querySelectorAll(
  ".remove-desctop-equipment"
);
const buttonTypeEquipment = document.querySelector(".button-type-equipment");
const iconTypeEquipment = document.querySelector(
  ".button-type-equipment__icon"
);
const textTypeEquipment = document.querySelector(
  ".button-type-equipment__text"
);

buttonTypeEquipment.addEventListener("click", function () {
  clickButtonShowEquipment();

  iconTypeEquipment.classList.toggle("rotate");

  if (textTypeEquipment.textContent === "Показать все") {
    textTypeEquipment.textContent = "Скрыть";
  } else {
    textTypeEquipment.textContent = "Показать все";
  }
});

function clickButtonShowEquipment() {
  if (window.innerWidth < 992) {
    for (let i = 0; i < removePadTypeEquipment.length; i++) {
      removePadTypeEquipment[i].classList.toggle("remove-pad-equipment");
      removePadTypeEquipment[i].classList.toggle("card-show");
    }
    for (let i = 0; i < removeDesctopTypeEquipment.length; i++) {
      removeDesctopTypeEquipment[i].classList.toggle("card-show");
      removeDesctopTypeEquipment[i].classList.toggle(
        "remove-desctop-equipment"
      );
    }
  }

  if (window.innerWidth >= 992) {
    for (let i = 0; i < removePadTypeEquipment.length; i++) {
      removePadTypeEquipment[i].classList.toggle("remove-pad-equipment");
    }

    for (let i = 0; i < removeDesctopTypeEquipment.length; i++) {
      removeDesctopTypeEquipment[i].classList.toggle(
        "remove-desctop-equipment"
      );
      removeDesctopTypeEquipment[i].classList.toggle("card-show");
    }
  }
}
