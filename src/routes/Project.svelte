<script context="module">
    export const Category = {
        GAME: 'Game',
        SCHOOL: 'School',
        PERSONAL: 'Personal',
        OTHER: 'Other'
    };
</script>

<script>

    export let data = {
        name : '',
        description : '',
        tag : [],
        video : '',
        img : '',
        link : '',
        category : Category.OTHER
    };

    let project = data;

    import Tag from './Tag.svelte';
</script>

<div class = "card">
    {#if project.video}
    <div class="video-container">
        <video class="video-blur" autoplay loop muted preload="auto">
          <source src={project.video} type="video/mp4">
        </video>
        <video class="video-focus" autoplay loop muted preload="auto">
          <source src={project.video} type="video/mp4">
        </video>
      </div>
    {:else}
    <img src = {project.img} alt = {`Image for ${project.name}`} />
    {/if}
    <div class = "card-info">
        <div class = "main-info">
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank">View Project</a>
        </div>
        <div class = "sub-info">
            <p>{@html project.description}</p>
            <div class= "tags">
                {#each project.tag as tag (tag)}
                    <Tag tag={tag} />
                {/each}
            </div>
        </div>
    </div>
</div>


<style>
    .card {
        position: relative;
        display: inline-block;
        margin: 1em;
        width: 500px;
        height: 400px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }
    .video-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .video-blur {
        position: absolute;
        width: 150%; /* Adjust this value to control the zoom level */
        height: 150%; /* Adjust this value to control the zoom level */
        left: -25%; /* Adjust this value to center the video */
        top: -25%; /* Adjust this value to center the video */
        object-fit: cover;
        filter: blur(8px); /* Adjust this value to control the blur level */
        opacity: 0.8; /* Adjust this value to control the opacity */
    }

    .video-focus {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .card-info {
        position: absolute;
        display : flex;
        flex-direction : column;
        justify-content : flex-end;
        align-items : flex-start;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1em;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-sizing: border-box;
    }



    .card:hover img {
        opacity: 0.5;
    }

    .card:hover .card-info {
        opacity: 1;
    }

    .main-info{
        align-self: center;
        padding-bottom: 5em;
    }

    .main-info h3{
        font-size: 1.5em;
        margin-bottom: 1.5em;
    }

    
    .main-info a{
        color: #ffffff;
        border : solid;
        padding : 0.5em;
        border-radius: 20px;
        border-color : #5E548E;
        text-decoration: none;
    }
    
    .main-info a:hover{
        background-color: #5E548E;
        text-decoration: none;
        transition: background-color 0.4s ease;
    }
    
    .sub-info p{
        font-size: 0.85em;
        text-align: left;
        margin-bottom: 0.1em;
    }
    .tags{
        font-size: 0.8em;
    }

</style>