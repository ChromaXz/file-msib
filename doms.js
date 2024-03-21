function salam(){
    let siswa = document.getElementById('frm').nama.value;
    let kelas = document.getElementById('frm').kelas.value;
    let input = 'Selamat Pagi ' + siswa + '<br> Kelas' + kelas;
    let no_input = 'Maaf Nama atau Kelas anda belum terisi';
    let hasil = (siswa && kelas !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}