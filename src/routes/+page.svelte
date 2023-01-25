<script>
  let username = "";
  let password = "";


  async function handleSubmit(event) {
  event.preventDefault();
  console.log("username:", username);
  console.log("password:", password);

  try {
    const response = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    console.log(data)

    if (data.success) {
      console.log("User logged in successfully");
      // redirect the user to the dashboard or show a message
    } else {
      console.log("Invalid username or password");
      // show an error message
    }
  } catch (error) {
    console.error(error);
  }
}

</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    username:
    <input type="text" value={username} on:input={e => username = e.target.value} required />
  </label>
  <br />
  <label>
    Password:
    <input type="password" value={password} on:input={e => password = e.target.value} required />
  </label>
  <br />
  <button type="submit">Login</button>
</form>

