const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/games/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

  document
    .querySelector('.game-list')
    .addEventListener('click', delButtonHandler);


const newGameHandler = async (event) => {
  const response = await fetch(`/api/games`, {
    method: 'POST',
    body: JSON.stringify({ 'golfer_id': 1
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data)
    const gameID = data
    document.location.replace(`/scorecard/${gameID}`);
  } else {
    alert('Failed to create game');
  }
};

  document
    .querySelector('#game-id')
    .addEventListener('click', newGameHandler);


const pastGameHandler = async (event) => {
  if (event.target.hasAttribute('open-id')) {
    const id = event.target.getAttribute('open-id');
    const response = await fetch(`/api/games/${id}`, {
       method: 'GET'
    });
  
    if (response.ok) {
      document.location.replace('/games/:id');
    } else {
      alert('Failed to delete project');
    }
  }
};
   
  document
    .querySelector('#open')
    .addEventListener('click', pastGameHandler);