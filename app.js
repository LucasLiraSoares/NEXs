// Progress bar
window.addEventListener("scroll", () => {
  const progress = document.getElementById("progressBar");
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = (window.scrollY / height) * 100;
  progress.style.width = scrolled + "%";
});

// Hub Dock navigation
document.querySelectorAll(".hub-item").forEach(item => {
  item.addEventListener("click", () => {
    let target = document.querySelector(item.dataset.target);
    if (target) target.scrollIntoView({behavior:"smooth"});
  });
});

// Swiper releases
new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  autoplay: { delay: 4000 }
});

// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

// Sample data (replace with JSON later)
const releases = [
  { title: "First Single", artist: "Artist A", date: "2025-03-01", cover: "assets/img/release1.jpg" },
  { title: "EP Launch", artist: "Artist B", date: "2025-04-15", cover: "assets/img/release2.jpg" }
];
const releasesContainer = document.getElementById("releasesSlides");
releases.forEach(r=>{
  const slide = document.createElement("div");
  slide.className="swiper-slide";
  slide.innerHTML = `<div class="release-card">
    <div class="release-media"><img src="${r.cover}" alt="${r.title}"></div>
    <div class="release-body"><h4>${r.title}</h4><p>${r.artist} • ${r.date}</p></div>
  </div>`;
  releasesContainer.appendChild(slide);
});
