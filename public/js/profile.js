const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id);
  
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
  
    console.log(event.target)
    const response = await fetch(`/api/games`, {
      method: 'POST',
      body: JSON.stringify({ "golfer_id": 1
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


document
  .querySelector('#game-id')
  .addEventListener('click', newGameHandler);