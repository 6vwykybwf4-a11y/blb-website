export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 0 }}>

      {/* HERO */}
      <section style={{ padding: "60px 20px", background: "#111", color: "#fff", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", marginBottom: 10 }}>
          DFW’s Trusted Hail & Auto Body Repair Experts
        </h1>
        <p style={{ fontSize: "18px", marginBottom: 20 }}>
          Free Estimates • Insurance Assistance • Pickup & Delivery
        </p>
        <a href="tel:9728960126" style={{ background: "#e63946", color: "#fff", padding: "12px 24px", textDecoration: "none", borderRadius: 6 }}>
          Call Now: 972-896-0126
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <p>Paintless Dent Repair • Hail Damage • Full Auto Body • Insurance Claims</p>
      </section>

      {/* WHY US */}
      <section style={{ padding: "50px 20px", background: "#f5f5f5", textAlign: "center" }}>
        <h2>Why Choose Us</h2>
        <p>Family Owned • Serving DFW • Since 1999 Experience • Fast Turnaround</p>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Get Your Free Estimate Today</h2>
        <a href="tel:9728960126" style={{ background: "#111", color: "#fff", padding: "14px 28px", textDecoration: "none", borderRadius: 6 }}>
          Call Now
        </a>
      </section>

    </main>
  );
}
