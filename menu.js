const MENU = [
  { id: 1, n: "Labo Coffee", k: "Coffe Milk", img: "images/labo.jpeg", p: 20000, d: "Kopi susu klasik" },
  { id: 2, n: "Palm Coffee", k: "Coffe Milk", img: "images/palm.jpeg", p: 20000, d: "Kopi susu dengan manis legitnya gula aren khas Nusantara." },
  { id: 3, n: "Latte", k: "Coffe Milk", img: "images/latte.jpeg", p: 20000, d: "Paduan espresso lembut dengan steamed susu segar." },
  { id: 4, n: "Vanilla Latte", k: "Coffe Milk", img: "images/vanilla,latte.jpeg", p: 20000, d: "Espresso berpadu dengan sirup vanilla premium dan susu creamy." },
  { id: 5, n: "Moccacino", k: "Coffe Milk", img: "images/moccachino.jpeg", p: 23000, d: "Kombinasi seimbang antara cokelat pekat, espresso, dan susu hangat." },
  { id: 6, n: "Signature A", k: "Coffe Milk", img: "images/singnature-A.jpeg", p: 23000, d: "Perpaduan kopi dan kurma asli dengan rasa unik." },
  { id: 7, n: "Signature B", k: "Coffe Milk", img: "images/singnature-B.jpeg", p: 23000, d: "Kopi susu dengan sentuhan kesegaran rasa strawberry yang bikin nagih." },
  { id: 8, n: "Signature C", k: "Coffe Milk", img: "images/singnature-C.jpeg", p: 23000, d: "Kopi susu berpadu dengan manis dan gurihnya sirup karamel." },
  { id: 9, n: "Butterscotch", k: "Coffe Milk", img: "images/butterscotch.jpeg", p: 23000, d: "Kopi susu creamy dengan sirup butterscotch yang manis dan aromatik." },
  { id: 10, n: "Americano", k: "Black Series", img: "images/americano.jpeg", p: 10000, d: "Double shot espresso murni dengan air, pas untuk fokus maksimal." },
  { id: 11, n: "Berrycano", k: "Black Series", img: "images/berrycano.jpeg", p: 15000, d: "Sensasi espresso dingin berpadu dengan kesegaran jus cranberry." },
  { id: 12, n: "Tropicano", k: "Black Series", img: "images/tropicano.png", p: 15000, d: "Kopi hitam dingin dengan ekstrak buah jeruk yang menyegarkan." },
  { id: 13, n: "Chocolate", k: "Milk Series", img: "images/chocolate.jpeg", p: 18000, d: "Minuman cokelat kental lembut berpadu dengan susu murni." },
  { id: 14, n: "Brown Sugar Milk", k: "Milk Series", img: "images/brown-sugar.jpeg", p: 18000, d: "Susu segar dengan lumeran sirup gula aren yang manis legit." },
  { id: 15, n: "Korean Strawberry", k: "Milk Series", img: "images/korean-straw.jpeg", p: 20000, d: "Susu segar dengan potongan buah strawberry asli ala Korea." },
  { id: 16, n: "Mango Milk", k: "Milk Series", img: "images/mango-milk.jpeg", p: 20000, d: "Susu creamy dengan ekstrak buah mangga manis yang menyegarkan." },
  { id: 17, n: "Lemon Tea", k: "Tea Series", img: "images/lemon-tea.jpeg", p: 15000, d: "Teh hitam seduh dengan perasan lemon segar yang melegakan tenggorokan." },
  { id: 18, n: "Thai Tea", k: "Tea Series", img: "images/thati-tea.jpeg", p: 15000, d: "Teh asli Thailand dengan paduan susu kental manis yang autentik." },
  { id: 19, n: "Green Tea", k: "Tea Series", img: "images/greentea.jpeg", p: 15000, d: "Seduhan teh hijau melati yang menenangkan dan harum." },
  { id: 20, n: "Matcha Latte", k: "Matcha Series", img: "images/matcha-latte.jpeg", p: 25000, d: "Bubuk matcha Jepang autentik diseduh dengan susu segar yang creamy." },
  { id: 21, n: "Matcha Strawberry", k: "Matcha Series", img: "images/matcha-straw.jpeg", p: 30000, d: "Kombinasi unik pahitnya matcha dan manis asamnya selai strawberry." },
  { id: 22, n: "Silverqueen", k: "Addtional", img: "images/silverqueen.jpeg", p: 7000, d: "" },
  { id: 23, n: "Oat Milk", k: "Addtional", img: "images/oat.jpeg", p: 5000, d: "" },{ id: 23, n: "Putu Belanda", k: "Dessert", img: "images/putu-belanda.jpeg", p: 20000, d: "" },
  { id: 24, n: "Cheesekuit", k: "Dessert", img: "images/cheesekuit.jpeg", p: 13000, d: "" },
  { id: 25, n: "Pudding", k: "Dessert", img: "images/pudding.jpeg", p: 13000, d: "" },
  { id: 26, n: "Cookies", k: "Dessert", img: "images/cookies.jpeg", p: 13000, d: "" },
  { id: 27, n: "Risol Coklat", k: "Dessert", img: "images/risol-coklat.jpeg", p: 8000, d: "" },
  { id: 28, n: "Risol Mayo", k: "Dessert", img: "images/risol-mayo.jpeg", p: 6000, d: "" },
  { id: 29, n: "Donat", k: "Dessert", img: "images/donat.jpeg", p: 5000, d: "" },
  { id: 30, n: "Roti", k: "Dessert", img: "images/roti.jpeg", p: 6000, d: "" }
];

