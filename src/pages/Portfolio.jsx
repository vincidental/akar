import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

export default function Portfolio() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </div>
  );
}