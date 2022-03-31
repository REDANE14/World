button = document.getElementById("btn");


button.addEventListener('click', function() {
    changeText = document.getElementById('text');
    changeText.textContent = "I love you!";
    document.getElementById('btn').disabled = true;
});