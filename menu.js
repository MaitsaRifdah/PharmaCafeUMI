const MENU = [
    { id: 1, n: "Labo Coffee", k: "Coffe Milk", img: "images/farmacafe.jpeg", p: 20000, d: "Espresso, gula aren, susu segar." },
    { id: 2, n: "Palm Coffee", k: "Coffe Milk", img: "images/palm-coffee.jpg", p: 20000, d: "Dua shot, susu mikro-foam halus." },
    { id: 3, n: "Latte", k: "Coffe Milk", img: "images/latte.jpeg", p: 20000, d: "Espresso lembut dengan susu segar." },
    { id: 4, n: "Vanilla Latte", k: "Coffe Milk", img: "images/vanilla,latte.jpeg", p: 20000, d: "Espresso, sirup vanilla premium, dan susu." },
    { id: 5, n: "Moccacino", k: "Coffe Milk", img: "images/moccachino.jpeg", p: 23000, d: "Perpaduan cokelat pekat dan espresso." },
    { id: 6, n: "Signature A", k: "Coffe Milk", img: "images/roti-bakar.jpg", p: 23000, d: "Espresso spesial dengan sentuhan krim." },
    { id: 7, n: "Signature B", k: "Coffe Milk", img: "images/pisang-goreng.jpg", p: 23000, d: "Racikan susu manis dan espresso gurih." },
    { id: 8, n: "Signature C", k: "Coffe Milk", img: "images/kopi-toraja.jpg", p: 23000, d: "Kopi racikan khas dengan aromatik spesial." },
    { id: 8, n: "Butterscotch", k: "Coffe Milk", img: "images/butterscotch.jpeg", p: 23000, d: "Kopi racikan khas dengan aromatik spesial."},
    { id: 9, n: "Americano", k: "Black Series", img: "images/americano.jpeg", p: 10000, d: "Double shot espresso dengan air murni." },
    { id: 10, n: "Berrycano", k: "Black Series", img: "images/berrycano.jpeg", p: 15000, d: "Espresso dingin dipadu sirup berry segar." },
    { id: 11, n: "Tropicano", k: "Black Series", img: "images/kopi-toraja.jpg", p: 15000, d: "Kopi hitam dingin dengan sensasi buah tropis." },
    { id: 12, n: "Silverqueen", k: "Addtional", img: "images/silverqueen.jpeg", p: 7000, d: "Matcha Jepang autentik dipadu susu segar." },
    { id: 13, n: "Oat Milk", k: "Addtional", img: "images/oat.jpeg", p: 5000, d: "Teh hitam aromatik dengan ekstrak bergamot." },
    { id: 14, n: "Chocolate", k: "Milk Series", img: "images/chocolate.jpeg", p: 18000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 15, n: "Brown Sugar Milk", k: "Milk Series", img: "images/brown-sugar.jpeg", p: 18000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 16, n: "Korean Strawberry", k: "Milk Series", img: "images/korean-straw.jpeg", p: 20000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 17, n: "Mango Milk", k: "Milk Series", img: "images/mango-milk.jpeg", p: 20000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 18, n: "Lemon Tea", k: "Tea Series", img: "images/lemon-tea.jpeg", p: 15000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 19, n: "Thai Tea", k: "Tea Series", img: "images/thati-tea.jpeg", p: 15000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 20, n: "Green Tea", k: "Tea Series", img: "images/greentea.jpeg", p: 15000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 21, n: "Matcha Latte", k: "Matcha Series", img: "images/matcha-latte.jpeg", p: 25000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 22, n: "Matcha Strawberry", k: "Matcha Series", img: "images/matcha-straw.jpeg", p: 30000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 23, n: "Putu Belanda", k: "Dessert", img: "images/putu-belanda.jpeg", p: 20000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 24, n: "Cheesekuit", k: "Dessert", img: "images/cheesekuit.jpeg", p: 13000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 25, n: "Pudding", k: "Dessert", img: "images/pudding.jpeg", p: 13000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 26, n: "Cookies", k: "Dessert", img: "images/cookies.jpeg", p: 13000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 27, n: "Risol Coklat", k: "Dessert", img: "images/risol-coklat.jpeg", p: 8000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 28, n: "Risol Mayo", k: "Dessert", img: "images/risol-mayo.jpeg", p: 6000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 29, n: "Donat", k: "Dessert", img: "images/donat.jpeg", p: 5000, d: "Cokelat kental manis dipadu susu murni." },
    { id: 30, n: "Roti", k: "Dessert", img: "images/roti.jpeg", p: 6000, d: "Cokelat kental manis dipadu susu murni." }
];

