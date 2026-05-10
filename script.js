// CURSOR
const cursor=document.getElementById('cursor');
const cursorDot=document.getElementById('cursorDot');
if(cursor&&cursorDot){
  document.addEventListener('mousemove',e=>{
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
    cursorDot.style.left=e.clientX+'px';
    cursorDot.style.top=e.clientY+'px';
  });
}
function refreshCursorTargets(){
  if(!cursor) return;
  document.querySelectorAll('button,a,.chip,.cafe-card,.community-card,.price-btn,.hero-slide-card,.modal-close').forEach(el=>{
    if(el.dataset.cursorReady) return;
    el.dataset.cursorReady='true';
    el.addEventListener('mouseenter',()=>{cursor.style.transform='translate(-50%,-50%) scale(1.8)';cursor.style.borderColor='var(--caramel)'});
    el.addEventListener('mouseleave',()=>{cursor.style.transform='translate(-50%,-50%) scale(1)';cursor.style.borderColor='var(--cinnamon)'});
  });
}
refreshCursorTargets();

const cafeSeeds=[
  ['📚','Kopi & Kata Literasi','Grogol','WFC Pick','wfc',40,100,4.9,312,0.8,23,['wfc','local'],['wifi','colokan','ac','meeting','tenang'],['WFC','WiFi 100mbps','UMKM Lokal']],
  ['🌿','Daun & Biji Coffee','Palmerah','Disability Friendly','accessible',30,80,4.6,187,2.0,21,['family','accessible'],['parkir','outdoor','ac','cozy'],['Family Friendly','♿ Disability Friendly','Outdoor']],
  ['🕯️','Sudut Tujuh Belas','Cengkareng','Live Music','music',35,90,4.5,243,3.1,1,['hangout','music','night','local'],['smoking','ramai','outdoor'],['Nongkrong','Live Music','UMKM Lokal']],
  ['☕','Ruang Kopi Senja','Kebon Jeruk','WFC Pick','wfc',25,60,4.8,421,1.2,22,['wfc','local'],['wifi','colokan','ac','tenang'],['WFC','WiFi 50mbps','UMKM Lokal']],
  ['🥐','Butter & Brew','Puri Indah','Family Spot','family',45,120,4.7,266,2.6,22,['family'],['parkir','ac','cozy','colokan'],['Family Friendly','Pastry','Parkir']],
  ['🌙','Midnight Roast','Tanjung Duren','Buka Malam','night',30,75,4.4,198,1.5,2,['night','hangout'],['wifi','smoking','ramai'],['Buka Malam','Nongkrong','WiFi']],
  ['🎧','Lo-Fi Beans','Duri Kepa','WFC Pick','wfc',28,70,4.8,354,2.2,23,['wfc'],['wifi','colokan','ac','tenang'],['WFC','Quiet Zone','Colokan']],
  ['🪴','Teras Rindang','Kembangan','Outdoor','family',25,65,4.3,145,4.0,21,['family','local'],['outdoor','parkir','pet','cozy'],['Outdoor','Pet Friendly','UMKM Lokal']],
  ['🎵','Nada Kopi','Slipi','Live Music','music',38,95,4.5,229,2.9,0,['music','night','hangout'],['ramai','smoking','parkir'],['Live Music','Buka Malam','Nongkrong']],
  ['🍫','Mocha District','Tomang','Nongkrong','hangout',32,85,4.4,176,1.9,23,['hangout'],['ac','ramai','wifi'],['Nongkrong','Dessert','WiFi']],
  ['🧇','Waffle Works Cafe','Meruya','Family Spot','family',35,90,4.6,205,5.1,22,['family'],['ac','parkir','cozy'],['Family Friendly','Dessert','Parkir']],
  ['📖','Chapter Coffee','Grogol','WFC Pick','wfc',22,55,4.7,310,0.6,22,['wfc','local'],['wifi','colokan','tenang'],['WFC','Affordable','UMKM Lokal']],
  ['🏠','Kedai Bumi Lokal','Kalideres','UMKM Lokal','local',18,45,4.5,132,6.4,21,['local','family'],['parkir','cozy','outdoor'],['UMKM Lokal','Family','Outdoor']],
  ['♿','Akses Kopi','Palmerah','Accessible','accessible',28,70,4.6,119,2.4,21,['accessible','wfc'],['wifi','colokan','ac','parkir'],['♿ Disability Friendly','WFC','AC']],
  ['🌃','After Hours Brew','Cengkareng','24 Jam','night',25,80,4.2,278,4.2,24,['night','hangout'],['wifi','smoking','ramai','parkir'],['24 Jam','Nongkrong','WiFi']],
  ['🥯','Bagel & Beans','Puri Indah','Brunch','family',55,130,4.7,331,3.8,21,['family'],['ac','parkir','cozy','pet'],['Brunch','Family','Pet Friendly']],
  ['💻','Plug-in Coffee','Kebon Jeruk','WFC Pick','wfc',30,75,4.9,512,1.7,23,['wfc'],['wifi','colokan','meeting','ac','tenang'],['WFC','Meeting Room','WiFi 150mbps']],
  ['🌺','Kembang Kopi','Joglo','Outdoor','local',20,60,4.4,157,5.8,22,['local','family'],['outdoor','parkir','cozy'],['UMKM Lokal','Outdoor','Family']],
  ['🔥','Roast Lab 88','Taman Sari','Specialty','hangout',45,110,4.8,288,4.8,23,['hangout','local'],['ac','wifi','industrial'],['Specialty Coffee','Industrial','UMKM Lokal']],
  ['🧊','Cold Brew Corner','Tanjung Duren','Nongkrong','hangout',25,65,4.3,168,1.4,22,['hangout'],['ac','ramai','wifi'],['Nongkrong','Cold Brew','WiFi']],
  ['🎤','Open Mic House','Kalideres','Live Music','music',30,85,4.2,203,6.1,1,['music','night','hangout'],['ramai','smoking','parkir'],['Live Music','Open Mic','Buka Malam']],
  ['🧁','Little Crumbs Cafe','Meruya','Family Spot','family',25,70,4.5,214,4.7,20,['family'],['ac','parkir','cozy'],['Family Friendly','Dessert','Cozy']],
  ['🌾','Kopi Kampung Kota','Duri Kosambi','UMKM Lokal','local',15,40,4.4,101,6.8,21,['local'],['outdoor','cozy','parkir'],['UMKM Lokal','Affordable','Outdoor']],
  ['📱','Digital Nomad Den','Slipi','WFC Pick','wfc',35,95,4.7,395,2.5,23,['wfc'],['wifi','colokan','meeting','industrial'],['WFC','Meeting Room','Industrial']],
  ['🦮','Paws & Pour','Kembangan','Pet Friendly','family',30,85,4.5,147,4.5,21,['family','accessible'],['pet','outdoor','parkir','cozy'],['Pet Friendly','Outdoor','Family']],
  ['🍃','Greenhouse Brew','Joglo','Accessible','accessible',35,95,4.6,186,5.6,22,['accessible','family'],['outdoor','parkir','ac','cozy'],['♿ Accessible','Outdoor','Family']],
  ['🎨','Canvas Coffee','Taman Sari','Aesthetic','hangout',40,105,4.6,251,4.9,23,['hangout','local'],['ac','wifi','industrial'],['Aesthetic','Nongkrong','UMKM Lokal']],
  ['🫖','Sore Sore Tea & Coffee','Tomang','Cozy','family',22,58,4.3,139,1.6,21,['family','local'],['cozy','ac','tenang'],['Cozy','Family','UMKM Lokal']],
  ['🚲','Pit Stop Coffee','Grogol','UMKM Lokal','local',18,50,4.2,120,0.9,22,['local','hangout'],['outdoor','parkir','ramai'],['UMKM Lokal','Outdoor','Nongkrong']],
  ['🌌','Moon Cup Cafe','Puri Indah','Buka Malam','night',40,100,4.7,309,3.3,2,['night','wfc'],['wifi','colokan','ac','tenang'],['Buka Malam','WFC','WiFi']]
];
const gradients=['linear-gradient(135deg,#d4a870,#8a5820)','linear-gradient(135deg,#8faf7a,#4a7a3a)','linear-gradient(135deg,#b08060,#60301a)','linear-gradient(135deg,#c9a97a,#7a5230)','linear-gradient(135deg,#a36a47,#4e2c1a)','linear-gradient(135deg,#a7a06f,#5d5130)'];
const transitNotes=['Dekat halte TransJakarta Grogol','5 menit dari Stasiun Palmerah','Dekat terminal bus Cengkareng','Dekat halte Kebon Jeruk','Dekat akses TransJakarta Puri Beta','Dekat mikrotrans Tanjung Duren','Dekat halte busway Duri Kepa','Dekat angkot Kembangan','Dekat halte Slipi Petamburan','Dekat halte Tomang Mandala'];
const partnerPlans={0:'Favorit WFC',1:'Ramah Keluarga',3:'Cozy Favorit',16:'Produktif',18:'Specialty Pick'};
const cafes=cafeSeeds.map((s,i)=>({
  id:i, emoji:s[0], name:s[1], area:s[2]+', Jakarta Barat', tag:s[3], partnerPlan:partnerPlans[i]||'', isPartner:!!partnerPlans[i], category:s[4], priceMin:s[5], priceMax:s[6], rating:s[7], reviews:s[8], dist:s[9], closeHour:s[10], categories:s[11], filters:s[12], tags:s[13], transit:transitNotes[i%transitNotes.length],
  bg:gradients[i%gradients.length], distText:s[9].toFixed(1)+' km', price:`Rp${s[5]}k–${s[6]}k`, status:s[10]===24?'open':(s[10] >= 21 || s[10] <= 2 ? 'open':'closed'),
  statusTxt:s[10]===24?'Buka 24 jam':(s[10]===0?'Buka sampai 00.00':s[10]<3?`Buka sampai 0${s[10]}.00`:`Buka sampai ${s[10]}.00`),
  hours:s[10]===24?'24 Jam':`08.00–${s[10]===0?'00':String(s[10]).padStart(2,'0')}.00`,
  phone:`08${12+(i%7)}-${String(3000+i*113).padStart(4,'0')}-${String(7000+i*71).padStart(4,'0')}`,
  wifi:s[12].includes('wifi')?(i%3===0?'100 Mbps':i%3===1?'75 Mbps':'50 Mbps'):'30 Mbps',
  amenities:[...new Set(s[12].map(x=>({wifi:'WiFi Kencang',colokan:'Stop Kontak',ac:'AC',meeting:'Meeting Room',tenang:'Quiet Zone',parkir:'Parkir Luas',outdoor:'Outdoor',pet:'Pet Friendly',smoking:'Smoking Area',ramai:'Area Komunitas',cozy:'Cozy Corner',industrial:'Industrial Interior'}[x]||x)))],
  schedule:[{day:'Senin (hari ini)',hours:s[10]===24?'24 Jam':`08.00–${s[10]===0?'00':String(s[10]).padStart(2,'0')}.00`,today:true},{day:'Selasa–Jumat',hours:s[10]===24?'24 Jam':`08.00–${s[10]===0?'00':String(s[10]).padStart(2,'0')}.00`},{day:'Sabtu–Minggu',hours:s[10]===24?'24 Jam':'09.00–00.00'}],
  reviews_list:[{name:['Rina W.','Dito P.','Sarah M.','Kevin A.'][i%4],stars:'★★★★★',txt:`${s[1]} vibes-nya enak, cocok buat ${s[11].includes('wfc')?'kerja lama':s[11].includes('family')?'datang bareng keluarga':'nongkrong santai'}.`,media:i%2===0?['📷']:null},{name:['Lina R.','Reza P.','Budi K.','Ani S.'][i%4],stars:'★★★★☆',txt:'Menu cukup lengkap, tempat bersih, dan staff ramah. Bakal balik lagi.'}]
}));

