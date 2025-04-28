/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl';

const Home = () => {
    const t = useTranslations();

    return (
        <section id='home' className="flex flex-col items-center pt-24 h-screen color-text">
            <h1 className="text-primary text-4xl mb-5 md:text-3xl">{t('titleHome')}</h1>
            <h2 className="text-primary text-2xl mb-5 md:text-xl">{t('subTitleHome')}</h2>
            <img 
                src='https://github.com/josevanderleineto.png' 
                alt="Home" 
                className="w-36 h-36 rounded-full border border-transparent shadow-[2px_-3px_51px_33px_rgba(27,212,212,0.85)] animate-pulseUpDown"
            />
            <p className="flex flex-col items-center justify-center w-4/5 text-xl text-primary mt-5 md:text-lg">
                {t('textHome')}
            </p>
            <a href={t('resume')} target="_blank" rel="noopener noreferrer">
                <button className="mt-5 bg-secondary text-primary py-2 px-5 rounded-lg hover:bg-secondary-hover transition-all duration-300 ease-in-out">
                    {t('cv')}
                </button>
            </a>
        </section>
    );
};

export default Home;
