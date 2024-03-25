export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <section className="footer_container">
      <div className="footer-content-container">
        <center>
          <h1>Copyright©{year}</h1>
        </center>
      </div>
    </section>
  );
}
