export default function Footer() {
    return (
      <>
      <footer className="footer footer-center bg-base-100 border-t-2 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a  href="/about"  className="link link-hover">About Us</a>
    <a href="/contact"  className="link link-hover">Contact Us</a>
    <a href="/privacy-policy"  className="link link-hover">Privacy Policy</a>
        <a href="/cookies"  className="link link-hover">Cookies Privacy</a>
    <a href="/terms" className="link link-hover">Terms and conditions</a>
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by GameMonetize</p>
  </aside>
</footer>
      </>
    );
  }
  
