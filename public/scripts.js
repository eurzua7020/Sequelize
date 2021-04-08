/* import DiningHall from '../models/DiningHall'; */

/* async function getData() {
  const response = await fetch('/api/dining');
  const alpha = await response.json();
  const dining = alpha.data;
  return dining;
}

function diningHall() {
  const bravo = document.querySelector('.target');
  dining.forEach((element) => {
    const charlie = document.createElement("tr");
    charlie.innerHTML = `
    <td>${element.hall_id}</td>
    <td>${element.hall_name}</td>
    <td>${element.hall_address} </td>`;

    bravo.append(charlie)
  });

}

async function windowActions(){
  const alpha = diningHall();
  await getData(alpha)
}

window.onload = windowActions();

async function dinner () {
  const dinnerFetch = await fetch('/api/dining');
  const dinnerInfo = await dinnerFetch.json();
  const arrayDinner = dinnerInfo.data;
  const information = document.querySelector('.target');

  arrayDinner.forEach((x) => {
      const makeRows = document.createElement('tr');
      makeRows.innerHTML = `
              <td>${x.hall_id}</td>
              <td>${x.hall_name}</td>
              <td>${x.hall_address}</td>
      `;
      information.append(makeRows)
  });
} */
function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getMeals() {
  console.log('data request');
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = await diningRequest.json();
  return diningData;
}
async function windowActions() {
  console.log('loaded window');
  const results = await getMeals();
  const meals = results.data;

  const mealArray = [1,2,3,4,5,6,7,8,9,10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random]
  });
  console.table(selectedMeals);
}

window.onload = windowActions;
