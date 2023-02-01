<script>
    import { goto } from "$app/navigation";
    import { jwt } from '../store.js';
    import { onMount } from 'svelte';
    let listeLocations = [];
    onMount(handleLocations);

    async function handleLocations() {
        // event.preventDefault();
        // console.log("username:", username);
        // console.log("password:", password);
        // goto("./locations")
        console.log("JWT :", $jwt)
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
            listeLocations=data;
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

    function modifierLocation(nomFilm) {
        console.log("filmName :", nomFilm);
    }

    function handleKeydown() {

    }
</script>

<h1>yo le gang : {$jwt}</h1>
<div class="listeLocations">
<ul>
{#each listeLocations as objet}
    <li key={objet.filmName} on:click={() => modifierLocation(objet.filmName)} on:keydown={(event) => handleKeydown()}>{objet.filmName}</li>
{/each}
</ul>
</div>