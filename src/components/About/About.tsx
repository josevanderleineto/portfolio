import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations();

  return (
    <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-8 text-center">{t('titleAbout')}</h2>
      
      {/* Detalhes sobre mim */}
      <div className="space-y-6">
        <p className="text-lg color-text">{t('aboutDetails1')}</p>
        <p className="text-lg color-text">{t('aboutDetails2')}</p>
      </div>
      
      {/* Subtítulo de serviços */}
      <h3 className="text-3xl font-semibold mt-12 mb-6 color-text">{t('subTitle')}</h3>
      
      {/* Serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h4 className="text-xl font-semibold mb-3">{t('service1Title')}</h4>
          <p>{t('service1Text')}</p>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h4 className="text-xl font-semibold mb-3">{t('service2Title')}</h4>
          <p>{t('service2Text')}</p>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h4 className="text-xl font-semibold mb-3">{t('service3Title')}</h4>
          <p>{t('service3Text')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
