<!-- Nav.svelte -->

<script>

    // ----Scroll func----
    import { scrollTo } from './utils';

    export let links = {};
</script>
  
  <nav>
    <ul>
      {#each Object.keys(links) as link (link)}
        <li><a href={links[link]} use:scrollTo={link.toLowerCase()}>{link}</a></li>
      {/each}
    </ul>
  </nav>
  
<style>
    nav {
        margin-bottom: 1em;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    
    li {
        display: inline-block;
        margin-right: 2em;
    }
    
    li:last-child {
        margin-right: 0;
    }
    
    a {
        text-decoration: none;
        color: #ffffff;
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>