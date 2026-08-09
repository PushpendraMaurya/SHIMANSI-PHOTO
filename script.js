function insertExperience(){
  const container = document.getElementById('experience-list');
  experience.forEach(exp=>{
    const el = document.createElement('div');
    el.className='timeline-item';
    el.innerHTML = `<strong>${exp.company}</strong> — ${exp.position} <div class="muted">${exp.dates}</div><p>${exp.description}</p>`;
    container.appendChild(el);
  });
}

const pageSize = 12;
let currentPage = 0;

function renderProjects(page = 0){
  const container = document.getElementById('projects');
  container.innerHTML = '';
  currentPage = page;
  const start = page * pageSize;
  const pageImages = allImages.slice(start, start + pageSize);
  pageImages.forEach((src, index)=>{
    const globalIndex = start + index;
    const a = document.createElement('a');
    a.className='project-card';
    a.href='#';
    a.addEventListener('click', (e)=>{e.preventDefault(); openLightbox({title:'Selected Work', category:'Portfolio', year:'', images:allImages}, globalIndex);});
    a.innerHTML = `<img src="${src}" alt="Project image" loading="lazy"><div class="project-overlay"><span>View</span></div>`;
    container.appendChild(a);
  });
  renderPagination();
}

function renderPagination(){
  const pagination = document.getElementById('pagination');
  if(!pagination) return;
  const totalPages = Math.ceil(allImages.length / pageSize);
  pagination.innerHTML = '';
  for(let i=0;i<totalPages;i++){
    const button = document.createElement('button');
    button.className = 'pagination-button' + (i===currentPage ? ' active' : '');
    button.textContent = String(i+1);
    button.addEventListener('click', ()=> renderProjects(i));
    pagination.appendChild(button);
  }
}

// Open a fullscreen carousel for selected images
function openFullScreenCarousel(images,index){
  currentProject = {title:'Full Screen Gallery',category:'Collection',year:'',images};
  currentIndex = index || 0;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');
  const cap = document.getElementById('lightbox-caption');
  img.src = images[currentIndex];
  img.alt = `Image ${currentIndex+1}`;
  cap.textContent = `${currentIndex+1} / ${images.length}`;
  lb.classList.add('fullscreen');
  lb.setAttribute('aria-hidden','false');
}

// Lightbox
let currentProject=null;let currentIndex=0;
function openLightbox(project,index){
  currentProject=project;currentIndex=index;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');
  const cap = document.getElementById('lightbox-caption');
  img.src = project.images[index];
  img.alt = project.title + ' image ' + (index+1);
  cap.textContent = `${project.title} — ${project.category} • ${project.year}`;
  lb.setAttribute('aria-hidden','false');
}

function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.classList.remove('fullscreen');
  lb.setAttribute('aria-hidden','true');
  document.getElementById('lightbox-image').src='';
}

function nextImage(){
  if(!currentProject) return; currentIndex=(currentIndex+1)%currentProject.images.length; openLightbox(currentProject,currentIndex);
}
function prevImage(){
  if(!currentProject) return; currentIndex=(currentIndex-1+currentProject.images.length)%currentProject.images.length; openLightbox(currentProject,currentIndex);
}

document.addEventListener('DOMContentLoaded', ()=>{
  insertExperience();
  renderProjects(0);
  setupCarousel();
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next').addEventListener('click', nextImage);
  document.getElementById('lightbox-prev').addEventListener('click', prevImage);
  document.addEventListener('keydown',(e)=>{
    if(document.getElementById('lightbox').getAttribute('aria-hidden')==='false'){
      if(e.key==='Escape') closeLightbox();
      if(e.key==='ArrowRight') nextImage();
      if(e.key==='ArrowLeft') prevImage();
    }
  });
  // populate contact
  const emailLink = document.getElementById('contact-email');
  const phoneLink = document.getElementById('contact-phone');
  if(emailLink && contact && contact.email){ emailLink.href = `mailto:${contact.email}`; emailLink.textContent = contact.email; }
  if(phoneLink && contact && contact.phone){ phoneLink.href = `tel:+91${contact.phone}`; phoneLink.textContent = contact.phone; }
  // mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if(menuToggle && mobileMenu){
    menuToggle.addEventListener('click', ()=>{
      const open = menuToggle.getAttribute('aria-expanded')==='true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      mobileMenu.setAttribute('aria-hidden', String(open));
    });
    // close menu when a link clicked
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{ menuToggle.setAttribute('aria-expanded','false'); mobileMenu.setAttribute('aria-hidden','true'); }));
  }
  // lightbox swipe support
  const lbImage = document.getElementById('lightbox-image');
  let touchStartX=0,touchEndX=0;
  if(lbImage){
    lbImage.addEventListener('touchstart',(e)=>{ touchStartX = e.changedTouches[0].screenX; });
    lbImage.addEventListener('touchend',(e)=>{ touchEndX = e.changedTouches[0].screenX; handleSwipe(); });
    function handleSwipe(){
      const dx = touchEndX - touchStartX;
      if(Math.abs(dx) > 40){ if(dx < 0) nextImage(); else prevImage(); }
    }
  }
});

// Simple hero carousel
let carouselIndex = 0; let carouselTimer=null;
function setupCarousel(){
  const img = document.getElementById('carousel-image');
  const prev = document.getElementById('carousel-prev');
  const next = document.getElementById('carousel-next');
  if(!img) return;
  function show(i){
    carouselIndex = (i+heroImages.length)%heroImages.length;
    img.src = heroImages[carouselIndex];
  }
  prev.addEventListener('click', ()=>{ show(carouselIndex-1); resetTimer(); });
  next.addEventListener('click', ()=>{ show(carouselIndex+1); resetTimer(); });
  function auto(){ show(carouselIndex+1); }
  function resetTimer(){ clearInterval(carouselTimer); carouselTimer=setInterval(auto,4500); }
  // start
  show(0); carouselTimer=setInterval(auto,4500);
}
