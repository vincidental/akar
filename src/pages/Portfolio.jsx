import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import ClientLogoMarquee from '../components/portfolio/ClientLogoMarquee';

export default function Portfolio() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <PortfolioHero />
      <ClientLogoMarquee />
      <PortfolioGrid />
      <PortfolioCTA />
    </div>
  );
}