const MOODS = [
    { k: "Butuh semangat", m: 1, t: "Kopi dua shot untuk memulai hari." },
    { k: "Ingin santai", m: 8, t: "Segar dan ringan, cocok untuk ngobrol." },
    { k: "Lagi kerja keras", m: 9, t: "Manis dan kuat, tahan sampai sore." },
    { k: "Hati melankolis", m: 3, t: "Pekat dan hangat, teman malam yang baik." },
    { k: "Mau coba hal baru", m: 22, t: "Manis, lembut, hangat dalam satu gelas." }
];

const rp = n => "Rp" + n.toLocaleString("id-ID");
const $ = s => document.querySelector(s);
const cart = {};
let cat = "Semua";

/* router #/ dan #/menu */
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

/* langit berubah mengikuti scroll */
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const SK = [[[36, 59, 107], [244, 162, 97]], [[107, 58, 110], [255, 200, 87]], [[42, 27, 61], [190, 70, 90]]];

function sky() {
  const h = document.documentElement.scrollHeight - innerHeight,
    p = h > 0 ? scrollY / h : 0,
    i = p < .5 ? 0 : 1,
    t = p < .5 ? p * 2 : (p - .5) * 2;
  const a = mix(SK[i][0], SK[i + 1][0], t),
    b = mix(SK[i][1], SK[i + 1][1], t),
    r = document.documentElement.style;
  r.setProperty("--s1", `rgb(${a})`);
  r.setProperty("--s2", `rgb(${b})`);
}
addEventListener("scroll", sky, { passive: true });

/* cahaya kursor + biji kopi parallax */
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

/* marquee & status */
$("#mq").innerHTML = (["Labo Coffee", "Palm Coffee", "Latte", "Vanilla Latte", "Americano"].map(w => w + " &nbsp;✦&nbsp; ").join("")).repeat(4);
(function () {
const h = new Date().getHours(), o = h >= 8 && h < 17;
$("#status").className = "status " + (o ? "open" : "");
$("#stx").textContent = o ? "Buka sampai 17.00" : "Tutup, buka 08.00";
})();

/* pemilih mood */
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
    </div>
    <button class="btn" id="mAdd">Tambah ke pesanan</button>`;
    $("#mAdd").onclick = () => add(d.id);
    res.classList.remove("pop");
    void res.offsetWidth;
    res.classList.add("pop");
};
$("#moods").appendChild(b);
});

/* halaman menu: filter, cari, tilt 3D */
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
        <button class="add" aria-label="Tambah ${m.n}">+</button>
      </div>`;
    c.querySelector(".add").onclick = () => add(m.id);
    g.appendChild(c);
  });
}
$("#q").oninput = grid;

/* keranjang */
function add(id) {
  cart[id] = (cart[id] || 0) + 1;
  draw();
  const b = $("#cartbtn");
  b.classList.remove("bump");
  void b.offsetWidth;
  b.classList.add("bump");
}

function draw() {
  let tot = 0, n = 0, txt = "Halo Senja Seduh, saya mau pesan:\n";
  const L = $("#lines");
  L.innerHTML = "";
  Object.entries(cart).forEach(([id, q]) => {
    const d = MENU.find(x => x.id == id);
    tot += d.p * q;
    n += q;
    txt += `- ${q}x ${d.n}\n`;
    const r = document.createElement("div");
    r.className = "ln";
    r.innerHTML = `<span>${q}× ${d.n}</span><span>${rp(d.p * q)}</span>`;
    L.appendChild(r);
  });
  if (!n) L.innerHTML = '<p style="color:var(--mut)">Belum ada pesanan. Tekan + pada menu.</p>';
  $("#cnt").textContent = n;
  $("#tot").textContent = rp(tot);
  $("#wa").style.display = n ? "inline-block" : "none";
  $("#wa").href = "https://wa.me/6281356379620?text=" + encodeURIComponent(txt + "Total: " + rp(tot));
}

$("#cartbtn").onclick = () => $("#drawer").classList.add("on");
$("#close").onclick = () => $("#drawer").classList.remove("on");
addEventListener("keydown", e => e.key === "Escape" && $("#drawer").classList.remove("on"));

/* hitung angka saat terlihat */
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
draw();
route();