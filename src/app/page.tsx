import LeistungenNav from './leistungen/LeistungenNav';
import HeroVideo from '@/components/HeroVideo';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Preloader />
      <LeistungenNav />
      <HeroVideo />
      <footer style={{ padding: '20px 20px', backgroundColor: '#f7f6f0' }}>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
          <a href="/impressum" style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/datenschutz" style={{ color: 'inherit', textDecoration: 'none' }}>Datenschutz</a>&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
        </p>
      </footer>
    </div>
  );
}
