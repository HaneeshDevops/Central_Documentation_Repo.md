document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.btn');
    
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});
