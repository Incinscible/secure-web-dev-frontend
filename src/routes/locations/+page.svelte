<script>
    import { goto } from "$app/navigation";
    import { jwt, role } from '../store.js';
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



    function modifierLocation(id) {
        console.log("filmName :", id);
    }

    function handleAdd() {

    }

    function handleEdit(id) {
        console.log("edit :", id);
    }

    async function handleDelete(id) {
        console.log("delete :", id);
        try {
            const response = await fetch(`http://localhost:3000/locations/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${$jwt}`
            },
            });
            // console.log(`Bearer ${jwtToken}`);
            const data = await response.json();
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

    function handleKeydown() {

    }
</script>

<h1>yo le gang : {$jwt}</h1>
<div class="listeLocations">
    {$role}
<ul>
{#each listeLocations as objet}
    <li key={objet._id}>{objet.filmName}
        {#if $role === "admin"}
    <button on:click={() => handleEdit(objet._id)}>Edit</button>
    <button on:click={() => handleDelete(objet._id)}>X</button>
        {/if}
    </li>
{/each}
</ul>
</div>
{#if $role === "admin"}
    <form on:submit|preventDefault={handleAdd}>
    <br />
    <button type="submit">Add</button>
  </form>
{/if}