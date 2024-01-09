<script>

    export let letter = {
        company: '',
        language: '',
        link: ''
    }

</script>


<a class="letter" href={letter.link} target="_blank">
    <svg class="letter" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6.10156C19.3001 6.22944 20.1752 6.51846 20.8284 7.17164C22 8.34322 22 10.2288 22 14.0001C22 17.7713 22 19.6569 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.6569 2 17.7713 2 14.0001C2 10.2288 2 8.34322 3.17157 7.17164C3.82475 6.51846 4.69989 6.22944 6 6.10156" stroke="#1C274C" stroke-width="1.5"/>
    <path d="M10 6H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M11 9H13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M8.1589 11.7991L7.43926 11.1994C6.73152 10.6096 6.37764 10.3147 6.18882 9.91156C6 9.50842 6 9.04778 6 8.1265V7C6 4.64298 6 3.46447 6.73223 2.73223C7.46447 2 8.64298 2 11 2H13C15.357 2 16.5355 2 17.2678 2.73223C18 3.46447 18 4.64298 18 7V8.1265C18 9.04778 18 9.50842 17.8112 9.91156C17.6224 10.3147 17.2685 10.6096 16.5607 11.1994L15.8411 11.7991C14.0045 13.3296 13.0861 14.0949 12 14.0949C10.9139 14.0949 9.99553 13.3296 8.1589 11.7991Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M6 10L8.1589 11.7991C9.99553 13.3296 10.9139 14.0949 12 14.0949C13.0861 14.0949 14.0045 13.3296 15.8411 11.7991L18 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <h2>{letter.company}-{letter.language}</h2>
</a>



<style>

    .letter{
        width: 30%;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0em 1em 0em 1em;
        text-decoration: none;
    }

    .letter h2{
        font-size: 1.5em;
        margin: 0;
        color: #ffffff;
    }

    .letter svg{
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
    }

    .letter svg *{
        stroke: #5E548E;
    }

    .letter:hover{
        background-color: rgb(224, 177, 203, 0.3);
        text-decoration: none;
        border-radius: 10px;
    }

</style>