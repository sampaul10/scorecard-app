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
  // if (event.target.hasAttribute('game-id')) {
    console.log(event.target)
    const response = await fetch(`/api/games`, {
      method: 'POST',
      body: JSON.stringify({ "golfer_id": 1,
        "date_played": "Wed, 27 Dec 1995 13:30:00 GMT"
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/scorecard');
    } else {
      alert('Failed to create game');
    }
  }
// };

document
  .querySelector('#game-id')
  .addEventListener('click', newGameHandler);