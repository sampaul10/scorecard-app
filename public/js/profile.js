const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('game-list')) {
      const id = event.target.getAttribute('game-list');
  
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
  if (event.target.hasAttribute('game-id')) {
    const response = await fetch(`/api/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create game');
    }
  }
};

document
  .querySelector('.game-id')
  .addEventListener('click', newGameHandler);