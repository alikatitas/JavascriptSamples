class MigrosBase{
    indirimOrani =20
    constructor(isim,soyisim, kartVarmi, urunler){
     this.isim=isim
     this.soyisim=soyisim
     this.kartVarmi=kartVarmi
     this.urunler=urunler
    
    }

    Hesapla(){
        let odenecekTutar=0
        if (this.UrunleriKontrolEt(this.urunler)) {
            if (this.kartVarmi) {
                //Kartı varsa
                // Sepette ürünler olduğu durum
                this.urunler.forEach(urun => {
                    odenecekTutar+=(urun.fiyat*(100-this.indirimOrani)/100)
                });
            }
            else{
                //kartı yoksa
                this.urunler.forEach(urun => {
                    odenecekTutar+=(urun.fiyat)
                }); 
            }
        }else{
            // Sepette ürünler olmadığı durum
            alert('En az bir tane ürün satın almalısınız...')
        }
        return odenecekTutar
    }

    UrunleriKontrolEt(urunler){
        if (urunler!=null && urunler.length>0) {
            return true
        }
        return false
    }
}