const cardsequipment = document.querySelector(".cards-type-equipment");
const equipmentHeight = "equipment-height";
const buttonTypeEquipment = document.querySelector(".button-type-equipment");
const iconTypeEquipment = document.querySelector(
  ".button-type-equipment__icon"
);
const textTypeEquipment = document.querySelector(
  ".button-type-equipment__text"
);
import { showNext } from "./buttonNextRead";

buttonTypeEquipment.addEventListener("click", function () {
  showNext(
    cardsequipment,
    equipmentHeight,
    iconTypeEquipment,
    textTypeEquipment
  );
});
