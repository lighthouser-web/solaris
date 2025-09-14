document.addEventListener("DOMContentLoaded", function () {
  // Only modify classes if screen width is less than 996px
  if (window.innerWidth < 996) {
    const servicioItems = document.querySelectorAll('#ul-servicios li.moving-servicio');
    servicioItems.forEach(item => {
      item.classList.remove('moving-servicio');
      item.classList.add('moving-text');
    });
  }

  const movingTexts = document.querySelectorAll('.moving-text');
  const movingTextsSlow = document.querySelectorAll('.moving-text-slow');
  const fadeInElements = document.querySelectorAll('.fade-in-element');
  const fadeInElementsH1 = document.querySelectorAll('.fade-in-element-h1');
  const orangeText = document.querySelectorAll('.orange-text');
  const eficienciaLi = document.querySelectorAll('.eficiencia-li');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01 });

  movingTexts.forEach(element => {
    observer.observe(element);
  });

  movingTextsSlow.forEach(element => {
    observer.observe(element);
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });

  fadeInElementsH1.forEach(element => {
    observer.observe(element);
  });

  orangeText.forEach(element => {
    observer.observe(element);
  });

  eficienciaLi.forEach(element => {
    observer.observe(element);
  });
});
