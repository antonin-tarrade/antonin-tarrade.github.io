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
    /* Add your styling for the filter bar if needed */
    .filter-button {
        margin-right: 8px;
        cursor: pointer;
        padding: 4px 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
    }

    .filter-button.active {
        background-color: #ddd;
    }
</style>

<div>
    <!-- Display filter buttons dynamically -->
    <button
        class="filter-button {activeFilter === null ? 'active' : ''}"
        on:click={resetFilter}
    >
        All
    </button>
    {#each filters as filter (filter.name)}
        <button
            class="filter-button {activeFilter && activeFilter.field === filter.field ? 'active' : ''}"
            on:click={() => activeFilter = filter}
        >
            {filter.value}
        </button>
    {/each}

    <!-- Display the filtered objects -->
    <ul>
        {#each filteredObjects as object (object.name)}
            <svelte:component this={ObjectComponent} data = {object}/>
        {/each}
    </ul>
</div>
