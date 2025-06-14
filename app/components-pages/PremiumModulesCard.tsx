'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

type LanguageCode = 'en' | 'pt' | 'es' | 'fr'
type Translations = {
  [key in LanguageCode]: {
    title: string
    description: string
    availableModules: string
    costMessage: string
    runButton: string
  }
}

export function PremiumModulesCard() {
  const [language, setLanguage] = useState<LanguageCode>('en')

  const translations: Translations = {
    en: {
      title: 'Premium Modules',
      description: 'Changed your mind? No worries! You can still enable premium modules for this search. Results will be shown in real time as they load.',
      availableModules: 'Available Modules',
      costMessage: 'This search will cost 3 credits',
      runButton: 'Run premium modules'
    },
    pt: {
      title: 'Módulos Premium',
      description: 'Mudou de ideia? Sem problemas! Você ainda pode ativar módulos premium para esta pesquisa. Os resultados serão mostrados em tempo real conforme forem carregados.',
      availableModules: 'Módulos Disponíveis',
      costMessage: 'Esta pesquisa custará 3 créditos',
      runButton: 'Executar módulos premium'
    },
    es: {
      title: 'Módulos Premium',
      description: '¿Cambiaste de opinión? ¡No hay problema! Aún puedes activar módulos premium para esta búsqueda. Los resultados se mostrarán en tiempo real a medida que se carguen.',
      availableModules: 'Módulos Disponibles',
      costMessage: 'Esta búsqueda costará 3 créditos',
      runButton: 'Ejecutar módulos premium'
    },
    fr: {
      title: 'Modules Premium',
      description: 'Vous avez changé d\'avis ? Pas de souci ! Vous pouvez toujours activer les modules premium pour cette recherche. Les résultats seront affichés en temps réel au fur et à mesure de leur chargement.',
      availableModules: 'Modules Disponibles',
      costMessage: 'Cette recherche coûtera 3 crédits',
      runButton: 'Exécuter les modules premium'
    }
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as LanguageCode)
  }

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' }
  ]

  return (
    <div className="font-sans rounded-xl border border-gray-300 shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 p-5 flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-700">{translations[language].title}</p>
          <p className="text-sm text-gray-500">{translations[language].description}</p>
        </div>
        <div className="self-start md:self-center">
          <select 
            className="px-3 py-2 text-sm border border-gray-300 rounded-md w-full md:w-auto"
            value={language}
            onChange={handleLanguageChange}
            aria-label="Select language"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:flex-1 border-b md:border-b-0 md:border-r border-gray-300 p-5">
          <p className="text-lg font-semibold text-gray-700 mb-4">{translations[language].availableModules}</p>
          <div className="flex flex-wrap justify-start gap-4">
            {[
              'aliexpress',
              'bleacher',
              'ebay',
              'edf',
              'samsung',
              'samsunghealth',
              'spirit',
              'steam',
              'thefork',
            ].map((module) => (
              <img
                key={module}
                src={`https://cdn.osint.industries/modules/${module}.png`}
                alt={module}
                className="w-[60px] h-[60px] rounded"
              />
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="w-full md:w-[250px] p-5 flex flex-col items-center justify-center gap-3">
          <p className="text-sm font-medium text-gray-600 text-center">
            {translations[language].costMessage}
          </p>
          <button className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto">
            <Search size={20} strokeWidth={2} />
            {translations[language].runButton}
          </button>
        </div>
      </div>
    </div>
  )
}