const state={category:'all', search:'', sort:'Paling Relevan', visible:[...cafes]};
const grid=document.getElementById('cardsGrid');
const emptyState=document.getElementById('emptyState');
const resultsCount=document.querySelector('.results-count');
const searchInput=document.querySelector('.search-input');
const sortSel=document.querySelector('.sort-sel');

function tagClass(tag){
  const t=tag.toLowerCase();
  if(t.includes('wifi')) return 't-wifi';
  if(t.includes('wfc')) return 't-wfc';
  if(t.includes('family')) return 't-family';
  if(t.includes('disability')||t.includes('accessible')) return 't-disable';
  if(t.includes('music')) return 't-music';
  if(t.includes('umkm')) return 't-local';
  return 't-hang';
}
function badgeClass(c){return c.categories.includes('accessible')?'green':c.categories.includes('wfc')?'blue':''}
function priceBucket(c,b){
  if(b==='lt25') return c.priceMin < 25;
  if(b==='25-50') return c.priceMin <= 50 && c.priceMax >= 25;
  if(b==='50-100') return c.priceMin <= 100 && c.priceMax >= 50;
  if(b==='gt100') return c.priceMax > 100;
  return true;
}
function activeFilters(selector){return [...document.querySelectorAll(selector+':checked')].map(x=>x.dataset.filter)}
function activePrices(){return [...document.querySelectorAll('.price-btn.active')].map(x=>x.dataset.price)}
function cafeMatches(c){
  const q=state.search.trim().toLowerCase();
  const text=[c.name,c.area,c.transit,c.tags.join(' '),c.amenities.join(' ')].join(' ').toLowerCase();
  const categoryOk=state.category==='all'||c.categories.includes(state.category);
  const prices=activePrices();
  const priceOk=!prices.length||prices.some(p=>priceBucket(c,p));
  const facilities=activeFilters('.sidebar input[id^="f"]');
  const moods=activeFilters('.sidebar input[id^="s"]');
  const hours=activeFilters('.sidebar input[id^="h"]');
  const facilityOk=facilities.every(f=>c.filters.includes(f));
  const moodOk=moods.every(f=>c.filters.includes(f));
  const hourOk=hours.every(h=> h==='open'?c.status==='open':h==='midnight'?(c.closeHour===0||c.closeHour<=2||c.closeHour===24):h==='24h'?c.closeHour===24:true);
  return categoryOk && priceOk && facilityOk && moodOk && hourOk && (!q || text.includes(q));
}
function sorted(list){
  const v=[...list];
  if(state.sort==='Paling Relevan') v.sort((a,b)=>(b.isPartner-a.isPartner)||b.rating-a.rating);
  if(state.sort==='Rating Tertinggi') v.sort((a,b)=>b.rating-a.rating);
  if(state.sort==='Terdekat') v.sort((a,b)=>a.dist-b.dist);
  if(state.sort==='Harga Terendah') v.sort((a,b)=>a.priceMin-b.priceMin);
  if(state.sort==='Ulasan Terbanyak') v.sort((a,b)=>b.reviews-a.reviews);
  return v;
}
function renderCards(){
  if(!grid) return;
  state.visible=sorted(cafes.filter(cafeMatches));
  grid.innerHTML=state.visible.map((c,i)=>`
    <article class="cafe-card" onclick="selectCard(${c.id})" style="animation-delay:${Math.min(i*0.045,.7)}s">
      <div class="card-thumb">
        <div class="card-thumb-bg"><img src="cafe-photo.png" alt="Suasana cafe ${c.name}" loading="lazy"></div>
        <div class="card-overlay"></div>
        <div class="card-badge ${badgeClass(c)}">${c.tag} ✓</div>
        ${c.isPartner?`<div class="partner-ribbon">${c.partnerPlan}</div>`:''}
        <div class="card-fav" onclick="toggleFav(event,this)" id="fav${c.id}">♡</div>
        <div class="card-distance"><svg viewBox="0 0 24 24" style="width:10px;height:10px;stroke:currentColor;fill:none;stroke-width:2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${c.distText}</div>
      </div>
      <div class="card-body">
        <div class="card-top"><div class="card-name">${c.name}</div><div class="card-rating"><span class="star">★</span><span class="rv">${c.rating.toFixed(1)}</span></div></div>
        <div class="card-area"><svg viewBox="0 0 24 24" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${c.area} · ${c.distText}</div>
        <div class="card-transit"><svg viewBox="0 0 24 24" stroke-width="2"><path d="M6 17h12"/><path d="M8 17v3"/><path d="M16 17v3"/><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M8 7h8"/><path d="M8 11h8"/></svg>${c.transit}</div><div class="tags">${c.tags.map(t=>`<span class="tag ${tagClass(t)}">${t}</span>`).join('')}</div>
        <div class="card-footer"><div class="card-price-info"><div><span class="price">${c.price}</span><span class="per"> /orang</span></div><div class="card-status ${c.status}"><span class="dot-s"></span>${c.statusTxt}</div></div><button class="btn-reserve" onclick="reserve(event,'${c.name}')">Reservasi</button></div>
      </div>
    </article>`).join('');
  if(resultsCount) resultsCount.innerHTML=`${state.visible.length} cafe ditemukan <span>di Jakarta Barat</span>`;
  if(emptyState) emptyState.hidden=state.visible.length!==0;
  const panel=document.getElementById('detailPanel');
  if(panel) panel.innerHTML='<div class="empty-detail">Klik salah satu cafe untuk melihat detail lengkap.</div>';
  refreshCursorTargets();
}
function cafeDetailMarkup(c){
  const schedHtml=c.schedule.map(s=>`<tr class="${s.today?'today':''}"><td>${s.day}</td><td>${s.hours}</td></tr>`).join('');
  const reviewHtml=c.reviews_list.map(r=>`<div class="review-card"><div class="review-author">${r.name}<span class="review-stars">${r.stars}</span></div><div class="review-txt">${r.txt}</div>${r.media?`<div class="review-media">${r.media.map(m=>`<div>${m}</div>`).join('')}</div>`:''}</div>`).join('');
  const amenHtml=c.amenities.map(a=>`<div class="amenity"><svg viewBox="0 0 24 24" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>${a}</div>`).join('');
  return `<div class="modal-hero-img"><img src="cafe-photo.png" alt="Suasana cafe ${c.name}"></div>
  <div class="modal-content-scroll">
    <div class="modal-title-row"><div><div class="detail-selected-tag">${c.isPartner?c.partnerPlan:'CafeFinder Pick'}</div><h2>${c.name}</h2><p>${c.area} · ${c.distText}</p></div><div class="modal-rating"><span>★</span>${c.rating.toFixed(1)}<small>${c.reviews} ulasan</small></div></div>
    <div class="modal-quick-info">
      <div><strong>${c.price}</strong><span>/orang</span></div>
      <div><strong>${c.statusTxt}</strong><span>${c.hours}</span></div>
      <div><strong>${c.wifi}</strong><span>WiFi</span></div>
      <div><strong>${c.distText}</strong><span>dari kamu</span></div>
    </div>
    <div class="modal-detail-grid">
      <section class="d-section"><div class="d-label">Info Utama</div><div class="d-row"><svg viewBox="0 0 24 24" stroke-width="2"><path d="M6 17h12"/><path d="M8 17v3"/><path d="M16 17v3"/><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M8 7h8"/><path d="M8 11h8"/></svg><span>${c.transit}</span></div><div class="d-row"><svg viewBox="0 0 24 24" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>${c.phone}</span></div><div class="d-row"><svg viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Buka ${c.hours}</span></div></section>
      <section class="d-section"><div class="d-label">Fasilitas</div><div class="amenities">${amenHtml}</div></section>
      <section class="d-section"><div class="d-label">Jam Operasional</div><table class="hours-table">${schedHtml}</table></section>
      <section class="d-section"><div class="d-label">Ulasan Terverifikasi</div>${reviewHtml}</section>
    </div>
    <button class="btn-reserve-big" onclick="reserve(event,'${c.name}')"><svg viewBox="0 0 24 24" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Buat Reservasi</button>
  </div>`;
}
function ensureCafeModal(){
  let modal=document.getElementById('cafeDetailModal');
  if(modal) return modal;
  modal=document.createElement('div');
  modal.id='cafeDetailModal';
  modal.className='cafe-modal';
  modal.innerHTML='<div class="cafe-modal-backdrop" onclick="closeCafeModal()"></div><article class="cafe-modal-card"><button class="modal-close" onclick="closeCafeModal()" aria-label="Tutup detail">×</button><div id="cafeModalBody"></div></article>';
  document.body.appendChild(modal);
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeCafeModal();});
  return modal;
}
function openCafeModal(id){
  const c=cafes.find(x=>x.id===id) || cafes[0];
  const modal=ensureCafeModal();
  modal.querySelector('#cafeModalBody').innerHTML=cafeDetailMarkup(c);
  modal.classList.add('show');
  document.body.classList.add('modal-open');
  document.querySelectorAll('.cafe-card').forEach(card=>card.style.outline=card.getAttribute('onclick')===`selectCard(${id})`?'2px solid var(--caramel)':'none');
  refreshCursorTargets();
}
function closeCafeModal(){
  const modal=document.getElementById('cafeDetailModal');
  if(modal) modal.classList.remove('show');
  document.body.classList.remove('modal-open');
}
function renderDetail(id){openCafeModal(id)}
function selectCard(id){openCafeModal(id); const c=cafes.find(x=>x.id===id); if(c) showToast('Menampilkan detail '+c.name+' ☕')}
function renderHeroSlider(){
  const track=document.getElementById('heroSliderTrack');
  const dots=document.getElementById('heroSliderDots');
  if(!track||!dots) return;
  const picks=[0,1,3,16,18].map(id=>cafes.find(c=>c.id===id)).filter(Boolean);
  let active=0;
  track.innerHTML=picks.map((c,i)=>`<article class="hero-slide-card ${i===0?'active':''}" onclick="selectCard(${c.id})"><div class="hero-slide-img"><img src="cafe-photo.png" alt="${c.name}"></div><div class="hero-slide-body"><span>${c.partnerPlan||'CafeFinder Pick'}</span><h3>${c.name}</h3><p>${c.area.split(',')[0]} · ${c.distText}</p><div><b>★ ${c.rating.toFixed(1)}</b><b>${c.tags[0]}</b></div></div></article>`).join('');
  dots.innerHTML=picks.map((_,i)=>`<button class="${i===0?'active':''}" type="button" aria-label="Slide ${i+1}"></button>`).join('');
  const cards=[...track.querySelectorAll('.hero-slide-card')];
  const dotBtns=[...dots.querySelectorAll('button')];
  function show(i){cards[active]?.classList.remove('active');dotBtns[active]?.classList.remove('active');active=i;cards[active]?.classList.add('active');dotBtns[active]?.classList.add('active');}
  dotBtns.forEach((btn,i)=>btn.addEventListener('click',()=>show(i)));
  setInterval(()=>show((active+1)%cards.length),3500);
  refreshCursorTargets();
}
function setChip(el){document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));el.classList.add('active');state.category=el.dataset.category||'all';renderCards();showToast('Filter kategori diperbarui ✓')}
function togglePrice(el){el.classList.toggle('active');renderCards();}
function toggleFav(e,el){e.stopPropagation();const liked=el.classList.toggle('liked');el.textContent=liked?'♥':'♡';el.style.color=liked?'#e74c3c':'';showToast(liked?'Ditambahkan ke Favorit ♥':'Dihapus dari Favorit')}
function reserve(e,name){e.stopPropagation();showToast('Reservasi untuk '+name+' berhasil! 🎉')}
function showToast(msg){const t=document.getElementById('toast'); if(!t) return; t.textContent=msg;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),2800)}

