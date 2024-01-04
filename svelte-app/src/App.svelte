<script>
    // Nav.svelte
    import Nav from './Nav.svelte';
    export let navLinks = {
        'About': '/',
        'Projects': '/projects',
        'Contact': '/contact',
        'PPP': '/ppp'
    };

    // Projects.svelte
    import Project from './Project.svelte';
    export let projects = [
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      technologies: 'Tech 1, Tech 2',
      link: 'https://project1.com',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      technologies: 'Tech 3, Tech 4',
      link: 'https://project2.com',
    },
  ];
</script>

<main class="main-content">
    <Nav links={navLinks} />
    <div class="name">
        <h1 class="name-title">ANTONIN TARRADE</h1>
        <h2 class="name-subtitle">Student in Computer Science, Aspiring Game developer & Software developer</h2>
    </div>
	<div class = "about">
		<h1 class="about-title"> About me </h1>
        <!-- TODO : Change text content -->
		<p class="about-text"> I am a student in Computer Science at the ENSEIHT, France. I am currently in my second year of Engineer's degree. 
		I am passionate about video games and I am currently learning how to make them. I am also interested in software development and I am currently learning how to make them.
		I am currently looking for an internship in the field of video games or software development. </p>
	</div>
    <h1>My Projects</h1>
  {#each projects as project (project.name)}
    <Project {project} />
  {/each}
</main>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: var(--background-color, #32353C);
		color: var(--text-color, #ffffff);
    }

    .main-content {
        text-align: center;
        padding: 1em;
        max-width: 1200px;
        margin: 0 auto;
    }

    .name-title,
    .name-subtitle {
        font-weight: 100;
    }

    .name-title {
        font-size: 4em;
        margin-bottom: 0.1em;
    }

    .name-subtitle {
        font-size: 1em;
        margin-top: 0.1em;
    }

	.about{
		text-align: left;
	}

	.about-title{
		font-size: 2em;
		margin-bottom: 0.1em;
	}

	.about-text{
		font-size: 1em;
		margin-top: 0.1em;
		max-width: 30em;
	}

</style>