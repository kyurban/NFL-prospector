const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('#search-bar');
const searchType = document.querySelector('#search-type');
const tbody = document.querySelector('#tbody');
const editModal = document.querySelector('#edit-modal');
const closeModal = document.querySelector('#close-modal');
const editForm = document.querySelector('#edit-form');
const editFirst = document.querySelector('#edit-first');
const editLast = document.querySelector('#edit-last');
const editPosition = document.querySelector('#edit-position');
const editCollege = document.querySelector('#edit-college');
const editAge = document.querySelector('#edit-age');
const editHeight = document.querySelector('#edit-height');
const editWeight = document.querySelector('#edit-weight');
const editId = document.querySelector('#edit-id');
const addBtn = document.querySelector('#add-btn');

// Search handler
searchBtn.addEventListener('click', async () => {
  const query = searchBar.value.trim();
  const type = searchType.value;
  let url = '';

  switch (type) {
    case 'full':
      const [first, last] = query.split(' ');
      url = `/prospects/name/full?first=${first}&last=${last}`;
      break;
    case 'first_name':
      url = `/prospects/first_name/${query}`;
      break;
    case 'last_name':
      url = `/prospects/last_name/${query}`;
      break;
    case 'position':
      url = `/prospects/position/${query}`;
      break;
    case 'college':
      url = `/prospects/college/${query}`;
      break;
    case 'age':
      url = `/prospects/age/${query}`;
      break;
    case 'height':
      url = `/prospects/height/${query}`;
      break;
    case 'weight':
      url = `/prospects/weight/${query}`;
      break;
    case 'all':
      url = '/prospects';
      break;
  }

  if (query === '' && type !== 'all') {
    alert('Please enter a search term');
    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    tbody.innerHTML = '';

    if (!res.ok) {
      tbody.innerHTML = `<tr><td colspan="8">Error fetching data</td></tr>`;
      return;
    }

    data.forEach(prospect => {
      const tr = document.createElement('tr');
      tr.classList.add('player-entry');
      tr.innerHTML = `
        <td>${prospect.first_name}</td>
        <td>${prospect.last_name}</td>
        <td>${prospect.position}</td>
        <td>${prospect.college}</td>
        <td>${prospect.age}</td>
        <td>${prospect.height}</td>
        <td>${prospect.weight}</td>
        <td>
          <a href="#" class="edit" data-id="${prospect.id}">Edit</a>
          <a href="#" class="delete" data-id="${prospect.id}">Delete</a>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Edit handler
    document.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');

        try {
          const res = await fetch(`/prospects/${id}`);
          const prospect = await res.json();

          editId.value = prospect.id;
          editFirst.value = prospect.first_name;
          editLast.value = prospect.last_name;
          editPosition.value = prospect.position;
          editCollege.value = prospect.college;
          editAge.value = prospect.age;
          editHeight.value = prospect.height;
          editWeight.value = prospect.weight;

          openEditModal();
        } catch (err) {
          console.error(err);
          alert('Failed to load prospect data for editing.');
        }
      });
    });

    // Delete handler
    document.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        const confirmed = confirm('Are you sure you want to delete this prospect?');
        if (!confirmed) return;

        try {
          const res = await fetch(`/prospects/${id}`, {
            method: 'DELETE',
          });

          if (!res.ok) {
            const msg = await res.json();
            alert(msg.message || 'Failed to delete prospect');
            return;
          }

          btn.closest('tr').remove();
        } catch (err) {
          console.error(err);
          alert('Error deleting prospect.');
        }
      });
    });

  } catch (error) {
    console.error(error);
    tbody.innerHTML = `<tr><td colspan="8">Error fetching data. Please try again later.</td></tr>`;
  }
});

addBtn.addEventListener('click', () => {
  editForm.reset();
  editId.value = '';
  openEditModal();
});


// Open modal
function openEditModal() {
  editModal.style.display = 'block';
}

// Close modal
function closeEditModal() {
  editModal.style.display = 'none';
}

closeModal.addEventListener('click', closeEditModal);
window.addEventListener('click', (e) => {
  if (e.target === editModal) {
    closeEditModal();
  }
});

// Form submit to update
editForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const age = parseInt(editAge.value, 10);

  if (age < 20) {
    alert('Age must be 20 or older to be added.');
    return;
  }

  const payload = {
    first_name: editFirst.value.trim(),
    last_name:  editLast.value.trim(),
    position:   editPosition.value.trim(),
    college:    editCollege.value.trim(),
    age:        age,
    height:     editHeight.value.trim(),
    weight:     parseInt(editWeight.value, 10),
  };

  try {
    let res;
    if (editId.value === '') {
      // ADD mode
      res = await fetch('/prospects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      // EDIT mode
      res = await fetch(`/prospects/${editId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, id: editId.value }),
      });
    }

    const body = await res.json();
    if (!res.ok) {
      alert(body.message || 'Operation failed');
      return;
    }

    alert(editId.value === '' ? 'Prospect added!' : 'Prospect updated!');
    closeEditModal();
    searchBtn.click();
  } catch (err) {
    console.error(err);
    alert('Network error.');
  }
});