if(searchInput){searchInput.addEventListener('input',e=>{state.search=e.target.value;renderCards()});}
document.querySelector('.search-btn')?.addEventListener('click',()=>{renderCards();showToast('Pencarian diperbarui ✓')});
if(sortSel){sortSel.addEventListener('change',e=>{state.sort=e.target.value;renderCards()});}
document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(input=>input.addEventListener('change',renderCards));

const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.getElementById('navLinks');
if(menuToggle&&navLinks){
  menuToggle.addEventListener('click',()=>{const isOpen=navLinks.classList.toggle('open');menuToggle.classList.toggle('is-open',isOpen);menuToggle.setAttribute('aria-expanded',String(isOpen));});
  navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');}));
}
renderCards();


function switchAuth(mode){
  document.querySelectorAll('.auth-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.authTab===mode));
  document.querySelectorAll('.auth-form').forEach(form=>form.classList.remove('active'));
  const target=document.getElementById(mode==='signup'?'signupForm':'loginForm');
  if(target) target.classList.add('active');
}
function handleSignup(e){
  e.preventDefault();
  const form=e.currentTarget;
  const name=form.querySelector('input[type="text"]')?.value || 'User CafeFinder';
  const email=form.querySelector('input[type="email"]')?.value || '';
  localStorage.setItem('cafefinderUser',JSON.stringify({name,email,createdAt:new Date().toISOString()}));
  showToast('Akun berhasil dibuat. Kamu sudah masuk ✨');
  setTimeout(()=>{window.location.href='index.html'},900);
}
function handleLogin(e){
  e.preventDefault();
  const form=e.currentTarget;
  const email=form.querySelector('input[type="email"]')?.value || '';
  localStorage.setItem('cafefinderUser',JSON.stringify({name:'CafeFinder User',email,lastLogin:new Date().toISOString()}));
  showToast('Berhasil masuk ke CafeFinder ☕');
  setTimeout(()=>{window.location.href='index.html'},900);
}
renderHeroSlider();
