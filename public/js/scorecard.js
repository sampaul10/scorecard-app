const newFormHandler = async (event) => {
  event.preventDefault();
  
  const hole1 = document.querySelector('#hole1').value.trim();
  const hole2 = document.querySelector('#hole2').value.trim();
  const hole3 = document.querySelector('#hole3').value.trim();
  const hole4 = document.querySelector('#hole4').value.trim();
  const hole5 = document.querySelector('#hole5').value.trim();
  const hole6 = document.querySelector('#hole6').value.trim();
  const hole7 = document.querySelector('#hole7').value.trim();
  const hole8 = document.querySelector('#hole8').value.trim();
  const hole9 = document.querySelector('#hole9').value.trim();
  const hole10 = document.querySelector('#hole10').value.trim();
  const hole11 = document.querySelector('#hole11').value.trim();
  const hole12 = document.querySelector('#hole12').value.trim();
  const hole13 = document.querySelector('#hole13').value.trim();
  const hole14 = document.querySelector('#hole14').value.trim();
  const hole15 = document.querySelector('#hole15').value.trim();
  const hole16 = document.querySelector('#hole16').value.trim();
  const hole17 = document.querySelector('#hole17').value.trim();
  const hole18 = document.querySelector('#hole18').value.trim();

  if (hole1) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/holes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ "score": hole1 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
        console.log(" Score card updated!");
    } else {
        alert('Failed to create project');
    }
  }
};

  document
    .querySelector('.new-scorecard')
    .addEventListener('submit', newFormHandler);