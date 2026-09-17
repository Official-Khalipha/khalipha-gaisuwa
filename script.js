let c=0;
function tasbih(){c++;document.getElementById('count').innerText=c;if(c%33==0){if(navigator.vibrate)navigator.vibrate(100);alert('Alhamdulillah! Ka cika 33')}}
function reset(){c=0;document.getElementById('count').innerText=0}
const ayahs=[{ar:"وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",ha:"Duk wanda yayi taqawa, Allah zai sanya masa mafita",ref:"Suratu At-Talaq: 2"},{ar:"إِنَّ مَعَ الْعُسْرِ يُسْرًا",ha:"Lallai tare da tsanani akwai sauki",ref:"Suratu Ash-Sharh: 6"},{ar:"وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",ha:"Ka tunatar, tunatarwa tana amfanar muminai",ref:"Suratu Adh-Dhariyat: 55"},{ar:"فَاذْكُرُونِي أَذْكُرْكُمْ",ha:"Ku tuna ni, ni ma zan tuna ku",ref:"Suratu Al-Baqara: 152"},{ar:"أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",ha:"Sai da ambaton Allah ne zukata ke natsuwa",ref:"Suratu Ar-Ra'ad: 28"},{ar:"وَتَوَكَّلْ عَلَى اللَّهِ",ha:"Ka dogara ga Allah",ref:"Suratu Al-Ahzab: 3"},{ar:"وَاللَّهُ خَيْرُ الرَّازِقِينَ",ha:"Allah shine mafi alherin masu arzuta",ref:"Suratu Al-Jumu'a: 11"}];
const hadisai=[{ar:"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",ha:"Mafi alherinku shine wanda ya koyi Al-Qur'ani kuma ya koyar da shi",ref:"Bukhari"},{ar:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",ha:"Lallai ayyuka suna bisa niyya",ref:"Bukhari & Muslim"},{ar:"مَنْ لَا يَرْحَمُ لَا يُرْحَمُ",ha:"Wanda baya jin kai, ba za a ji kansa ba",ref:"Bukhari"},{ar:"الدِّينُ النَّصِيحَةُ",ha:"Addini Nasiha ne",ref:"Muslim"},{ar:"لَا تَغْضَبْ",ha:"Kada kayi fushi",ref:"Bukhari"},{ar:"تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ",ha:"Murmushinka a fuskar dan uwanka sadaka ce",ref:"Tirmidhi"},{ar:"مَنْ صَمَتَ نَجَا",ha:"Wanda yayi shiru ya tsira",ref:"Tirmidhi"}];
let today=new Date();let dayNum=today.getDay();
document.getElementById("ayah-ar").innerText=ayahs[dayNum].ar;
document.getElementById("ayah-ha").innerText=ayahs[dayNum].ha;
document.getElementById("ayah-ref").innerText=ayahs[dayNum].ref;
document.getElementById("hadisi-ar").innerText=hadisai[dayNum].ar;
document.getElementById("hadisi-ha").innerText=hadisai[dayNum].ha;
document.getElementById("hadisi-ref").innerText=hadisai[dayNum].ref;
document.getElementById("ranar").innerText=today.toLocaleDateString('ha-NG',{weekday:'long'});
try{document.getElementById('greg-date').innerText="📅 "+today.toLocaleDateString('ha-NG',{weekday:'long',day:'numeric',month:'long',year:'numeric'});document.getElementById('hijri-date').innerText="☪️ "+new Intl.DateTimeFormat('ha-NG-u-ca-islamic',{day:'numeric',month:'long',year:'numeric'}).format(today);}catch(e){document.getElementById('hijri-date').innerText="☪️ "+today.toLocaleDateString('ar-SA-u-ca-islamic',{day:'numeric',month:'long',year:'numeric'});}

// === GYARAN KWANAN WATA - BOKO DA HIJRI ===
function updateDates(){
  const now = new Date();
  
  // 1. Boko - Turanci
  const boko = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  // 2. Hijri - Musulunci (Amfani da Intl)
  const hijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(now);

  // Saka su a page
  const bokoEl = document.getElementById('boko-date');
  const hijriEl = document.getElementById('hijri-date');
  
  if(bokoEl) bokoEl.textContent = boko;
  if(hijriEl) hijriEl.textContent = hijri + ' AH';

  // Idan kana da id daya kacal mai suna 'date-bar' to:
  const dateBar = document.querySelector('.date-bar');
  if(dateBar){
     dateBar.innerHTML = `<span>📅 ${boko}</span><span style="color:#1a5c36;font-weight:bold">🕌 ${hijri} AH</span>`;
  }
}
updateDates();
