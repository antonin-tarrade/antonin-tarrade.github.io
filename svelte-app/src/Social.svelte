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


<div class = "social">
    <a href={social.link} target="_blank">
        <button>
            <div class="icon">{@html svgContent}</div>
            <p>{social.name}</p>
        </button>
    </a>
</div>




<style>

    .social {
        display: inline-block;
        margin: 1em;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .social button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: opacity 0.3s ease;
        background : none;
        border-color: #BE95C4;
    }
    
    .social .icon {
        margin-right: 0.5em;
        color: #BE95C4;
    }

    .social p {
        font-size: 1em;
        margin-right: 0.5em;
        color: #ffffff;
    }
    .social a:hover{
        text-decoration: none;
    }
    .social button:hover {
        opacity: 0.8;
        cursor: pointer;
        background-color: #BE95C4;
        transition: background-color 0.4s ease;
    }

    .social button:hover .icon {
        color: #ffffff;
    }


</style>