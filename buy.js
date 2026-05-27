document.addEventListener('DOMContentLoaded', function() {
    const semuaTombolBeli = document.querySelectorAll('.buy-btn');
    console.log("Jumlah tombol buy yang ditemukan: " + semuaTombolBeli.length);
    semuaTombolBeli.forEach(function(tombol) {
        tombol.addEventListener('click', function() {
            alert('Terima kasih telah membeli!');
        });
    });
});