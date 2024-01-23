const toggle_btn = document.getElementById('checkbox');

toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
