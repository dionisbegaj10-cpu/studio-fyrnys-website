import LeistungenNav from './leistungen/LeistungenNav';
import HeroVideo from '@/components/HeroVideo';
import Preloader from '@/components/Preloader';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Preloader />
      <LeistungenNav />
      <HeroVideo />
      {/* Wrapper supplies the page gutter this full-bleed layout lacks. */}
      <div style={{ padding: '0 16px', backgroundColor: '#f7f6f0' }}>
        <SiteFooter />
      </div>
    </div>
  );
}
