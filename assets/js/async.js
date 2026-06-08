
document.addEventListener("DOMContentLoaded", () => {
display_results();
});
async function display_results()
{
    const fetch_results = await fetch("./data.json");
    const results = await fetch_results.json();
    console.log(results);
}