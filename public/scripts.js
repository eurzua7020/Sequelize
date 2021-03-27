/*async function getData() {
  const response = await fetch('/api/dining');
  const alpha = await response.json();
  const dining = alpha.data;
  return dining;
}


function diningHall() {
  const bravo = document.querySelector('.target')
  dining.forEach((hall) => {
    const charlie = document.createElement("tr")
    charlie.innerHTML = `
    <td>${element.hall_id}</td>
    <td>${element.hall_name}</td>
    <td>${element.hall_address} </td>`;
    
    bravo.append(charlie)
  });

}

window.onload = getData();*/



async function dinner () {
  const dinnerFetch = await fetch('/api/dining');
  const dinnerInfo = await dinnerFetch.json();
  const arrayDinner = dinnerInfo.data; 
  const information = document.querySelector('.target');

  arrayDinner.forEach((element) => {
      const makeRows = document.createElement('tr');
      makeRows.innerHTML = `
              <td>${element.hall_id}</td>
              <td>${element.hall_name}</td>
              <td>${element.hall_address}</td>   
      `;
      information.append(makeRows)
  });
}

window.onload = dinner();
