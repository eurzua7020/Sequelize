async function populateRestaurants() {
  const diningRequest = await fetch('/api/dining');
  const diningData = await diningRequest.json();

  diningData.data.forEach((restaurant) => {
    const appendItem = document.createElement('tr');
    appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
        <article class ="title is-child box has-background-link-dark ">
        <span class="subtitle has-text-light has-text-weight-bold ">
        ${restaurant.hall_name} </span>
        <br />
        <span class="has-text-light"> ${restaurant.hall_address.split(',')[0]} </span> <br />
        <span class="has-text-light"> ${restaurant.hall_address.split(',')[1]} </span>
         </article>`;
    targetBox.append(appendItem);
  });
}

async function getData() {
  const diningRequest = await fetch('/api/dining');
  const diningData = await diningRequest.json();
  return diningData;
}

async function setBasicData() {
  localStorage.setItem('myCat', 'Tom');
}

async function getBasicData() {
  const cat = localStorage.getItem('myCat');
}

async function windowActions() {
  console.log('loaded window');
  const data = await getData();
  const alpha = populateRestaurants();
}

window.onload = windowActions;
