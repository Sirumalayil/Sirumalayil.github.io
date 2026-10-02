const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀' : '☾';
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
});

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.querySelectorAll('.filter-pills button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-pills button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.skill').forEach(skill => {
      skill.classList.toggle('hide', filter !== 'all' && skill.dataset.category !== filter);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
