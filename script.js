$("#slide").hide();

$("#calcola-btn").on("click", function () {
  let dogName = $("#dogName").val();
  let dogAge = parseFloat($("#dogAge").val());
  let animalType = $("#animalType").val();
  $("#calcola-txt").text(
    "Immagina se " + dogName +" fosse stato umano... avrebbe festeggiato "+ GetHumanAgeForPets(dogName, dogAge, animalType) +" candeline sulla sua torta di compleanno!"
  );
});

function GetHumanAgeForPets(name, age, typeOfAnimal) {
  let humanAge;
  if (name === "") {
    alert("Ma come si chiama?");
  } else if (age < 1 || age > 25 || isNaN(age)) {
    alert("Scegli un'età compresa tra 1 e 25 anni");
  } else {
    if (typeOfAnimal == 1) {
      if (age <= 2) {
        humanAge = age * 10.5;
      } else {
        humanAge = 21 + (age - 2) * 4;
      }
    } else if (typeOfAnimal == 2) {
      if (age <= 2) {
        humanAge = age * 12;
      } else {
        humanAge = 24 + (age - 2) * 4;
      }
    } else {
      alert("seleziona tipo di animale!");
    }
    $("#slide").slideDown().delay(4000).slideUp();
    return humanAge;
  }
}
