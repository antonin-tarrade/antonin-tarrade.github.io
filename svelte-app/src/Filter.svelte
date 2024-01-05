<!-- Filter.svelte -->


<script context="module">
    export function createFilter(field, value) {
        return { field, value };
    }
</script>

<script>
    export let filters = [];
    export let objectsToFilter = [];

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
    {#each filters as filter (filter.field)}
        <button
            class="filter-button {activeFilter && activeFilter.field === filter.field ? 'active' : ''}"
            on:click={() => activeFilter = filter}
        >
            {filter.field}
        </button>
    {/each}

    <!-- Display the filtered objects -->
    <p>Filtered Objects:</p>
    <ul>
        {#each filteredObjects as object (object.id)}
            <li>{object.name}</li>
            <!-- Adjust the property names based on your actual data structure -->
        {/each}
    </ul>
</div>
