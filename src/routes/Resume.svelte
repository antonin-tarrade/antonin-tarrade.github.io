<script>
    import { onMount } from 'svelte';
    import { fetchFileContent } from './utils';

    export let resume = {
        language : '',
        icon : '',
        link : ''
    }

    let iconSVG;
    onMount(async () => {
        iconSVG = await fetchFileContent(resume.icon);
    });

</script>

<a class="resume" href={resume.link} target="_blank"> 
    {@html iconSVG}
    <h2>{resume.language}</h2>
</a>

<style>

    .resume{
        width: 20%;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0em 1em 0em 1em;
        border-radius: 10px;
        background-color: #BE95C4;
        text-decoration: none;
    }

    .resume h2{
        font-size: 1.5em;
        margin: 0;
        color: #ffffff;
    }

    .resume:hover{
        background-color: #E0B1CB;
        text-decoration: none;
    }

    :global(.flag){
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
    }

</style>


