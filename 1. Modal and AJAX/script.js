let btn = document.getElementById('btn');
let btnClose = document.getElementById('btnClose');
let modal = document.getElementById('modalId');
let container = document.getElementById('container');

btn.onclick = () => {
  modal.style.display = 'block';
  container.style.display = 'none';
}

btnClose.onclick = () => {
  modal.style.display = 'none';
  container.style.display = 'block';
}
