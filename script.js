(function () {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Theme
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("themeToggle").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // Hero
  document.title = `${d.name} — Portfolio`;
  $("logo").textContent = d.name.charAt(0) + ".";
  $("heroRole").textContent = d.role;
  $("heroName").innerHTML = `${esc(d.name)}<span class="dot">.</span>`;
  $("heroTagline").textContent = d.tagline;
  $("heroLocation").textContent = `Based in ${d.location} · Available for work`;

  // Projects
  const hue = (s) => [...s].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  const cats = ["All", ...new Set(d.projects.map((p) => p.category))];
  let active = "All";
  const renderFilters = () => {
    $("filters").innerHTML = cats.map((c) => `<button class="${c === active ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  };
  const renderProjects = () => {
    $("projects").innerHTML = d.projects
      .filter((p) => active === "All" || p.category === active)
      .map((p, i) => {
        const h = hue(p.title);
        const bg = p.image
          ? `background-image:url('${esc(p.image)}')`
          : `background:linear-gradient(135deg,hsl(${h} 65% 55%),hsl(${(h + 40) % 360} 70% 40%))`;
        const links = Object.entries(p.links || {})
          .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${k === "code" ? "Source ↗" : "View ↗"}</a>`)
          .join("");
        return `<article class="card" style="animation-delay:${i * 60}ms">
          <div class="thumb" style="${bg}">${p.image ? "" : esc(p.title.charAt(0))}</div>
          <div class="card-body">
            <div class="card-top"><span class="cat">${esc(p.category)}</span><span>${esc(p.year)}</span></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.description)}</p>
            <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
            <div class="card-links">${links}</div>
          </div>
        </article>`;
      })
      .join("");
  };
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    active = b.dataset.cat;
    renderFilters();
    renderProjects();
  });
  renderFilters();
  renderProjects();

  // About + skills
  $("aboutText").innerHTML = d.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("resumeLink").href = d.resumeUrl;
  $("skills").innerHTML = Object.entries(d.skills)
    .map(([g, list]) => `<div><h4>${esc(g)}</h4><ul>${list.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`)
    .join("");

  // Timeline
  $("timeline").innerHTML = d.experience
    .map((x) => `<li><span class="when">${esc(x.when)}</span><h3>${esc(x.title)}</h3><div class="org">${esc(x.org)}</div><p>${esc(x.text)}</p></li>`)
    .join("");

  // Contact
  $("emailLink").href = `mailto:${d.email}`;
  $("emailLink").textContent = d.email;
  $("socials").innerHTML = d.socials.map((s) => `<li><a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("");
  $("copyright").textContent = `© ${new Date().getFullYear()} ${d.name}`;

  // Reveal on scroll
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.1 });
  document.querySelectorAll(".section").forEach((s) => { s.classList.add("reveal"); io.observe(s); });
})();
