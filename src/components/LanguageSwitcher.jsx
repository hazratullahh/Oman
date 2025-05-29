'use client';
import { useEffect, useState } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { Listbox } from '@headlessui/react';

const COOKIE_NAME = 'googtrans';
const PEAKSCALE_COOKIE = '.peakscale.agency';

globalThis.__GOOGLE_TRANSLATION_CONFIG__ = globalThis.__GOOGLE_TRANSLATION_CONFIG__ || {
  languages: [],
  defaultLanguage: '',
};

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [languageConfig, setLanguageConfig] = useState(null);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split('/');
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (globalThis.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = globalThis.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (globalThis.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(globalThis.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang); // Update state before reloading
    setCookie(null, COOKIE_NAME, '/auto/' + lang);

    // Destroy the '.peakscale.agency' cookie before reloading with a slight delay to ensure deletion
    destroyCookie(null, 'googtrans', {
      domain: ".peakscale.agency",
    });

    // Reload after handling cookies
    window.location.reload();

    // Destroy the cookie again if it gets re-set after reloading
    window.addEventListener('load', () => {
      destroyCookie(null, 'googtrans', {
        domain: ".peakscale.agency",
      });
    });
  };

  return (
    <div className='w-32 md:w-28'>
      <div className="text-center grid gap-4 notranslate">
        <Listbox value={currentLanguage} onChange={switchLanguage} as="div" className="relative inline-block">
          <Listbox.Button className="w-full border border-teal-500 p-2 rounded cursor-pointer text-center text-sm">
            {languageConfig.languages.find((ld) => ld.name === currentLanguage)?.title || 'Select Language'}
          </Listbox.Button>
          <Listbox.Options className="absolute w-full mt-1 border rounded shadow-lg bg-white z-10 max-h-52 overflow-y-auto">
            {languageConfig.languages.map((ld) => (
              <Listbox.Option key={`l_s_${ld.name}`} value={ld.name}>
                {({ selected, active }) => (
                  <span
                    className={`block px-2 py-1 cursor-pointer transition-colors text-sm ${selected ? 'font-bold text-teal-600' : 'text-gray-700'
                      } ${active ? 'bg-teal-100' : ''}`}
                  >
                    {ld.title}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
