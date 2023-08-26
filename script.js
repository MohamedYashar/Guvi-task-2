    const usersContainer = document.querySelector('.users-container');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const userCards = users.map(user => `
          <div class="user-card">
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
          </div>
        `);
        usersContainer.innerHTML = userCards.join('');
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

      
      
      
 
