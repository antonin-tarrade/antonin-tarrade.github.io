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
    import { Category } from './Project.svelte';
    export let projects = [
    {
      name: 'Project Piplup',
      description: 'Description of Project 1',
      link: 'https://project1.com',
      img: '/img/piplup.jpg',
      tag: ['Piplup', 'Cute'],
      category: Category.PERSONAL
    },
    {
      name: 'Project KoupenChan',
      description: 'Description of Project 2',
      link: 'https://project2.com',
      img: '/img/koupenchan.jpg',
      tag: ['KoupenChan', 'Cute'],
      category: Category.SCHOOL
    },
    {
      name: 'Project Pingu',
      description: 'Description of Project 3',
      link: 'https://project3.com',
      img: '/img/penguin.png',
      tag: ['Penguin', 'Cute'],
      category: Category.GAME

    }
  ];

  // Filter.svelte
  import Filter from './Filter.svelte';
  import {createFilter} from './Filter.svelte';


  let filters = [
    createFilter('category', Category.GAME),
    createFilter('category', Category.SCHOOL),
    createFilter('category', Category.PERSONAL),
    createFilter('category', Category.OTHER)
  ];

  let objectsToFilter = projects;
  let ObjectComponent = Project;
  let filterName = 'My Projects';
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

  <div class="projects">
    <Filter {filterName} {filters} {objectsToFilter} {ObjectComponent}/>
  </div>

</main>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: var(--background-color, #19112C);
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
		text-align: justify;
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

  .projects{
    margin-top: 5em;
  }

</style>