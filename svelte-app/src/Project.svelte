<script>
    export let project = {
        name : '',
        description : '',
        technologies : '',
        link : ''
    };
</script>

<div>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p>Technologies: {project.technologies}</p>
    <a href={project.link}>Visit Project</a>
  </div>