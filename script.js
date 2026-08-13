let selectedRating = 0;

function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
  });
  const target = document.getElementById(id);
  target.classList.remove('hidden');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePromo() {
  document.getElementById('promo').classList.add('hidden');
}

function rate(value) {
  selectedRating = value;
  document.querySelectorAll('#stars button').forEach((button, index) => {
    button.classList.toggle('active', index < value);
  });
}

function submitExperience() {
  const waiter = document.getElementById('waiter').value;
  const comment = document.getElementById('comment').value.trim();

  if (!selectedRating) {
    alert('Selecciona una calificación.');
    return;
  }

  if (waiter === 'Selecciona un mesero') {
    alert('Selecciona el mesero que te atendió.');
    return;
  }

  // DEMO: aquí posteriormente conectarás una base de datos.
  console.log({
    rating: selectedRating,
    waiter,
    comment
  });

  document.getElementById('thankyou').classList.remove('hidden');
}
