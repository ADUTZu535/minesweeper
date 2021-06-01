document.addEventListener('DOMContentLoaded', onReady, false);

const NUM_ROWS = 10;

function onReady() {
  const table = document.querySelector('.table > tbody');

  for (let i = 0; i < NUM_ROWS; i++) {
    table.appendChild(createRow());
  }
}

function createRow() {
  const row = document.createElement('tr');

  for (let i = 0; i < NUM_ROWS; i++) {
    let cell = document.createElement('td');
    row.appendChild(cell);
  }

  return row;
}
