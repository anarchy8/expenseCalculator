const ürünInput = document.getElementById("ürün-input");
const fiyatInput = document.getElementById("fiyat-input");
const ekleBtn = document.getElementById("ekle-btn");
const checkbox = document.getElementById("check-box");
const hesapSonuc = document.getElementById("hesap-sonuc");
const container = document.getElementById("container");
const giderBoxes = document.getElementById("gider-boxes");

let harcamaToplam = 0;

const hesaplaUla = () => {
  if (ürünInput.value == "" || fiyatInput.value == "") {
    alert("boş bırakılamaz");
  } else {
    
    let giderbox = document.createElement("div");
    giderbox.classList.add("gider-box");
    giderBoxes.appendChild(giderbox);

    let ürün = document.createElement("h2");
    ürün.innerText = ürünInput.value;
    giderbox.appendChild(ürün);

    let ürünFiyat = document.createElement("h2");
    ürünFiyat.innerText = Number(fiyatInput.value);
    giderbox.appendChild(ürünFiyat);
       
    harcamaToplam = Number(fiyatInput.value) + harcamaToplam;
    hesapSonuc.innerText = "toplam harcama : " + harcamaToplam;

    let divİcons = document.createElement("div");
    divİcons.classList.add("icons");
    giderbox.appendChild(divİcons);

    let silButon = document.createElement("i");
    silButon.classList.add("bi-trash3-fill");
    divİcons.appendChild(silButon);
    
    const sil = () =>{
      let silinecekFiyat = Number(ürünFiyat.innerText);
      harcamaToplam = harcamaToplam - silinecekFiyat;
      hesapSonuc.innerText = "toplam harcama : " +harcamaToplam;
      giderbox.remove();
    } 
    
    silButon.addEventListener("click", sil)

  }
};

ekleBtn.addEventListener("click", hesaplaUla);
