<script>
    import { goto } from "$app/navigation";
    import { jwt } from '../store.js';

    let username = "";
  let password = "";
  let jwtToken = "";
  let secretPasswordRole = "";
  let role = "user";

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    if (secretPasswordRole=="yolegang") {
        role="admin";
    }
    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, role })
      });

      const data = await response.json();
      role="user";
      console.log(data)
      jwt.set(data.jwt)
      jwtToken=data.jwt;
      console.log("jwtToken :", jwtToken);
      console.log("JWT :", $jwt);
      if (data) {
        goto("./")
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
    <span>Secret Password to be admin : <input type="password" bind:value={secretPasswordRole}></span> 
    <br />
    <button type="submit">Register</button>
  </form>