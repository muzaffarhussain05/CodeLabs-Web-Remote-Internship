const userList = document.getElementById('userList');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    userList.innerHTML = ''; 
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user';
      userDiv.innerHTML = `
        <strong>${user.name}</strong><br/>
        <p><b>Username:</b> ${user.username}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p><b>Address:</b> ${user.address.street}, ${user.address.city}</p>
      `;
      userList.appendChild(userDiv);
    });
  })
  .catch(error => {
    userList.innerHTML = 'Failed to fetch users.';
    console.error('Error fetching users:', error);
  });
