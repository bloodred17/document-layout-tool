<script lang="ts">
    import { invoke } from '@tauri-apps/api/tauri'

    let name = ''
    let greetMsg = ''

    async function greet() {
        greetMsg = await invoke('greet', { name })
    }
</script>

<div>
    <input id="greet-input" placeholder="Enter a name..." bind:value="{name}" />
    <button on:click="{greet}">Greet</button>
    <p>{greetMsg}</p>
</div>



<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>

<button class="btn btn-primary">Button</button>

<style lang="postcss">
    :global(html) {
        background-color: theme('colors.gray.100');
    }
</style>