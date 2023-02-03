<script>
  import { goto } from "$app/navigation";
  import { jwt, role } from './store.js';
  let username = "";
  let password = "";
  let jwtToken = "";

  async function roleUser() {
    console.log("LA MALA EST GANGX")
    try {
      const response = await fetch('http://localhost:3000/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$jwt}`
        }
      });

      const data = await response.json();
      role.set(data.role);
      console.log($role);
      if (data) {
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
      jwt.set(data.jwt)
      await roleUser();
      jwtToken=data.jwt;
      console.log("jwtToken :", jwtToken);
      console.log("JWT :", $jwt);
      if (data) {
        goto("./locations")
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

  async function handleLocations(event) {
    event.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    // goto("./locations")
    console.log("jwtToken :", jwtToken);
    console.log("JWT :", $jwt);
    try {
      const response = await fetch('http://localhost:3000/locations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$jwt}`
        },
      });
      // console.log(`Bearer ${jwtToken}`);
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

  function handleRegister() {
    goto("./register");
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


<form on:submit|preventDefault={handleRegister}>
  
  <br />
  <button type="submit">Register</button>
</form>

<form on:submit|preventDefault={handleLocations}>
  
  <br />
  <button type="submit">Voir locations</button>
</form>

