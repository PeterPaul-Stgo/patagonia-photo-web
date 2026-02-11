import { useMemo, useState } from "react";

export default function App() {
  const year = new Date().getFullYear();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    servicio: "Retratos Premium Patagonia",
    fecha: "",
    mensaje: "",
  });

  const whatsappNumber = "56987963510"; // <-- CAMBIA ESTO (ej: 56912345678)
  const emailContacto = "reservas@vientoaustralstudio.cl"; // <-- opcional

  const waLink = useMemo(() => {
    const text = `Hola Viento Austral Studio 👋
Nombre: ${form.nombre || "-"}
Email: ${form.email || "-"}
Ciudad: ${form.ciudad || "-"}
Servicio: ${form.servicio || "-"}
Fecha tentativa: ${form.fecha || "-"}
Mensaje: ${form.mensaje || "-"}

Quiero cotizar / reservar una sesión.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [form, whatsappNumber]);

  return (
    <div style={styles.page}>
      {/* NAV */}
      <header style={styles.navWrap}>
        <nav style={styles.nav}>
          <div style={styles.brand}>
            <div style={styles.brandMark} aria-hidden="true" />
            <div>
              <div style={styles.brandName}>Viento Austral Studio</div>
              <div style={styles.brandTag}>Retratos · Naturaleza · Paisajes</div>
            </div>
          </div>

          <div style={styles.navLinks}>
            <a style={styles.navLink} href="#servicios">Servicios</a>
            <a style={styles.navLink} href="#portfolio">Portafolio</a>
            <a style={styles.navLink} href="#disponibilidad">Disponibilidad</a>
            <a style={styles.navLink} href="#contacto">Contacto</a>
            <a style={styles.navCta} href="#contacto">Reservar</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div style={styles.heroLeft}>
            <div style={styles.kicker}>Patagonia-inspired • Editorial minimal</div>
            <h1 style={styles.h1}>Viento Austral Studio</h1>
            <p style={styles.lead}>
              Fotografía con identidad austral: luz natural, composición limpia y una narrativa visual
              honesta. Retratos, aves, naturaleza y paisajes.
            </p>

            <div style={styles.heroMetaRow}>
              <div style={styles.pill}>Coyhaique · Verano</div>
              <div style={styles.pill}>Santiago · Otoño y Primavera</div>
              <div style={styles.pillSoft}>Agendas limitadas</div>
            </div>

            <div style={styles.heroActions}>
              <a href="#contacto" style={styles.primaryBtn}>Reservar sesión</a>
              <a href="#portfolio" style={styles.secondaryBtn}>Ver portafolio</a>
            </div>

            <div style={styles.subNote}>
              Tip: si quieres, luego reemplazamos este bloque por una foto hero (paisaje patagón + grano suave).
            </div>
          </div>

          {/* Hero visual (placeholder editorial + outdoor) */}
          <div style={styles.heroRight}>
            <div style={styles.heroCard}>
              <div style={styles.heroCardTop}>
                <div style={styles.heroCardTitle}>Colección Austral</div>
                <div style={styles.heroCardSmall}>luz · viento · textura</div>
              </div>

              <div style={styles.heroImageMock} aria-hidden="true">
                <div style={styles.mockHorizon} />
                <div style={styles.mockGrain} />
              </div>

              <div style={styles.heroCardBottom}>
                <div style={styles.heroStats}>
                  <div>
                    <div style={styles.statNum}>4</div>
                    <div style={styles.statLabel}>líneas de trabajo</div>
                  </div>
                  <div>
                    <div style={styles.statNum}>2</div>
                    <div style={styles.statLabel}>ciudades / temporada</div>
                  </div>
                  <div>
                    <div style={styles.statNum}>1</div>
                    <div style={styles.statLabel}>estética autoral</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.heroHint}>
              Outdoor sutil: tonos piedra, viento, grano y “horizonte”.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.h2}>Servicios</h2>
          <p style={styles.sectionSub}>
            Un enfoque editorial: dirección simple, naturalidad, y resultados listos para imprimir o publicar.
          </p>
        </div>

        <div style={styles.cardsGrid}>
          <ServiceCard
            title="Retratos"
            desc="Sesiones personales, marca personal y retrato editorial. Minimalista, elegante, honesto."
            tag="Santiago / Coyhaique"
          />
          <ServiceCard
            title="Sesiones lifestyle"
            desc="Parejas, proyectos creativos y sesiones en exterior. Movimiento, cercanía y atmósfera."
            tag="Exteriores / ciudad"
          />
          <ServiceCard
            title="Aves & Naturaleza"
            desc="Fauna con respeto y detalle. Ideal para colecciones, impresiones y uso editorial."
            tag="Patagonia"
          />
          <ServiceCard
            title="Paisajes"
            desc="Colecciones por temporada: montaña, bosque, lagos y cielo austral. Listo para fine art."
            tag="Patagonia-inspired"
          />
        </div>

        <div style={styles.callout}>
          <div style={styles.calloutTitle}>Entregas</div>
          <div style={styles.calloutText}>
            Galería digital en alta calidad · Selección curada · Opciones para impresión (fine art) y licencias.
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ ...styles.section, background: styles.colors.wash }}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.h2}>Portafolio</h2>
          <p style={styles.sectionSub}>
            Aquí pondremos tus fotos reales. Por ahora dejamos placeholders para que veas el layout.
          </p>
        </div>

        <div style={styles.galleryGrid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} style={styles.galleryItem}>
              <div style={styles.galleryBadge}>
                {i % 3 === 0 ? "Retratos" : i % 3 === 1 ? "Naturaleza" : "Paisajes"}
              </div>
              <div style={styles.galleryMock}>
                <div style={styles.mockGrain} />
              </div>
            </div>
          ))}
        </div>

        <div style={styles.portfolioFooter}>
          <div style={styles.miniNote}>
            Cuando tengas 12–24 fotos, las ordenamos por categorías y añadimos “click para ver” en pantalla completa.
          </div>
          <a href="#contacto" style={styles.secondaryBtn}>
            Quiero cotizar una sesión
          </a>
        </div>
      </section>

      {/* AVAILABILITY */}
      <section id="disponibilidad" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.h2}>Disponibilidad</h2>
          <p style={styles.sectionSub}>
            Para mantener calidad y edición consistente, trabajo con cupos acotados por semana.
          </p>
        </div>

        <div style={styles.avGrid}>
          <div style={styles.avCard}>
            <div style={styles.avTop}>
              <div style={styles.avTitle}>Coyhaique</div>
              <div style={styles.avPill}>Verano</div>
            </div>
            <p style={styles.avText}>
              Sesiones outdoor, retratos con atmósfera patagónica, y naturaleza/aves. Ideal para luz larga y tonos suaves.
            </p>
            <ul style={styles.list}>
              <li>Retratos outdoor</li>
              <li>Sesiones lifestyle</li>
              <li>Naturaleza y paisajes</li>
            </ul>
          </div>

          <div style={styles.avCard}>
            <div style={styles.avTop}>
              <div style={styles.avTitle}>Santiago</div>
              <div style={styles.avPillSoft}>Otoño y Primavera</div>
            </div>
            <p style={styles.avText}>
              Retrato editorial y marca personal con estética limpia. Exteriores urbanos y luz natural controlada.
            </p>
            <ul style={styles.list}>
              <li>Marca personal</li>
              <li>Retrato editorial</li>
              <li>Sesiones outdoor urbanas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ ...styles.section, paddingBottom: 72 }}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.h2}>Contacto</h2>
          <p style={styles.sectionSub}>
            Cuéntame qué quieres fotografiar y te respondo con propuesta + valores (según fecha y ciudad).
          </p>
        </div>

        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <div style={styles.contactTitle}>Enviar solicitud</div>

            <div style={styles.formGrid}>
              <Field label="Nombre">
                <input
                  style={styles.input}
                  value={form.nombre}
                  onChange={(e) => setForm((p) => ({ ...p, nombre: e.target.value }))}
                  placeholder="Tu nombre"
                />
              </Field>

              <Field label="Email">
                <input
                  style={styles.input}
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="tuemail@correo.com"
                />
              </Field>

              <Field label="Ciudad">
                <input
                  style={styles.input}
                  value={form.ciudad}
                  onChange={(e) => setForm((p) => ({ ...p, ciudad: e.target.value }))}
                  placeholder="Santiago / Coyhaique"
                />
              </Field>

              <Field label="Servicio">
                <select
                  style={styles.input}
                  value={form.servicio}
                  onChange={(e) => setForm((p) => ({ ...p, servicio: e.target.value }))}
                >
                  <option>Retrato</option>
                  <option>Sesión lifestyle</option>
                  <option>Aves & Naturaleza</option>
                  <option>Paisajes (impresión/licencia)</option>
                </select>
              </Field>

              <Field label="Fecha tentativa">
                <input
                  style={styles.input}
                  value={form.fecha}
                  onChange={(e) => setForm((p) => ({ ...p, fecha: e.target.value }))}
                  placeholder="Ej: 15 de marzo"
                />
              </Field>

              <Field label="Mensaje" full>
                <textarea
                  style={{ ...styles.input, minHeight: 110, resize: "vertical" }}
                  value={form.mensaje}
                  onChange={(e) => setForm((p) => ({ ...p, mensaje: e.target.value }))}
                  placeholder="Cuéntame la idea (lugar, estilo, referencias, etc.)"
                />
              </Field>
            </div>

            <div style={styles.formActions}>
              <a style={styles.primaryBtn} href={waLink} target="_blank" rel="noreferrer">
                Enviar por WhatsApp
              </a>
              <div style={styles.smallPrint}>
                WhatsApp abre con el mensaje prellenado. Cambia el número en <code>App.jsx</code>.
              </div>
            </div>
          </div>

          <div style={styles.sideCard}>
            <div style={styles.sideTitle}>Datos</div>

            <div style={styles.sideRow}>
              <div style={styles.sideLabel}>Marca</div>
              <div style={styles.sideValue}>Viento Austral Studio</div>
            </div>

            <div style={styles.sideRow}>
              <div style={styles.sideLabel}>WhatsApp</div>
              <div style={styles.sideValue}>+{whatsappNumber}</div>
            </div>

            <div style={styles.sideRow}>
              <div style={styles.sideLabel}>Email</div>
              <div style={styles.sideValue}>{emailContacto}</div>
            </div>

            <div style={styles.sideDivider} />

            <div style={styles.sideHint}>
              Siguiente upgrade (pro): poner tu Instagram, testimonios cortos y un botón para cotizar “pack retrato”.
            </div>

            <a href="#portfolio" style={{ ...styles.secondaryBtn, width: "100%", textAlign: "center" }}>
              Ver portafolio
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={styles.footerBrand}>Viento Austral Studio</div>
            <div style={styles.footerSmall}>© {year} · Fotografía editorial con alma austral</div>
          </div>

          <div style={styles.footerLinks}>
            <a style={styles.footerLink} href="#servicios">Servicios</a>
            <a style={styles.footerLink} href="#portfolio">Portafolio</a>
            <a style={styles.footerLink} href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, tag }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTop}>
        <div style={styles.cardTitle}>{title}</div>
        <div style={styles.cardTag}>{tag}</div>
      </div>
      <div style={styles.cardDesc}>{desc}</div>
    </div>
  );
}

function Field({ label, children, full }) {
  return (
    <label style={{ ...styles.field, gridColumn: full ? "1 / -1" : undefined }}>
      <div style={styles.fieldLabel}>{label}</div>
      {children}
    </label>
  );
}

const styles = {
  colors: {
    ink: "#0b0b0c",
    text: "#121316",
    sub: "#4a4f57",
    line: "#e7e7ea",
    wash: "#f6f6f7",
    card: "#ffffff",
  },
  page: {
    minHeight: "100vh",
    background: "#fff",
    color: "#121316",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },

  navWrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.86)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #eee",
  },
  nav: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  brandMark: {
    width: 12,
    height: 12,
    borderRadius: 999,
    background: "linear-gradient(135deg, #111, #777)",
    boxShadow: "0 1px 0 rgba(0,0,0,0.12)",
  },
  brandName: { fontWeight: 700, letterSpacing: 0.2 },
  brandTag: { fontSize: 12, color: "#5a606a" },

  navLinks: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" },
  navLink: {
    fontSize: 13,
    color: "#2a2d33",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 10,
  },
  navCta: {
    fontSize: 13,
    color: "#fff",
    background: "#111",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 12,
  },

  hero: { padding: "54px 18px 26px" },
  heroGrid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 22,
    alignItems: "stretch",
  },
  heroLeft: {
    border: "1px solid #eee",
    borderRadius: 22,
    padding: "32px 26px",
    background: "linear-gradient(180deg, #ffffff, #fbfbfb)",
  },
  heroRight: { display: "flex", flexDirection: "column", gap: 10 },
  kicker: {
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#6a707a",
    marginBottom: 12,
  },
  h1: { fontSize: 44, lineHeight: 1.05, margin: 0, letterSpacing: -0.8 },
  lead: { marginTop: 14, marginBottom: 18, color: "#3f454f", fontSize: 16, maxWidth: 560 },

  heroMetaRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6, marginBottom: 18 },
  pill: {
    fontSize: 12,
    padding: "8px 10px",
    border: "1px solid #e7e7ea",
    borderRadius: 999,
    background: "#fff",
    color: "#2b2f36",
  },
  pillSoft: {
    fontSize: 12,
    padding: "8px 10px",
    border: "1px solid #e7e7ea",
    borderRadius: 999,
    background: "#f6f6f7",
    color: "#2b2f36",
  },

  heroActions: { display: "flex", gap: 10, flexWrap: "wrap" },
  primaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: 14,
    background: "#111",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: 14,
    background: "#fff",
    color: "#111",
    textDecoration: "none",
    fontSize: 14,
    border: "1px solid #e7e7ea",
  },
  subNote: { marginTop: 16, fontSize: 12, color: "#6a707a" },

  heroCard: {
    borderRadius: 22,
    border: "1px solid #eee",
    background: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: 320,
  },
  heroCardTop: { padding: "18px 18px 10px" },
  heroCardTitle: { fontWeight: 700, letterSpacing: -0.2 },
  heroCardSmall: { fontSize: 12, color: "#6a707a", marginTop: 2 },
  heroImageMock: {
    position: "relative",
    flex: 1,
    background:
      "radial-gradient(800px 260px at 30% 40%, rgba(0,0,0,0.10), rgba(0,0,0,0.02)), linear-gradient(180deg, #f7f7f8, #ffffff)",
  },
  mockHorizon: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "54%",
    height: 1,
    background: "rgba(0,0,0,0.08)",
  },
  mockGrain: {
    position: "absolute",
    inset: 0,
    background:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.12'/%3E%3C/svg%3E\")",
    mixBlendMode: "multiply",
    opacity: 0.35,
  },
  heroCardBottom: { padding: "14px 18px 18px", borderTop: "1px solid #f0f0f2" },
  heroStats: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 },
  statNum: { fontSize: 18, fontWeight: 800 },
  statLabel: { fontSize: 12, color: "#6a707a" },
  heroHint: { fontSize: 12, color: "#6a707a", paddingLeft: 6 },

  section: { padding: "54px 18px" },
  sectionHeader: { maxWidth: 1100, margin: "0 auto 20px" },
  h2: { fontSize: 30, margin: 0, letterSpacing: -0.4 },
  sectionSub: { marginTop: 10, color: "#4a4f57", maxWidth: 720 },

  cardsGrid: {
    maxWidth: 1100,
    margin: "18px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
  },
  card: {
    border: "1px solid #e7e7ea",
    borderRadius: 18,
    background: "#fff",
    padding: 18,
  },
  cardTop: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 },
  cardTitle: { fontWeight: 800, letterSpacing: -0.2 },
  cardTag: { fontSize: 12, color: "#6a707a" },
  cardDesc: { marginTop: 10, color: "#424854", fontSize: 14 },

  callout: {
    maxWidth: 1100,
    margin: "18px auto 0",
    borderRadius: 18,
    border: "1px solid #e7e7ea",
    background: "linear-gradient(180deg, #ffffff, #fbfbfb)",
    padding: 18,
    display: "flex",
    gap: 10,
    alignItems: "baseline",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  calloutTitle: { fontWeight: 800 },
  calloutText: { color: "#4a4f57" },

  galleryGrid: {
    maxWidth: 1100,
    margin: "18px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
  },
  galleryItem: {
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid #e7e7ea",
    background: "#fff",
    position: "relative",
    minHeight: 160,
  },
  galleryBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.92)",
    border: "1px solid #eee",
    color: "#2a2d33",
    zIndex: 1,
  },
  galleryMock: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(700px 220px at 30% 40%, rgba(0,0,0,0.10), rgba(0,0,0,0.02)), linear-gradient(180deg, #f7f7f8, #ffffff)",
  },
  portfolioFooter: {
    maxWidth: 1100,
    margin: "18px auto 0",
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  miniNote: { fontSize: 12, color: "#6a707a" },

  avGrid: {
    maxWidth: 1100,
    margin: "18px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 14,
  },
  avCard: {
    borderRadius: 18,
    border: "1px solid #e7e7ea",
    background: "#fff",
    padding: 18,
  },
  avTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 },
  avTitle: { fontWeight: 900, letterSpacing: -0.3 },
  avPill: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid #e7e7ea",
    background: "#fff",
    color: "#2a2d33",
  },
  avPillSoft: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid #e7e7ea",
    background: "#f6f6f7",
    color: "#2a2d33",
  },
  avText: { marginTop: 10, color: "#424854", fontSize: 14 },
  list: { marginTop: 10, paddingLeft: 18, color: "#4a4f57" },

  contactGrid: {
    maxWidth: 1100,
    margin: "18px auto 0",
    display: "grid",
    gridTemplateColumns: "1.3fr 0.7fr",
    gap: 14,
    alignItems: "start",
  },
  contactCard: {
    borderRadius: 18,
    border: "1px solid #e7e7ea",
    background: "#fff",
    padding: 18,
  },
  contactTitle: { fontWeight: 900, letterSpacing: -0.3, marginBottom: 12 },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
  },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  fieldLabel: { fontSize: 12, color: "#6a707a" },
  input: {
    border: "1px solid #e7e7ea",
    borderRadius: 14,
    padding: "12px 12px",
    outline: "none",
    fontSize: 14,
    background: "#fff",
  },
  formActions: { marginTop: 12, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },
  smallPrint: { fontSize: 12, color: "#6a707a" },

  sideCard: {
    borderRadius: 18,
    border: "1px solid #e7e7ea",
    background: "linear-gradient(180deg, #ffffff, #fbfbfb)",
    padding: 18,
  },
  sideTitle: { fontWeight: 900, letterSpacing: -0.3, marginBottom: 12 },
  sideRow: { display: "flex", justifyContent: "space-between", gap: 10, padding: "10px 0" },
  sideLabel: { fontSize: 12, color: "#6a707a" },
  sideValue: { fontSize: 13, color: "#2a2d33" },
  sideDivider: { height: 1, background: "#eee", margin: "8px 0 12px" },
  sideHint: { fontSize: 12, color: "#6a707a", marginBottom: 12 },

  footer: { borderTop: "1px solid #eee", padding: "24px 18px", background: "#fff" },
  footerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  footerBrand: { fontWeight: 900 },
  footerSmall: { fontSize: 12, color: "#6a707a", marginTop: 4 },
  footerLinks: { display: "flex", gap: 12, flexWrap: "wrap" },
  footerLink: { fontSize: 13, color: "#2a2d33", textDecoration: "none", padding: "8px 10px", borderRadius: 10 },
};
