const formPendaftaran = document.getElementById('registerForm');

formPendaftaran.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah mendaftar!');
    formPendaftaran.reset();
});