// Enhanced Projects Section JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Initial animation for projects when page loads
    setTimeout(() => {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, 100 * index);
        });
    }, 500);
    
    // Project filtering with improved animations
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Animate out all cards first
            projectCards.forEach(card => {
                card.classList.remove('animate-in');
                card.classList.add('animate-out');
            });
            
            // Delay showing the filtered cards
            setTimeout(() => {
                projectCards.forEach((card, index) => {
                    if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                        setTimeout(() => {
                            card.style.display = 'flex';
                            card.classList.remove('animate-out');
                            card.classList.add('animate-in');
                        }, 50 * index);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, 300);
        });
    });
    
    // Add hover effects for project tech tags
    const techTags = document.querySelectorAll('.project-tech span');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-5px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0)';
        });
    });
});
