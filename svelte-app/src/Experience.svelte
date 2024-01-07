<script>

    import { onMount } from 'svelte';
    import { fetchFileContent } from './utils';
    import Tag from './Tag.svelte';

    export let experience = {
        role: '',
        company: {
            name : '',
            logo : '',
            site : ''
        },
        year: '',
        description: '',
        country : '',
        city : '',
        tags : [],
        document : {
            name : '',
            link : ''
        }
    }

    let isOpen = false;
    let plusSvg;
    let minusSvg;
    let pinSvg;
    let exportSvg;
    let documentSvg;

    onMount(async () => {
        plusSvg = await fetchFileContent('/icons/plus.svg');
        minusSvg = await fetchFileContent('/icons/minus.svg');
        pinSvg = await fetchFileContent('/icons/pin.svg');
        exportSvg = await fetchFileContent('/icons/export.svg');
        documentSvg = await fetchFileContent('/icons/document.svg');
    });

</script>

<div class = main-container>

    <div class = "small-container {isOpen ? 'opened' : ''}" >  
        <h2>{experience.role} at {experience.company.name}</h2>
        <div class ="right-side">
            <h3>{experience.year}</h3>
            <button class="plus-minus-button" on:click={()=> isOpen = !isOpen}>
                {@html isOpen ? minusSvg : plusSvg}
            </button>
        </div>
    </div>

    <div class="big-container {isOpen ? 'visible' : ''}">
        <div class="upper-part">
            <div class="left-side">
                <div class="top-info">
                    {@html pinSvg}
                    <h2>{experience.city}, {experience.country}</h2>
                </div>
                <div class="main-info">
                    <p>{experience.description}</p>
                </div>
                <div class="tags">
                    {#each experience.tags as tag (tag)}
                    <Tag {tag}/>
                    {/each}
                </div>
            </div>
            <div class="company-info">
                <img src={experience.company.logo} alt="Logo for the company">
                <a class ="company-website" href={experience.company.site} target="_blank">
                    {@html exportSvg}
                    <p>Visit site</p>
                </a>
            </div>
        </div>
        <div class ="document">
            <a href={experience.document.link} target="_blank">
                {@html documentSvg}
                <p>See {experience.document.name}</p>
            </a>
        </div>
    </div>
</div>


<style>
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
    }

    .small-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        background-color: #5E548E;
        border-radius: 10px;
        margin-bottom: 1em;
        transition: background-color 0.3s ease;
    }

    .small-container .right-side{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .small-container .right-side h3{
        margin-right: 1em;
    }

    .small-container .plus-minus-button{
        background: none;
        border: none;
        margin-right: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        margin : 0em 1em 0em 0em;
    }

    .small-container h2{
        margin-left: 1em;
    }

    .small-container.opened{
        background-color: #9F86C0;
        transition: background-color 0.3s ease;
    }

    .big-container{
        display: none;
        width: 60%;
        background-color: rgba(94, 84, 142, 0.5);
        border-radius: 10px;
    }
    .big-container.visible{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .big-container .upper-part{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .big-container .top-info{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1em 0em 0em 1em;
    }

    .big-container .top-info h2{
        font-size: 1.2em;
        margin-left: 0.5em;
    }

    .big-container .main-info{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em 1em 1em 1em;
    }

    .big-container .main-info p{
        text-align: justify;
        margin: 0em 1em 0em 1em;
    }

    .big-container .company-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1em 1em 0em 1em;
    }

    .big-container .company-info img{
        width: 8em;
        height: 8em;
        margin-bottom: 0.5em;
    }

    .big-container .company-info .company-website{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    
    
    .big-container .company-info .company-website p{
        margin-left: 0.5em;
        color : #ffffff;
    }

    .big-container .company-info .company-website:hover{
        text-decoration: none;
    }

    .big-container .company-info .company-website:hover p{
        color: #BE95C4;
    }

    .big-container .tags{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 1em;
    }


    .big-container .document a{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1em 1em 1em 1em;
    }

    .big-container .document a p{
        margin-left: 0.5em;
        color : #ffffff;
    }


    .big-container .document a:hover{
        text-decoration: none;
    }

    .big-container .document a:hover p{
        color: #BE95C4;
    }




    /*----Icons---- */

    :global(.experience-icon.plus, .experience-icon.minus) {
        width: 1em;
        height: 1em;
    }

    :global(.experience-icon.pin, .experience-icon.export, .experience-icon.document) {
        width: 1.5em;
        height: 1.5em;
    }

    :global(.experience-icon *){
        stroke : #BE95C4;
        color : #BE95C4;
    }

    :global(.experience-icon.pin *){
        stroke : none;
        fill : #BE95C4;
    }

    :global(.experience-icon.plus *, .experience-icon.minus *){
        stroke : #ffffff;
    }

    /* ------------- */

</style>