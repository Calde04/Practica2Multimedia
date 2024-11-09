document.getElementById('toggle').addEventListener('change', function() {
    let checked = this.checked;
    document.body.classList.toggle('darkMode-theme', checked);
    let label_toggle = document.getElementById('label_toggle');
    
    if (checked) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color = 'yellow';
        
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = 'rebeccapurple';
    }
});