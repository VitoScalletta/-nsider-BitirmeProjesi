function animateOnScroll() {
    var elements = document.querySelectorAll('.kart');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      if (position - windowHeight <= 0) {
        element.classList.add('animate');
      }
    }
  }
  
  window.addEventListener('scroll', animateOnScroll);
  
  function hesapla() {
    var kilo = document.KitleForm.kilo.value
    var boy = document.KitleForm.boy.value
    if(kilo > 0 && boy > 0){  
    var sonuc = kilo/(boy/100*boy/100)
    document.KitleForm.endeks.value = sonuc
    if(sonuc < 18.5){
    document.KitleForm.islemsonucu.value = "Zayıfsınız"
    }
    if(sonuc > 18.5 && sonuc < 25){
    document.KitleForm.islemsonucu.value = "Gayet Sağlıklı."
    }
    if(sonuc > 25 && sonuc < 29){
    document.KitleForm.islemsonucu.value = "Fazla Kilolusunuz."
    }
      if(sonuc > 30 && sonuc <39){
    document.KitleForm.islemsonucu.value = "Obezsiniz."
    }
        if(sonuc > 40){
    document.KitleForm.islemsonucu.value = "Fazla Obezsiniz."
    }
    }
    else{
    alert("HATA lütfen tekrar deneyin")
    }
    }