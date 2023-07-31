
// Ini untuk Mengatur agar bisa kembali pas klik overlay
const overlays = document.querySelector('.overlay');
const logo=document.getElementById('logo');
const imgOverlay=document.querySelector('.overlay>img')

imgOverlay.addEventListener('click',function(event){
    event.stopPropagation()
})

// Ini buat ngehentiin itu
imgOverlay.addEventListener('mouseenter',function(event){
    event.stopPropagation()
})

// Ini agar gambar muncul ketika di kklik di logo
logo.addEventListener('click',function(event){
    overlays.style.right= '0';
    overlays.style.bottom='0';
    overlays.style.top="0";
    overlays.style.left="0";
    overlays.style.width= 'auto';
    overlays.style.height= 'auto';
    imgOverlay.style.transform='scale(1)'
    overlays.style.transform='scale(1)'
    imgOverlay.style.transition='0.2s'
    event.preventDefault();
});

// Ini agar gambar ilang saat di klik overlay
overlays.addEventListener('click', function() {
    imgOverlay.style.transform='scale(0)';
    overlays.style.transform='scale(0)';
    imgOverlay.style.transition='0.2s';
});

// Ini mengatur agar cursor berganti jadi pointer
overlays.addEventListener('mouseenter', function() {
  overlays.style.cursor = 'pointer';
});

// Ini mengatur Tampilan tombol yang buat ganti bg
// const tombolWraper = document.querySelectorAll('.container > div > div');
const bg = document.querySelector('input');
const isCheckboxChecked = localStorage.getItem('bgCheckboxChecked');
const tombol = document.querySelectorAll('.container > div > div > a');
const bungkusTombol = document.querySelectorAll('.container > div > div ');


const oren="0px min(9px,3vh) 2px #c99118 , 1px 2px 10px black";
const ungu="0px min(9px, 3vh) rgb(63, 40, 68), 1px 2px 10px black";


bg.addEventListener('change', function() {
    localStorage.setItem('bgCheckboxChecked', this.checked);
  });
  
  // Cek apakah ada nilai sebelumnya di Local Storage saat halaman dimuat
  document.addEventListener('DOMContentLoaded', function() {
    const isCheckboxChecked = localStorage.getItem('bgCheckboxChecked');
    if (isCheckboxChecked === 'true') {
      bg.checked = true;
    } else {
      bg.checked = false;
    }
  });



  
// Cek apakah ada nilai sebelumnya di Local Storage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
const isCheckboxChecked = localStorage.getItem('bgCheckboxChecked');
if (isCheckboxChecked === 'true') {
    bg.checked = true;
    document.body.style.backgroundImage = "url('gmbr/bg5r.jpg')";
    tombol.forEach(e=>{
        e.style.boxShadow = ungu;
    })
} else {
    bg.checked = false;
    document.body.style.backgroundImage = "url('gmbr/bg4.jpg')";
    tombol.forEach(e=>{
        e.style.boxShadow = oren;
    })
}
});

// Simpan nilai checkbox ke Local Storage saat nilai berubah
bg.addEventListener('change', function() {
localStorage.setItem('bgCheckboxChecked', this.checked);
if (this.checked) {
    document.body.style.backgroundImage = "url('gmbr/bg5r.jpg')";
    tombol.forEach(e=>{
        e.style.boxShadow = ungu;
    })
} else {
    document.body.style.backgroundImage = "url('gmbr/bg4.jpg')";
    tombol.forEach(e=>{
        e.style.boxShadow = oren;
    })
}
});

bungkusTombol.forEach(element => {
    element.addEventListener('mouseenter', function() {
        // Mengubah box-shadow dari child pertama dari elemen yang memicu event
        element.children[0].style.boxShadow='none';
    });
    element.addEventListener('mouseleave', function() {
    // Saat mouse keluar (mouseleave), periksa status checkbox
    if (bg.checked) {
        element.children[0].style.boxShadow = ungu;
    }else{
        element.children[0].style.boxShadow=oren;
    }
    });
      
});






// Jika ada nilai sebelumnya, atur status checkbox sesuai


// Ini mengatur pergerakan tombol sheet
const wraperUtama=document.querySelector(".wraper");
const wraperNextPra=document.querySelector('.wraperNext');
const wraperNextHariH=document.querySelector('.wraperNextHariH')
const back=document.querySelector(".container>a");
const text1=document.querySelector('section>section>div:first-child>span');

// Ini mengatur tombol kembali
back.addEventListener('click', function(e) {
    history.back();
    e.preventDefault();
})

// Ini mengambil Hastag # url
function checkHashInURL() {
  return window.location.hash ;
}

// Ini mengatur aksi pada perubahan Hastag 
function updatePerubahan() {
  if (checkHashInURL()=== '#Pra-Hari_H') {
    back.style.left = '16px';
    text1.innerHTML='Pra Hari H ';
    text1.style.color='#c54f4f' ;
    wraperUtama.style.left='-100%';
    wraperNextPra.style.left='0';
    
} else if(checkHashInURL()=== '#Hari_H'){
    back.style.left = '16px';   
    wraperUtama.style.left='-100%';
    text1.innerHTML='HARI H ';
    wraperNextPra.style.left='100%';
    wraperNextHariH.style.left='0';
    
}else{
    text1.innerHTML='';    
    wraperNextHariH.style.left='100%';
    back.style.left = '-20%';
    wraperUtama.style.left='0'
    wraperNextPra.style.left='100%';
}
}

// Ini buat manggil fungsinya
updatePerubahan();

// Ini yang ngejalanin
window.addEventListener('hashchange', function() {
  updatePerubahan();
});

