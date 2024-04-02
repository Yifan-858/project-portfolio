export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-section">
      <p>&copy; {currentYear} Yifan Wang.</p>
    </section>
  );
};
