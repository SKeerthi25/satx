import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

// Import All 31 Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { NewBuildsPage } from './pages/NewBuildsPage';
import { HouseExtensionsPage } from './pages/HouseExtensionsPage';
import { HomeRenovationsPage } from './pages/HomeRenovationsPage';
import { LoftConversionsPage } from './pages/LoftConversionsPage';
import { PropertyRefurbishmentPage } from './pages/PropertyRefurbishmentPage';
import { KitchenBathroomPage } from './pages/KitchenBathroomPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';
import { DesignPlanningPage } from './pages/DesignPlanningPage';
import { QualityPage } from './pages/QualityPage';
import { HealthSafetyPage } from './pages/HealthSafetyPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { WhySatxPage } from './pages/WhySatxPage';
import { ClientExperiencePage } from './pages/ClientExperiencePage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { CareersPage } from './pages/CareersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { GetQuotePage } from './pages/GetQuotePage';
import { CompanyProfilePage } from './pages/CompanyProfilePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [selectedParamId, setSelectedParamId] = useState<string | null>(null);

  // Synchronize state with URL hash or path
  useEffect(() => {
    const parseUrl = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      const [path, queryString] = hash.split('?');
      setCurrentPath(path || '/');

      if (queryString) {
        const params = new URLSearchParams(queryString);
        setSelectedParamId(params.get('id'));
      } else {
        setSelectedParamId(null);
      }
    };

    parseUrl();
    window.addEventListener('popstate', parseUrl);
    window.addEventListener('hashchange', parseUrl);
    return () => {
      window.removeEventListener('popstate', parseUrl);
      window.removeEventListener('hashchange', parseUrl);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    const [cleanPath, queryString] = path.split('?');
    setCurrentPath(cleanPath);

    if (queryString) {
      const params = new URLSearchParams(queryString);
      setSelectedParamId(params.get('id'));
    } else {
      setSelectedParamId(null);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/services':
        return <ServicesOverviewPage onNavigate={navigateTo} />;
      case '/services/new-builds':
        return <NewBuildsPage onNavigate={navigateTo} />;
      case '/services/house-extensions':
        return <HouseExtensionsPage onNavigate={navigateTo} />;
      case '/services/home-renovations':
        return <HomeRenovationsPage onNavigate={navigateTo} />;
      case '/services/loft-conversions':
        return <LoftConversionsPage onNavigate={navigateTo} />;
      case '/services/property-refurbishment':
        return <PropertyRefurbishmentPage onNavigate={navigateTo} />;
      case '/services/kitchen-bathroom':
        return <KitchenBathroomPage onNavigate={navigateTo} />;
      case '/services/residential-construction':
        return <NewBuildsPage onNavigate={navigateTo} />;
      case '/projects':
        return <ProjectsPage onNavigate={navigateTo} selectedProjectId={selectedParamId} />;
      case '/process':
        return <ProcessPage onNavigate={navigateTo} />;
      case '/design-planning':
        return <DesignPlanningPage onNavigate={navigateTo} />;
      case '/quality':
        return <QualityPage onNavigate={navigateTo} />;
      case '/health-safety':
        return <HealthSafetyPage onNavigate={navigateTo} />;
      case '/sustainability':
        return <SustainabilityPage onNavigate={navigateTo} />;
      case '/materials':
        return <MaterialsPage onNavigate={navigateTo} />;
      case '/before-after':
        return <BeforeAfterPage onNavigate={navigateTo} />;
      case '/why-satx':
        return <WhySatxPage onNavigate={navigateTo} />;
      case '/client-experience':
        return <ClientExperiencePage onNavigate={navigateTo} />;
      case '/testimonials':
        return <TestimonialsPage onNavigate={navigateTo} />;
      case '/faq':
        return <FAQPage onNavigate={navigateTo} />;
      case '/careers':
        return <CareersPage onNavigate={navigateTo} />;
      case '/news':
        return <NewsPage onNavigate={navigateTo} selectedArticleId={selectedParamId} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/quote':
        return <GetQuotePage onNavigate={navigateTo} />;
      case '/company-profile':
        return <CompanyProfilePage onNavigate={navigateTo} />;
      case '/privacy':
        return <PrivacyPage onNavigate={navigateTo} />;
      case '/terms':
        return <TermsPage onNavigate={navigateTo} />;
      case '/cookies':
        return <CookiePolicyPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
      <CookieBanner onNavigate={navigateTo} />
    </div>
  );
}

export default App;