const MOODS = [
  { k: "Butuh semangat", m:14, t: "Manis kayak senyum dia." },
  { k: "Ingin santai", m: 4, t: "Segar dan ringan, cocok untuk ngobrol." },
  { k: "Lagi kerja keras", m: 10, t: "Pahit kayak kehidupan." },
  { k: "Mau coba hal baru", m: 11, t: "Manis, lembut, hangat dalam satu gelas." },
  { k: "Diluar panas?", m: 12, t: "Segar pake BANGET!" }
];

const rp = n => "Rp" + n.toLocaleString("id-ID");
const $ = s => document.querySelector(s);
let cat = "Semua";

function route() {
  const m = location.hash === "#/menu";
  $("#pHome").classList.toggle("show", !m);
  $("#pMenu").classList.toggle("show", m);
  $("#nHome").classList.toggle("on", !m);
  $("#nMenu").classList.toggle("on", m);
  scrollTo(0, 0);
  sky();
}
addEventListener("hashchange", route);

addEventListener("pointermove", e => {
  const g = $("#glow");
  g.style.left = e.clientX + "px";
  g.style.top = e.clientY + "px";
  document.querySelectorAll(".bean").forEach((b, i) => {
    const d = (i + 1) * 6;
    b.style.transform = `translate(${(e.clientX / innerWidth - .5) * d}px,${(e.clientY / innerHeight - .5) * d}px) rotate(${i * 40}deg)`;
  });
});

[[6, 18], [88, 8], [4, 70], [90, 66]].forEach(([x, y]) => {
  const b = document.createElement("i");
  b.className = "bean";
  b.style.left = x + "%";
  b.style.top = y + "%";
  $("#cupwrap").appendChild(b);
});

$("#mq").innerHTML = (["Labo Coffee", "Palm Coffee", "Latte", "Vanilla Latte", "Americano"].map(w => w + " &nbsp;✦&nbsp; ").join("")).repeat(4);
(function () {
  const h = new Date().getHours(), o = h >= 8 && h < 17;
  $("#status").className = "status " + (o ? "open" : "");
  $("#stx").textContent = o ? "Buka sampai 17.00" : "Tutup, buka 08.00";
})();

