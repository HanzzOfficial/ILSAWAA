// Mengatur Hamburger Menu pada tampilan Mobile/Tablet
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu jika salah satu link diklik (khusus mobile)
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Efek Navbar Sticky saat di-scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 163, 225, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Fungsi untuk memasukkan data ke HTML secara otomatis
document.getElementById('g-name').innerText = guildInfo.name;
document.getElementById('g-level').innerText = guildInfo.level;
document.getElementById('g-ember').innerText = guildInfo.ember;

