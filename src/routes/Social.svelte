<script>
    import { onMount } from 'svelte';
    import { fetchFileContent } from './utils';

    export let social = {
        name: '',
        link: '',
        svgPath: ''
    }

    let svgContent;

  onMount(async () => {
    svgContent = await fetchFileContent(social.svgPath);
  });

</script>


<a class="social" href={social.link} target="_blank">
    <div class="icon">{@html svgContent}</div>
    <p>{social.name}</p>
</a>




<style>



    .social {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: background-opacity 0.3s ease;
        border : 1px solid;
        border-color: #BE95C4;
        text-decoration: none;
        margin : 0.5em;
    }
    
    .social .icon {
        margin: 0.5em;
        color: #BE95C4;
        /* transition : color 0.3s ease; */
    }

    .social p{
        font-size: 1em;
        margin-right: 0.5em;
        color: #ffffff;
    }


    .social:hover {
        opacity: 0.8;
        cursor: pointer;
        background-color: #BE95C4;
        transition: background-color 0.3s ease;
        text-decoration: none;
    }

    .social:hover .icon {
        color: #ffffff;
    }
</style>