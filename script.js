document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('.page-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');

            // 1. Fade out current active section
            const currentActive = document.querySelector('.page-section.active');
            currentActive.style.opacity = '0';
            currentActive.style.transform = 'translateY(-20px)';

            // 2. Wait for fade out, then switch
            setTimeout(() => {
                sections.forEach(section => {
                    section.classList.remove('active');
                    section.style.display = 'none';
                });

                const newSection = document.getElementById(targetSection);
                newSection.style.display = 'flex';
                
                // Trigger reflow
                newSection.offsetHeight; 

                newSection.classList.add('active');
                newSection.style.opacity = '1';
                newSection.style.transform = 'translateY(0)';
                
                // Update active link styling
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }, 400); 
        });
    });
});
