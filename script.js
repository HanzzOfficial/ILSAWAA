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

// Fitur Tabs untuk Roster Tim (10 Tim)
const tabBtns = document.querySelectorAll('.tab-btn');
const teamContents = document.querySelectorAll('.team-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus class active dari semua tombol dan konten
        tabBtns.forEach(b => b.classList.remove('active'));
        teamContents.forEach(content => content.classList.remove('active'));

        // Tambahkan class active ke tombol yang diklik
        btn.classList.add('active');

        // Ambil ID target dari atribut data-target
        const targetId = btn.getAttribute('data-target');
        
        // Tampilkan konten tim yang sesuai
        document.getElementById(targetId).classList.add('active');
    });
});