const res = $("#result");
MOODS.forEach(m => {
  const b = document.createElement("button");
  b.className = "mood";
  b.textContent = m.k;
  b.setAttribute("aria-pressed", "false");
  b.onclick = () => {
    document.querySelectorAll(".mood").forEach(x => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    const d = MENU.find(x => x.id === m.m);
    res.innerHTML = `
    <div style="display:flex; align-items:center; gap:16px;">
        <img src="${d.img}" alt="${d.n}" style="width:70px; height:70px; border-radius:14px; object-fit:cover;">
        <div>
        <h3 style="margin:0">${d.n}</h3>
        <p style="margin:4px 0">${m.t}</p>
        <p style="margin:0; font-weight:bold; color:var(--gold)">${rp(d.p)}</p>
        </div>
    </div>`;
    res.classList.remove("pop");
    void res.offsetWidth;
    res.classList.add("pop");
  };
  $("#moods").appendChild(b);
});

function cats() {
  const el = $("#cats");
  el.innerHTML = "";
  ["Semua", "Coffe Milk", "Black Series", "Addtional", "Milk Series", "Tea Series", "Matcha Series", "Dessert"].forEach(c => {
    const b = document.createElement("button");
    b.className = "mood";
    b.textContent = c;
    b.setAttribute("aria-pressed", c === cat);
    b.onclick = () => { cat = c; cats(); grid(); };
    el.appendChild(b);
  });
}

function grid() {
  const q = $("#q").value.trim().toLowerCase(), g = $("#grid");
  g.innerHTML = "";
  const list = MENU.filter(m => (cat === "Semua" || m.k === cat) && (m.n + m.d).toLowerCase().includes(q));

  if (!list.length) {
    g.innerHTML = '<p style="color:var(--mut)">Tidak ada menu yang cocok. Coba kata lain.</p>';
    return;
  }

  list.forEach((m, i) => {
    const c = document.createElement("div");
    c.className = "item";
    c.style.animationDelay = i * 50 + "ms";

    c.innerHTML = `
      <img src="${m.img}" alt="${m.n}" class="item-img">
      <h3>${m.n}</h3>
      <p>${m.d}</p>
      <div class="row">
        <b>${rp(m.p)}</b>
      </div>`;
    g.appendChild(c);
  });
}
$("#q").oninput = grid;

const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  io.unobserve(e.target);
  const el = e.target, to = +el.dataset.n, t0 = performance.now();
  (function f(t) {
    const k = Math.min((t - t0) / 1500, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))).toLocaleString("id-ID");
    if (k < 1) requestAnimationFrame(f);
  })(t0);
}), { threshold: .6 });
document.querySelectorAll("[data-n]").forEach(e => io.observe(e));

cats();
grid();
route();

function jalankanGacha() {
  const daftarGacha = [
    { nama: "Brown Sugar Milk", desc: "Manisnya pas, cocok buat nemenin ngerjain laporan." },
    { nama: "Americano Dingin", desc: "Pahit dan dingin. Pas buat bikin melek seharian!" },
    { nama: "Matcha Latte", desc: "Biar pikiran rileks sebelum masuk kelas praktikum." },
    { nama: "Berrycano", desc: "Segar maksimal buat cuaca panas terik hari ini." },
    { nama: "Butterscotch", desc: "Bikin mood naik lagi setelah di-acc dosen." }
  ];

  const btnGacha = document.getElementById('btn-gacha');
  const hasilBox = document.getElementById('hasil-gacha');
  const namaMenu = document.getElementById('nama-menu');
  const deskripsiMenu = document.getElementById('deskripsi-menu');

  btnGacha.innerText = "Hmm apa yah?...";
  hasilBox.classList.remove('sembunyi');
  namaMenu.innerText = "Tunggu sebentar...";
  deskripsiMenu.innerText = "";
  
  setTimeout(() => {
    const indeksAcak = Math.floor(Math.random() * daftarGacha.length);
    const menuTerpilih = daftarGacha[indeksAcak];
    namaMenu.innerText = menuTerpilih.nama;
    deskripsiMenu.innerText = menuTerpilih.desc;
    btnGacha.innerText = "Kurang puas?";
  }, 2000); 
}