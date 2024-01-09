<!-- Filter.svelte -->
<!-- 
This Svelte component represent a generic FilterBar 
    filters : The filters to apply
    objectToFilter : the object to filter (must have a field corresponding to the filters)
    ObjectComponent : The svelte Component for displaying the results of filtering. (/!\ Must have a data prop /!\)
-->

<script context="module">
    export function createFilter(f, v) {
        return {name:v, field:f, value:v};
    }
</script>

<script>

    export let filters = [];
    export let objectsToFilter = [];
    export let ObjectComponent = {};
    export let filterName = '';

    let filteredObjects;
    let activeFilter = null;

    $: filteredObjects = applyFilters(objectsToFilter, activeFilter);

    function applyFilters(objects, filter) {
        if (!filter) {
            return objects;
        }

        return objects.filter(object => {
            // Implement your specific condition for each filter
            return object[filter.field] === filter.value;
        });
    }

    function resetFilter() {
        activeFilter = null;
    }

</script>

<style>
    .filter-button {
        margin: 5px 4px 0px 4px;
        cursor: pointer;
        padding: 4px 8px;
        background : none;
        border : none;
        color : #ffffff;
        text-align: center;
        font-size: 1em;
        transition: font-size 0.3s ease;
        
    }
    
    .filter-button.active {
        background-color: #E0B1CB;
        border-radius: 5px;
        font-weight: bold;
        font-size: 1.3em;
    }

    .filterBar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name {
        margin-right: 1em;
    }

</style>

<div>
    <div class = "filterBar">
        <h1 class = "name">{filterName}</h1>
        <!-- Display filter buttons dynamically -->
        <button
            class="filter-button {activeFilter === null ? 'active' : ''}"
            on:click={resetFilter}
        >
            All
        </button>
        {#each filters as filter (filter.name)}
            <button
                class="filter-button {activeFilter === filter ? 'active' : ''}"
                on:click={() => activeFilter = filter}
            >
                {filter.value}
            </button>
        {/each}
    </div>

    <!-- Display the filtered objects -->
    <ul>
        {#each filteredObjects as object (object.name)}
            <svelte:component this={ObjectComponent} data = {object}/>
        {/each}
    </ul>
</div>
