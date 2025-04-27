import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Define o idioma com base no cookie ou usa "pt" como padrão.
  const locale = (await cookies()).get('locale')?.value || 'en';

  return {
    locale,
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
