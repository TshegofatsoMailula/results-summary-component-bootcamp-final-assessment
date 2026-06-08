
document.addEventListener("DOMContentLoaded", () => {
display_results();
});
async function display_results()
{
    const fetch_results = await fetch("./data.json");
    const results = await fetch_results.json();
    const results_div = document.getElementById("results");
    let average = 0;
    results.forEach((result)=>{
        const item = document.createElement("div");
        item.classList.add("category-card");
        item.style.backgroundColor = result.background;
        item.style.color = result.text;
        item.innerHTML = `
            <label class='category'><img src='${result.icon}' alt='${result.category} icon'></img>${result.category}</label>
            <label class='score'><span>${result.score}</span> / 100</label>
        `;
        results_div.appendChild(item);
        average = average + result.score;
    });
    average = average / results.length;
    average = Math.round(average);
    document.getElementById("average").innerHTML = average;
}