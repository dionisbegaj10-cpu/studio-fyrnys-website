import LeistungenNav from './leistungen/LeistungenNav';
import SplashSlider from '@/components/SplashSlider';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <LeistungenNav />
      <SplashSlider />
    </div>
  );
}
