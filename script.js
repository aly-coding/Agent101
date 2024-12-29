document.getElementById('clickMeButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Search functionality
document.getElementById('searchField').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
});
