// components/PhoneHintComposer.tsx
import React from "react";

type CountryOption = {
  value: string;
  label: string;
};

interface PhoneHintComposerProps {
  title: string;
  hints: string[];
  mask: string[];
  result: string[];
  phoneLabel: string;
  countryOptions: CountryOption[];
  selectedCountry: string;
  onCountryChange: (value: string) => void;
  note: string;
}

const PhoneHintComposer: React.FC<PhoneHintComposerProps> = ({
  title,
  hints,
  mask,
  result,
  phoneLabel,
  countryOptions,
  selectedCountry,
  onCountryChange,
  note,
}) => {
  return (
    <div className="w-full p-4 bg-gray-900 text-white rounded-lg space-y-4 flex items-center justify-center flex-col">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="w-full h-1 bg-purple-700 rounded" />

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex items-center space-x-2" />
        <div className="flex items-center space-x-2">
          <span className="text-sm bg-gray-800 p-2 rounded">{phoneLabel}</span>
          <button className="bg-purple-600 text-white px-2 py-1 rounded">+</button>
        </div>
      </div>

      <div className="w-full h-1 bg-purple-700 rounded" />

      <div className="space-y-2">
        <div className="flex space-x-1">
          {hints.map((hint, i) => (
            <div key={i} className="bg-red-700 text-white px-2 py-1 rounded">
              {hint}
            </div>
          ))}
        </div>
        <div className="flex space-x-1">
          {mask.map((char, i) => (
            <div key={i} className="bg-gray-800 text-white px-2 py-1 rounded">
              {char}
            </div>
          ))}
        </div>
        <div className="flex space-x-1">
          {result.map((char, i) => (
            <div key={i} className="bg-gray-700 text-white px-2 py-1 rounded">
              {char}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-1 bg-purple-700 rounded" />

      <div className="flex items-center space-x-2">
        <span>Country code</span>
        <select
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          className="bg-gray-800 text-white px-2 py-1 rounded"
        >
          {countryOptions.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-gray-400">{note}</p>
    </div>
  );
};

export default PhoneHintComposer;
