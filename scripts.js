// scripts.js

// Counter Animation Function
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const animationDuration = 2000;
    let animationStarted = false;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const startTime = Date.now();
            
            const updateCount = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / animationDuration, 1);
              const currentCount = Math.floor(progress * target);
              
              counter.innerText = currentCount;
              
              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target;
              }
            };
            
            requestAnimationFrame(updateCount);
          });
        }
      });
    }, { threshold: 0.5 });
  
    counters.forEach(counter => {
      observer.observe(counter.parentElement);
    });
  }
  
  // Read More/Less Function
  function initReadMore() {
    const btn = document.querySelector('.read-more-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            const moreText = document.querySelector('.more-text');
            const isHidden = moreText.style.display === 'none';
            
            moreText.style.display = isHidden ? 'inline' : 'none';
            btn.textContent = isHidden ? 'Read Less' : 'Read More';
            
            // Optional: Smooth scroll to maintain context
            if (isHidden) {
                moreText.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            });
          }
  }

  // Read More/Less Function
  function initMobileMenuToggle() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    toggleButton.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
    
    // Close menu when clicking on links (optional)
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
      });
    });
  }
  
  // Initialize all functions when DOM loads
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenuToggle();
    initCounterAnimation();
    initReadMore();
    // Add more initializers here
  });