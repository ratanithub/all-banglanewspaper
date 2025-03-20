document.addEventListener("DOMContentLoaded", function() {
    const newsList = document.getElementById("news-list");
    const apiKey = "YOUR_REAL_API_KEY"; // Replace with a valid API key
    const url = `https://newsapi.org/v2/top-headlines?country=bd&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            newsList.innerHTML = "";
            if (data.articles && data.articles.length > 0) {
                data.articles.slice(0, 5).forEach(article => {
                    let li = document.createElement("li");
                    li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
                    newsList.appendChild(li);
                });
            } else {
                newsList.innerHTML = "<li>No news available</li>";
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            newsList.innerHTML = "<li>Error loading news. Please try again later.</li>";
        });
});
