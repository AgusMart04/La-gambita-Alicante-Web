const Footer = () => (
  <footer className="bg-deep-brown py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-xl font-bold text-sand mb-2">La Gambita Alicantina</p>
      <p className="font-body text-sm text-sand/60">
        C. Felipe Herrero Arias, 30, 03013 Alicante · Tel: 966 23 10 86
      </p>
      <p className="font-body text-xs text-sand/40 mt-4">
        © {new Date().getFullYear()} La Gambita Alicantina. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
