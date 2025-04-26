let mesaj=
`
Migros'a Hoşgeldiniz..
Money kartınız var mı ?
1-Evet
2-Hayır
`
//müşterinin ürünlerini tutacak dizi
const urunler=[
    {
        urunIsmi:'Süt',
        fiyat:15
    },
    {
        urunIsmi:'Bez',
        fiyat:65
    },
    {
        urunIsmi:'Et',
        fiyat:100
    }
]
let sonuc=confirm(mesaj)

let odenecekTutar

// Sonuç true ise money card vardır
if (sonuc) {
    //money kart varsa müşteri oluştur
    let isim=prompt("İsminizi girin : ")
    let soyisim=prompt("Sayisminizi girin :")
    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
    odenecekTutar= musteri.Hesapla()
    alert(
        `
        Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar}
        `)
}else{
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar=musteri.Hesapla()
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}