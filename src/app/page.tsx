import LeistungenNav from './leistungen/LeistungenNav';
import HeroVideo from '@/components/HeroVideo';
import Preloader from '@/components/Preloader';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Preloader />
      <LeistungenNav />
      <h1 className="sr-only">
        Studio Fyrnys – Innenarchitektur und Interior Design in Frankfurt
      </h1>
      <HeroVideo />
      {/* Wrapper supplies the page gutter this full-bleed layout lacks. */}
      <div style={{ padding: '0 16px', backgroundColor: '#f7f6f0' }}>
        <SiteFooter />
      </div>
    </div>
  );
}
