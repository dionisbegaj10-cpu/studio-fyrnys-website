import LeistungenNav from './leistungen/LeistungenNav';
import SplashSlider from '@/components/SplashSlider';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Preloader />
      <LeistungenNav />
      <SplashSlider />
      <footer style={{ padding: '20px 20px', borderTop: '1px solid #2a2a2a', backgroundColor: '#000' }}>
        <p style={{ fontFamily: "'TT Norms Pro', sans-serif", fontSize: '10px', letterSpacing: '0.12em', color: '#9b9690', margin: 0 }}>
          Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutz&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Studio Fyrnys
        </p>
      </footer>
    </div>
  );
}
