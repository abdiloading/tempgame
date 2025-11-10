const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active states
    navItems.forEach(nav => nav.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Activate clicked section
    item.classList.add('active');
    document.getElementById(item.dataset.target).classList.add('active');
  });
});
const categoryHeaders = document.querySelectorAll('.nav-category-header');

categoryHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    parent.classList.toggle('open');
  });
});
