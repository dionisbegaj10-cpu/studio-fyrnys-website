import LeistungenNav from './leistungen/LeistungenNav';
import SplashSlider from '@/components/SplashSlider';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Preloader />
      <LeistungenNav />
      <SplashSlider />
    </div>
  );
}
