<script context="module">
    export const Category = {
        GAME: 'Game',
        SCHOOL: 'School',
        PERSONAL: 'Personal',
        OTHER: 'Other'
    };
</script>

<script>

    export let project = {
        name : '',
        description : '',
        tag : [],
        img : '',
        link : '',
        category : Category.OTHER
    };

    import Tag from './Tag.svelte';
</script>

<div class = "card">
    <img src = {project.img} alt = {`Image for ${project.name}`} />
    <div class = "card-info">
        <div class = "main-info">
            <h3>{project.name}</h3>
            <a href={project.link}>Visit Project</a>
        </div>
        <div class = "sub-info">
            <p>{project.description}</p>
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
        width: 450px;
        height: 450px;
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

    .main-info a{
        color: #ffffff;
        border : solid;
        padding : 0.5em;
        border-radius: 20px;
        border-color : #5E548E;
    }

    .main-info a:hover{
        background-color: #5E548E;
        text-decoration: none;
        transition: background-color 0.4s ease;
    }

    .tags{
        font-size: 0.8em;
    }
</style>