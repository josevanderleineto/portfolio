import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <section className="flex items-center justify-center min-h-screen bg-background text-text p-6">
      <h1 className="text-5xl font-bold text-primary">{t('title')}</h1>
    </section>
  );
}
