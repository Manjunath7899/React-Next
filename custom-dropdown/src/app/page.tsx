"use client";

import SelectDropdown from "@/components/SelectDropdown";
import { useEffect, useState } from "react";

interface Options {
  id: number;
  label: string;
}

export default function Home() {
  const countries = [
    { id: 1, label: "India" },
    { id: 2, label: "United States" },
    { id: 3, label: "Canada" },
    { id: 4, label: "Germany" },
    { id: 5, label: "France" },
    { id: 6, label: "Australia" },
    { id: 7, label: "Brazil" },
    { id: 8, label: "Japan" },
    { id: 9, label: "United Kingdom" },
    { id: 10, label: "South Africa" },
  ];

  const states = [
    { id: 101, countryId: 1, label: "Karnataka" },
    { id: 102, countryId: 1, label: "Maharashtra" },
    { id: 103, countryId: 1, label: "Tamil Nadu" },

    { id: 201, countryId: 2, label: "California" },
    { id: 202, countryId: 2, label: "Texas" },
    { id: 203, countryId: 2, label: "Florida" },

    { id: 301, countryId: 3, label: "Ontario" },
    { id: 302, countryId: 3, label: "British Columbia" },
    { id: 303, countryId: 3, label: "Quebec" },

    { id: 401, countryId: 4, label: "Bavaria" },
    { id: 402, countryId: 4, label: "Berlin" },
    { id: 403, countryId: 4, label: "Hamburg" },

    { id: 501, countryId: 5, label: "Île-de-France" },
    { id: 502, countryId: 5, label: "Provence-Alpes-Côte d'Azur" },
    { id: 503, countryId: 5, label: "Normandy" },

    { id: 601, countryId: 6, label: "New South Wales" },
    { id: 602, countryId: 6, label: "Victoria" },
    { id: 603, countryId: 6, label: "Queensland" },

    { id: 701, countryId: 7, label: "São Paulo" },
    { id: 702, countryId: 7, label: "Rio de Janeiro" },
    { id: 703, countryId: 7, label: "Bahia" },

    { id: 801, countryId: 8, label: "Tokyo" },
    { id: 802, countryId: 8, label: "Osaka" },
    { id: 803, countryId: 8, label: "Hokkaido" },

    { id: 901, countryId: 9, label: "England" },
    { id: 902, countryId: 9, label: "Scotland" },
    { id: 903, countryId: 9, label: "Wales" },

    { id: 1001, countryId: 10, label: "Gauteng" },
    { id: 1002, countryId: 10, label: "Western Cape" },
    { id: 1003, countryId: 10, label: "KwaZulu-Natal" },
  ];

  const cities = [
    { id: 10001, stateId: 101, label: "Bangalore" },
    { id: 10002, stateId: 101, label: "Mysore" },
    { id: 10003, stateId: 102, label: "Mumbai" },
    { id: 10004, stateId: 102, label: "Pune" },
    { id: 10005, stateId: 103, label: "Chennai" },
    { id: 10006, stateId: 103, label: "Coimbatore" },

    { id: 20001, stateId: 201, label: "Los Angeles" },
    { id: 20002, stateId: 201, label: "San Diego" },
    { id: 20003, stateId: 202, label: "Houston" },
    { id: 20004, stateId: 202, label: "Dallas" },
    { id: 20005, stateId: 203, label: "Miami" },
    { id: 20006, stateId: 203, label: "Orlando" },

    { id: 30001, stateId: 301, label: "Toronto" },
    { id: 30002, stateId: 301, label: "Ottawa" },
    { id: 30003, stateId: 302, label: "Vancouver" },
    { id: 30004, stateId: 302, label: "Victoria" },
    { id: 30005, stateId: 303, label: "Montreal" },
    { id: 30006, stateId: 303, label: "Quebec City" },

    { id: 40001, stateId: 401, label: "Munich" },
    { id: 40002, stateId: 401, label: "Nuremberg" },
    { id: 40003, stateId: 402, label: "Berlin City" },
    { id: 40004, stateId: 403, label: "Hamburg City" },

    { id: 50001, stateId: 501, label: "Paris" },
    { id: 50002, stateId: 501, label: "Versailles" },
    { id: 50003, stateId: 502, label: "Nice" },
    { id: 50004, stateId: 502, label: "Marseille" },
    { id: 50005, stateId: 503, label: "Rouen" },
    { id: 50006, stateId: 503, label: "Caen" },

    { id: 60001, stateId: 601, label: "Sydney" },
    { id: 60002, stateId: 601, label: "Newcastle" },
    { id: 60003, stateId: 602, label: "Melbourne" },
    { id: 60004, stateId: 602, label: "Geelong" },
    { id: 60005, stateId: 603, label: "Brisbane" },
    { id: 60006, stateId: 603, label: "Gold Coast" },

    { id: 70001, stateId: 701, label: "São Paulo City" },
    { id: 70002, stateId: 701, label: "Campinas" },
    { id: 70003, stateId: 702, label: "Rio City" },
    { id: 70004, stateId: 702, label: "Niterói" },
    { id: 70005, stateId: 703, label: "Salvador" },
    { id: 70006, stateId: 703, label: "Feira de Santana" },

    { id: 80001, stateId: 801, label: "Tokyo City" },
    { id: 80002, stateId: 801, label: "Hachioji" },
    { id: 80003, stateId: 802, label: "Osaka City" },
    { id: 80004, stateId: 802, label: "Sakai" },
    { id: 80005, stateId: 803, label: "Sapporo" },
    { id: 80006, stateId: 803, label: "Asahikawa" },

    { id: 90001, stateId: 901, label: "London" },
    { id: 90002, stateId: 901, label: "Manchester" },
    { id: 90003, stateId: 902, label: "Edinburgh" },
    { id: 90004, stateId: 902, label: "Glasgow" },
    { id: 90005, stateId: 903, label: "Cardiff" },
    { id: 90006, stateId: 903, label: "Swansea" },

    { id: 100001, stateId: 1001, label: "Johannesburg" },
    { id: 100002, stateId: 1001, label: "Pretoria" },
    { id: 100003, stateId: 1002, label: "Cape Town" },
    { id: 100004, stateId: 1002, label: "Stellenbosch" },
    { id: 100005, stateId: 1003, label: "Durban" },
    { id: 100006, stateId: 1003, label: "Pietermaritzburg" },
  ];

  const [selectedCountries, setSelectedCountries] = useState<Options[]>([]);
  const [selectedStates, setSelectedStates] = useState<Options[]>([]);
  const [selectedCities, setSelectedCities] = useState<Options[]>([]);
  const [availableStates, setAvailableStates] = useState<Options[]>([]);
  const [availableCities, setAvailableCities] = useState<Options[]>([]);

  useEffect(() => {
    const stateData = states.filter(
      (item) => item.countryId === selectedCountries[0]?.id
    );
    setAvailableStates(stateData);
  }, [selectedCountries]);

  useEffect(() => {
    const selectedStateIds = new Set(selectedStates.map((item) => item.id));
    const cityData = cities.filter((cityItem) =>
      selectedStateIds.has(cityItem.stateId)
    );
    setAvailableCities(cityData);
  }, [selectedCountries, selectedStates]);

  return (
    <div className="w-full">
      <header className="flex justify-center px-2 py-3 bg-amber-200 text-3xl text-indigo-600 font-bold">
        <h1>Custom Dropdown Component</h1>
      </header>
      <div className="flex gap-5 justify-center mt-10 p-4">
        <SelectDropdown
          options={countries}
          size="lg"
          placeholder={"Select Countries"}
          selected={selectedCountries}
          setSelected={setSelectedCountries}
          multiSelect={false}
          disabled={false}
        />
        <SelectDropdown
          options={availableStates}
          size="lg"
          placeholder={"Select States"}
          selected={selectedStates}
          setSelected={setSelectedStates}
          multiSelect={true}
          disabled={selectedCountries.length === 0}
        />
        <SelectDropdown
          options={availableCities}
          size="lg"
          placeholder={"Select Cities"}
          selected={selectedCities}
          setSelected={setSelectedCities}
          multiSelect={true}
          disabled={selectedStates.length === 0}
        />
      </div>
    </div>
  );
}
