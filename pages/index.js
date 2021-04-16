import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReSleep - na zdrowy sen i witalny poranek!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="">
        <section className="bg-hero_bg_mobile md:bg-hero_bg bg-cover bg-no-repeat bg-top md:bg-left-bottom text-white">
          <div className="container mx-auto px-4 md:px-12 pb-20 md:pb-0">
          <div className="md:flex items-center">
            <img src="logo.png" className="" alt="resleep logo" className="w-60 object-contain mx-auto md:mx-0 py-10 md:py-0 md:pt-10" />
            <div className="w-full mx-auto text-center md:hidden md:ml-5 font-semibold text-lg">na zdrowy sen i witalny poranek!</div>
            <div className="hidden md:inline-block md:ml-5 font-semibold text-xl pt-10">na zdrowy sen <br/>i witalny poranek!</div>

            <div className="md:hidden mx-auto max-w-md text-theme-light-blue font-bold text-center my-10">ReSleep - 97% użytkowników potwierdza, że dzięki niemu korzysta ze snu witalnego i pełnej regeneracji po przebudzeniu.</div>
            <img src="resleep_etykieta_x3.png" alt="resleep pills image" className="md:hidden object-contain"/>
            
          </div>
          
          <div className="lg:flex horizontal md:pt-24 md:pb-20 justify-between items-center">
            <div className="">
              <div>
                <ul className="mb-10 xl:pr-10">
                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#97BDDC"/>
                    </svg> 
                    <div className="ml-2 text-lg">Relaksuje i zmniejsza napięcie po ciężkim dniu</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#97BDDC"/>
                    </svg> 
                    <div className="ml-2 text-lg">Ułatwia szybkie zasypianie</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#97BDDC"/>
                    </svg> 
                    <div className="ml-2 text-lg">Zapewnia głęboki sen witalny</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#97BDDC"/>
                    </svg> 
                    <div className="ml-2 text-lg">W pełni regeneruje ciało i umysł</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#97BDDC"/>
                    </svg> 
                    <div className="ml-2 text-lg">Zwiększa energię i witalność o poranku</div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block max-w-md text-theme-light-blue font-bold">ReSleep - 97% użytkowników potwierdza, że dzięki niemu korzysta ze snu witalnego i pełnej regeneracji po przebudzeniu.</div>
              <a href="#"><button className="block mx-auto md:mx-0 mt-5 md:mt-10 md:mb-10 text-base md:text-lg lg:w-full xl:w-auto lg:text-xl bg-theme-pink hover:bg-theme-pink-hover px-6 py-5 rounded-full font-bold shadow-xl">Wypróbuj ReSleep już dziś!</button></a>
            </div>
            <div className="md:flex justify-center hidden lg:w-2/4">
              <img src="resleep_etykieta_x3.png" alt="resleep pills image" className="object-contain" />
            </div>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center pt-16 pb-24 bg-features_bg bg-top bg-cover text-white">
          <div className="w-full text-xxl md:text-2xl font-light mb-8">Jak działa <span className="font-bold">ReSleep</span>?</div>
          <p className="max-w-5xl">
          Sen jest niezwykle ważny dla ludzkiego organizmu, jednak coraz częściej spotykamy się z sytuacją, w której zwykły sen nie wystarcza. Jest zbyt płytki i zbyt mało regenerujący, co przekłada się na wyczerpanie organizmu i złe samopoczucie przez cały dzień. Dlatego potrzeba czegoś więcej. <br/><br/>
          Naukowcy potwierdzają, że sen witalny jest kluczem do zachowania pełnej sprawności organizmu, zarówno fizycznej, jak i psychicznej. Dbając o osiągnięcie takiego stanu może szybko przywrócić pełną aktywność. Nowoczesna formuła ReSleep została opracowana właśnie w celu wywołania i wzmocnienia snu witalnego i działa na trzech płaszczyznach: 
          </p>
          <div className="container">
            <div className="border-b border-white border-opacity-20 lg:flex items-start mx-20 md:space-x-10 pb-20">

            <div className="lg:flex justify-center flex-col lg:max-w-md">
              <img src="sleep.png" className="object-contain mb-10 mt-16 w-44 mx-auto" />
              <div>
                <span className="font-bold">Ukojenie nerwów i spokojny sen</span><br/>
              ReSleep odpowiada za przywrócenie prawidłowego rytmu dobowego. Łagodzi stany napięcia i prowadzi do ukojenia systemu nerwowego, zapewniają łatwe zasypianie i spokojny sen. To świetna recepta na poranek pełen energii!
              </div>
            </div>
            <div className="lg:flex justify-center flex-col lg:max-w-md">
            <img src="moon_n_stars.png" className="object-contain mb-10 mt-16 w-44 mx-auto" />
              <div>
                <span className="font-bold">Pełna regeneracja w czasie snu</span><br/>
                Skondensowana formuła ReSleep prowadzi do uaktywnienia i wzmocnienia snu witalnego, który odpowiada za takie procesy, jak regeneracja umysłowa i fizyczna. Prawidłowy przebieg snu i występowanie odpowiednich faz REM jest niezbędny do pełnego wypoczynku. 

              </div>
            </div>
            <div className="lg:flex justify-center flex-col lg:max-w-md">
              <img src="person.png" className="object-contain mb-10 mt-16 w-44 mx-auto" />
              <div>
                <span className="font-bold">Poranek pełen energii</span><br/>
                Głęboki odpoczynek i sen witalny prowadzi do odzyskania pełnej energii o poranku. Ułatwia wstawanie z łóżka i podjęcie codziennych wyzwań bez poczucia zmęczenia, znużenia i bez ochoty na drzemkę.
              </div>
            </div>
            </div>

          </div>

          <div className="lg:flex items-center container justify-between px-12">
            <div className="w-full my-10 lg:w-1/2 lg:max-w-xl"><img src="chart.png" className="mx-auto" /></div>
            <div className="w-full my-10 lg:w-1/2 text-left">Dzięki formule snu witalnego szybko odzyskasz energię, potrzebną do codziennych zadań, a także zwiększysz poziom swojej koncentracji i poprawisz funkcjonowanie mózgu.</div>
          </div>

          <div className="flex items-center justify-center">
            <a href="#"><button className="text-lg md:text-xl bg-theme-pink hover:bg-theme-pink-hover px-6 py-5 rounded-full font-bold text-white shadow-xl">Kup teraz!</button></a>
          </div>
        </div>
        </section>

        

        <section className="flex flex-col items-center justify-center text-center py-24 bg-theme-very-light-blue">
          <div className="max-w-5xl text-xxl md:text-2xl font-light mb-8 text-theme-blue container mx-10">Kto korzysta z dobroczynnego działania <span className="font-bold">ReSleep</span>?</div>
          <div className="flex flex-col lg:flex-row container px-12">
            <div className="flex flex-col w-full lg:w-1/2 text-left">
              <p className="text-base">
                Formuła ReSleep to wybór klientów, którzy borykają się z problemem bezsenności oraz braku odpowiedniego wypoczynku nawet po przespaniu całej nocy. Należą do nich przede wszystkim osoby, narażone na takie<br/> czynniki jak:
              </p>
              <div className="border-4 border-theme-border-blue rounded-xl px-8 py-4 my-4">
                <ul className="list-disc font-semibold">
                  <li>Zbyt niski poziom melatoniny w organizmie</li>
                  <li>Zaburzony rytm dobowy z powodu pracy na zmiany lub bezsenności</li>
                  <li>Kłopoty z zasypianiem spowodowane stresem</li>
                  <li>Budzenie w nocy lub zbyt wczesne budzenie się o poranku</li>
                  <li>Nadmierna ilość obowiązków, nie pozwalająca na pełen wypoczynek</li>
                </ul>
              </div>
              <p className="text-base">
                Jeśli obserwujesz u siebie podobne problemy, powinieneś wypróbować preparat, który pomoże ci zrelaksować się przed snem, zasnąć bez problemu, przespać całą noc i obudzić się w pełni wypoczętym.
              </p>
            </div>
            <div className="flex w-full lg:w-1/2 items-center justify-center text-center">
              <img src="sleeping_women.png" className="mt-10 lg:mt-0 flex items-center w-96 mx-auto" />
              </div>
          </div>
          
        </section>

        <section className="flex flex-col items-center justify-center text-center py-24 bg-for_who_bg bg-no-repeat bg-cover text-white">
          <div className="lg:max-w-5xl text-xxl md:text-2xl font-light mb-8 text-white container mx-10">Dla kogo zaprojektowaliśmy <span className="font-bold">ReSleep</span>?</div>
          <div className="flex flex-col lg:flex-row container px-12">
            <div className="lg:flex w-full lg:w-1/2 items-center justify-center text-center">
              <img src="for_who.png" className="mx-auto lg:flex lg:items-start lg:justify-start w-96 lg:my-0 my-5" />
            </div>
            <div className="lg:flex w-full flex-col lg:w-1/2 text-left">
              <p className="text-base my-8 md:my-0">
                Preparat ReSleep jest przeznaczony dla szeregu ludzi, odczuwających problemy ze snem, a przede wszystkim dla osób:
              </p>
              <div className="my-4">
                <ul className="">
                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#ffffff"/>
                    </svg> 
                    <div className="ml-2 text-base md:text-lg">pracujących do późna i w nocy</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#ffffff"/>
                    </svg> 
                    <div className="ml-2 text-base md:text-lg">pracujących w systemie zmianowym</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#ffffff"/>
                    </svg> 
                    <div className="ml-2 text-base md:text-lg">pracujących umysłowo i specjalistów każdej branży</div>
                  </li>

                  <li className="flex items-center my-1"><svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#ffffff"/>
                    </svg> 
                    <div className="ml-2 text-base md:text-lg">narażonych na wysoki poziom stresu</div>
                  </li>
                  
                </ul>
              </div>
              <p className="text-base">
              Dla wszystkich tych grup osób ReSleep to doskonały wybór, ponieważ jest bardzo prosty i poręczny w stosowaniu. Co więcej, nie otumania i nie wywołuje efektu przyzwyczajenia, dzięki czemu nie wymaga stałego zwiększania dawki. Jednocześnie jest zdrowym zamiennikiem kawy czy napojów energetycznych, który gwarantuje długotrwałe rezultaty, a nie tylko chwilowe podniesienie ciśnienia.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <a href="#"><button className="mt-10 text-lg md:text-xl bg-theme-pink hover:bg-theme-pink-hover px-6 py-5 rounded-full font-bold shadow-xl text-white">Zamów teraz!</button></a>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center text-center pt-24 bg-badania_naukowe_bg bg-no-repeat bg-cover text-black">
          <div className="container text-center mx-auto px-12">

          <div className="max-w-5xl mx-auto text-xxl md:text-2xl font-light mb-8 text-theme-blue container">Badania naukowe potwierdzają skuteczność <span className="font-bold">ReSleep</span></div>

          <p className="text-base my-10">Niezależne badania naukowe potwierdzają, że formuła odpowiedzialna za sen witalny przyczynia się do kompleksowej poprawy jakości snu oraz zwiększenia regeneracji organizmu. Potrójna płaszczyzna działania ReSleep idzie w parze z jego składem, w którym występują trzy główne składniki:</p>

          <div className="lg:flex">
              <div className="flex-1 text-left">
              <img src="lab_section.png" className="flex lg:hidden items-center w-96 mx-auto" /> 

                <span className="font-bold">L-tryptofan - aktywuje sen witalny i koi nerwy</span>
                <p className="text-base">
                  Jest odpowiedzialny za prawidłowe funkcjonowanie układu nerwowego - główną funkcją jest łagodzenie objawów stresu. Aktywuje głęboki sen witalny, działa rozluźniająco, koi nerwy i przeciwdziała depresji<sup>1,2</sup>. Bierze też udział w wytwarzaniu hormonu szczęścia (serotoniny!).
                </p>
              </div>
              <div className="flex-1 text-left mt-5 mb-10 lg:my-0 lg:text-center">
                <img src="lab_section.png" className="hidden lg:flex items-center w-96 mx-auto" /> 
                <span className="font-bold">Witamina B6 - intensyfikacja snu</span><br/>
                <p className="text-base">
                  Równoważy i uspokaja organizm, obniża poziom stresu. Pogłębia sen i redukuje koszmary. Przeciwdziała zaburzeniom i chorobom układu nerwowego, w tym depresji<sup>5,6</sup>.
                </p>
              </div>
              <div className="flex-1 text-left">
                <span className="font-bold">5-HTP - zapobiega depresji, lękom i zaburzeniom snu</span>
                <p className="text-base">
                  Ma działanie przeciwlękowe, zapobiega atakom paniki, redukuje stany depresyjne. Chroni przed zaburzeniami snu i wzmacnia sen witalny<sup>3,4</sup>.
                </p>
              </div>
          </div>

          <div className="max-w-2xl mx-auto my-10">
              <p className="font-semibold text-base">W efekcie synergicznego współdziałania tych trzech składników możliwe jest wprowadzenie organizmu w stan snu witalnego, a co za tym idzie: jego pełna regeneracja i pobudka każdego dnia z większą dawką energii.</p>
            </div>
          <div className="text-sm text-left md:text-center">
              <div><sup>1</sup><a href="https://wylecz.to/na-nerwy-i-stres/tryptofan-na-dobry-sen/">https://wylecz.to/na-nerwy-i-stres/tryptofan-na-dobry-sen/</a></div>
              <div><sup>2</sup><a href="https://www.medme.pl/artykuly/tryptofan-na-sen-i-dobry-nastroj-zrodla,67749.html">https://www.medme.pl/artykuly/tryptofan-na-sen-i-dobry-nastroj-zrodla,67749.html</a></div>
              <div><sup>3</sup><a href="https://neuroexpert.org/wiki/5-htp-griffonia-simplicifolia/">https://neuroexpert.org/wiki/5-htp-griffonia-simplicifolia/</a></div>
              <div><sup>4</sup><a href="https://www.bestbody.com.pl/blog/5-htp-czyli-5-hydroksytryptofan-co-to-jest/">https://www.bestbody.com.pl/blog/5-htp-czyli-5-hydroksytryptofan-co-to-jest/</a></div>
              <div><sup>5</sup><a href="https://pulsmedycyny.pl/witamina-b6-pomaga-zapamietac-sny-911997">https://pulsmedycyny.pl/witamina-b6-pomaga-zapamietac-sny-911997</a></div>
              <div><sup>6</sup><a href="https://www.rynekaptek.pl/farmakologia/badania-witamina-b6-intensyfikuje-sen,25769.html">https://www.rynekaptek.pl/farmakologia/badania-witamina-b6-intensyfikuje-sen,25769.html</a></div>
            </div>
          </div>

        </section>

        <section className="flex flex-col items-center justify-center text-center bg-mystery_bg bg-no-repeat bg-cover text-black">
          <div className="container text-center mx-auto px-12 max-w-5xl">
            <div className="mx-auto text-xxl md:text-2xl font-light my-10 text-theme-blue container">Tajemnica skutecznego działania <span className="font-bold">ReSleep:</span> sen witalny.</div>

            <div className="flex flex-col">
              <div className="md:flex mt-5">
                <div className="w-full md:w-1/3">
                  <img src="resleep_sen.png" className="flex items-center w-80 mx-auto" /> <br/>

                </div>
                <div className="w-full md:w-2/3 flex items-center">
                  <p className="text-base text-left ml-0 md:ml-20">
                    Sen witalny to najgłębszy rodzaj snu, wykorzystujący pełnię możliwości regeneracyjnych organizmu. To on gwarantuje, że nasz organizm jest w stanie zregenerować swoje siły umysłowe i fizyczne, odbudować mikrouszkodzenia czy pokonać choroby. Zapadając każdej nocy w sen witalny mamy gwarancję, że o poranku zawsze przebudzimy się w pełni sił, z dużymi zapasami energii, a nie znużeni i gotowi jeszcze trochę się zdrzemnąć.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row mt-14 lg:mt-0">
                <div className="w-full md:w-2/3 flex items-center">
                  <p className="text-base text-left mr-0 md:mr-20">
                    Pojawia się po przejściu odpowiednich faz snu i po zapadnięciu w fazę snu głębokiego (REM). Niestety, wiele osób nie jest w stanie jej osiągnąć lub osiągają ją tylko na krótko, co nie pozwala im na pełną regenerację. Może to być wynikiem zarówno działań zewnętrznych, takich jak włączony telewizor, jak i stanów emocjonalnych, stresu lub innych czynników wewnętrznych, takich jak choroby. Zapewnienie sobie snu witalnego to sposób na pełną regenerację i codzienną energię.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <img src="resleep_sila.png" className="flex items-center w-80 mx-auto" /> <br/>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center -mb-10">
          <a href="#"><button className="mt-10 text-lg md:text-xl bg-theme-pink hover:bg-theme-pink-hover px-6 py-5 rounded-full font-bold shadow-xl text-white">Zamów teraz!</button></a>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center text-center py-24 bg-white text-black">
          <div className="container text-center mx-auto px-12">
            <div className="max-w-5xl mx-auto text-xl md:text-2xl font-light mb-8 text-theme-blue container">Specjalista radzi: lepszy sen to lepsze życiei wydajniejsza praca!</div>

            <div className="flex flex-col">
              <div className="md:flex mt-5">
                <div className="w-full md:w-1/3">
                  <img src="specialist.png" className="w-52 flex items-center md:w-96 mx-auto" /> <br/>

                </div>
                <div className="w-full md:w-2/3 md:flex items-center">
                  <p className="text-base text-left ml-0 md:ml-20 text-black" style={{fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic'}}>
                    <p className="mb-5">Nazywam się Lucyna Stolarska i jestem psychoterapeutką, specjalizującą się w zaburzeniach snu. Moi podopieczni często borykają się z wielopoziomowymi problemami związanymi z prawidłowym przebiegiem snu, obejmującymi zarówno podłoże fizyczne, jak i psychiczne. Jedną z najczęstszych przyczyn problemów ze snem jest występujący u nich wysoki poziom stresu, zaburzenia w cyklach faz REM oraz brak osiągania stanu snu witalnego.</p>

                    <p className="mb-5">Wiem, jak trudna to dla nich sytuacja, dlatego od kiedy poznałam ReSleep polecam im ten preparat z czystym sumieniem. Został on stworzony na bazie naturalnych składników, dzięki czemu jest w pełni bezpieczny i nie uzależnia. Co więcej, działa na kilku płaszczyznach, które dopiero wspólnie mogą sprawić, że sen stanie się naprawdę dobry i przynoszący wypoczynek.</p>

                    <p className="mb-5">Przede wszystkim zapewnia wyciszenie, relaks i redukcję stresu, co zmniejsza problemy z zasypianiem i częstotliwość budzenia. Jednocześnie aktywuje głęboki sen witalny, odpowiadający za pełną regenerację organizmu, co moi pacjenci opisują jako zwiększenie poziomu energii i radości życia, a także brak ciągłego poczucia niewyspania. Co więcej, osoby, które cierpiały na zaburzony rytm dobowy szybko powracają do naturalnego zasypiania w nocy i aktywności w dzień, co ułatwia im funkcjonowanie w społeczeństwie.</p>

                    <p className="mb-5">Wniosek? Jeśli chcesz pozbyć się problemów ze snem, poprawić jego jakość i zawsze wstawać wypoczętym, powinieneś tak jak oni wypróbować ReSleep.</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center text-center bg-theme-creamy text-white">
        <div className="bg-testimonials_layer bg-no-repeat bg-right-bottom bg-contain pt-24 md:pb-12">

          <div className="container text-center mx-auto px-12">
            <div className="max-w-5xl mx-auto text-xxl md:text-2xl font-light text-theme-blue container mb-20">Poznaj opinie o <span className="font-bold">ReSleep</span></div>

            <div className="lg:flex text-left text-black">
              <div className="w-full my-10 lg:my-0 lg:flex-1 lg:mr-10">
                <div className="bg-theme-testimonials-color p-3 flex items-center rounded-3xl">
                  <img src="mateusz.png" className="w-20 object-contain" />
                  <div className="ml-5 font-semibold text-testimonial">Mateusz, 24 lata</div>
                </div>
                <div className="text-testimonial my-5">„Przestałem czuć się zmęczony niezależnie od ilości snu.</div>
                <p className="text-base">
                  Od blisko roku doskwierał mi problem ze snem. Niezależnie od tego, o której się położyłem i wstałem, zawsze czułem się niewyspany i po prostu musiałem uciąć sobie drzemkę. Podnoszenie się z łóżka było naprawdę trudne. Wszystko zmieniło się po wypróbowaniu tego preparatu. Ciągłe zmęczenie i niewyspanie minęły jak ręką odjął. Znowu mogę działać na pełnych obrotach, nawet o poranku!”
                </p>
              </div>
              <div className="w-full my-10 lg:my-0 lg:flex-1 lg:mx-20">
                <div className="bg-theme-testimonials-color p-3 flex items-center rounded-3xl">
                  <img src="iga.png" className="w-20 object-contain" />
                  <div className="ml-5 font-semibold text-testimonial">Iga, 41 lat</div>
                </div>
                <div className="text-testimonial my-5">„Nie mam już problemu z zasypianiem.</div>
                <p className="text-base">
                Prowadzę własną firmę, co jest nie tylko bardzo obciążające, ale i stresujące. Przez wszystkie kłopoty, które zaczęły się pojawiać w ostatnim roku przez pandemię praktycznie nie mogłam spać. Trudno mi było zasnąć albo budziłam się kilka razy w ciągu nocy. Na szczęście ReSleep  rozwiązał ten problem i znowu zaczęłam odczuwać błogi spokój przed położeniem się do łóżka. Teraz mogę spać i wypoczywać normalnie.”
                </p>
              </div>
              <div className="w-full my-10 lg:my-0 lg:flex-1 lg:ml-10">
                <div className="bg-theme-testimonials-color p-3 flex items-center rounded-3xl">
                  <img src="wiktoria.png" className="w-20 object-contain" />
                  <div className="ml-5 font-semibold text-testimonial">Wiktoria, 53 lata</div>
                </div>
                <div className="text-testimonial my-5">„Pełna regeneracja, której nigdy wcześniej nie czułam.</div>
                <p className="text-base">
                  Odkąd pamiętam, towarzyszyło mi poczucie znużenia i niepełnego wypoczynku. Mój umysł zawsze działał na zwolnionych obrotach i nie mógł się w pełni zregenerować. Wszystko przez brak głębokiego, spokojnego snu jak się okazało, ale zmieniłam to za pomocą kapsułek ReSleep. Dopiero one wywołały u mnie głęboki sen i przywróciły witalność, a cały mój organizm zaczął się regenerować. Czuję się młodsza o 10 lat.”
                </p>
              </div>
            </div>
            
          </div>
          </div>
        </section>


          <section className="flex flex-col items-center justify-center text-center py-10 md:py-24 bg-theme-creamy text-white">

            <div className="max-w-5xl mx-auto text-xxl md:text-2xl font-light text-theme-blue container mb-14">Najczęściej zadawne pytania</div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-one"><span>Co znajduje się w składzie ReSleep?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg>
</div></label>
                <div className="tab-content overflow-hidden leading-normal bg-theme-blue">
                    <p className="p-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-two"><span>Czy ReSleep jest bezpieczny?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg></div></label>
                <div className="tab-content overflow-hidden  leading-normal bg-theme-blue">
                    <p className="p-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-three"><span>Jak przyjmować ReSleep?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg></div></label>
                <div className="tab-content overflow-hidden leading-normal bg-theme-blue">
                    <p className="p-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-fourth" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-fourth"><span>Ile kapsułek znajduje się w opakowaniu ReSleep?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg></div></label>
                <div className="tab-content overflow-hidden leading-normal bg-theme-blue">
                    <p className="p-5 text-left">W opakowaniu znajduje się 30 kapsułek.</p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-fifth" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-fifth"><span>Jak długo będę czekał na przesyłkę?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg></div></label>
                <div className="tab-content overflow-hidden leading-normal bg-theme-blue">
                    <p className="p-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-sixth" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-sixth"><span>Jakie sposoby płatności za zamówienie są dostępne?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg></div></label>
                <div className="tab-content overflow-hidden leading-normal bg-theme-blue">
                    <p className="p-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden container max-w-5xl mb-3">
                <input className="absolute opacity-0" id="tab-single-seventh" type="radio" name="tabs2" />
                <label className="flex justify-between p-5 leading-normal cursor-pointer bg-theme-faq-blue text-white items-center rounded-2xl" for="tab-single-seventh"><span>Czy możliwa jest wysyłka za granicę?</span> <div><svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 48C95.5 21.8 74.2 0.5 48 0.5C21.8 0.5 0.5 21.8 0.5 48C0.5 74.2 21.8 95.5 48 95.5C74.2 95.5 95.5 74.2 95.5 48ZM44.8 64.4L26.5 46C25.6 45.1 25.2 44 25.2 42.8C25.2 41.6 25.6 40.5 26.5 39.6C28.2 37.9 31.1 37.9 32.8 39.6L48 54.9L63.2 39.7C64.9 38 67.8 38 69.5 39.7C71.2 41.4 71.2 44.3 69.5 46L51.2 64.4C50.4 65.2 49.2 65.7 48 65.7C46.8 65.7 45.7 65.2 44.8 64.4Z" fill="white"/>
</svg></div></label>
                <div className="tab-content overflow-hidden leading-normal bg-theme-blue">
                    <p className="p-5 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                </div>
              </div>

          </section>

          <section className="bg-hero_bg_mobile md:bg-footer_bg bg-cover bg-no-repeat bg-top md:bg-left-bottom text-white">
          <div className="container mx-auto pb-10 lg:pb-0 px-4 md:px-12 border-b border-white border-opacity-20">
     
          
          <div className="lg:flex lg:pt-24 lg:pb-20 justify-between">
            
            <div className="lg:flex-shrink-0">
              <div className="text-left mx-auto lg:max-w-5xl text-xxl md:text-2xl font-light text-theme-footer-bright-blue container pt-10 lg:pt-0 lg:mb-20">Kup <span className="font-bold">ReSleep</span> już teraz!</div>

              <div className="lg:hidden flex justify-start my-10">
                <img src="resleep_etykieta_footer.png" alt="resleep pills image" className="object-contain w-96" />
              </div>

              <div>
                <ul className="mb-10 pr-10">
                  <li className="flex md:items-center my-1"><svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#4ccff4"/>
                    </svg> 
                    <div className="ml-2 text-lg lineheightfixed">Relaksuje i zmniejsza napięcie po ciężkim dniu</div>
                  </li>

                  <li className="flex md:items-center my-1"><svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#4ccff4"/>
                    </svg> 
                    <div className="ml-2 text-lg lineheightfixed">Ułatwia szybkie zasypianie</div>
                  </li>

                  <li className="flex md:items-center my-1"><svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#4ccff4"/>
                    </svg> 
                    <div className="ml-2 text-lg lineheightfixed">Zapewnia głęboki sen witalny</div>
                  </li>

                  <li className="flex md:items-center my-1"><svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#4ccff4"/>
                    </svg> 
                    <div className="ml-2 text-lg lineheightfixed">W pełni regeneruje ciało i umysł</div>
                  </li>

                  <li className="flex md:items-center my-1"><svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.613 100 50 100C22.387 100 0 77.613 0 50C0 22.3883 22.3883 0 50 0ZM24.2087 55.0185C18.3719 48.7129 27.9611 39.8329 33.8018 46.1425L43.2583 56.3543L65.9933 29.5503C71.5569 22.978 81.5598 31.4468 75.9988 38.0165L48.6301 70.2842C46.0493 73.3182 41.5049 73.6978 38.689 70.6559L24.2087 55.0185V55.0185Z" fill="#4ccff4"/>
                    </svg> 
                    <div className="ml-2 text-lg lineheightfixed">Zwiększa energię i witalność o poranku</div>
                  </li>
                </ul>
              </div>
              <button className="block mx-auto md:mx-0 mt-5 md:mt-10 md:mb-10 text-base md:text-lg lg:w-full bg-theme-pink hover:bg-theme-pink-hover px-6 py-5 rounded-full font-bold shadow-xl"><a href="#">Zamów teraz</a></button>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src="resleep_etykieta_footer.png" alt="resleep pills image" className="object-contain" />
            </div>
          </div>
          </div>

          <div className="container mx-auto px-4 md:px-12 py-10">
            <div className="lg:flex justify-between">
              <div><img src="logo.png" className="w-52 lg:w-32 mx-auto" alt="logo stopka" /></div>
              <div className="w-full block mt-8 lg:mt-0 lg:w-auto lg:flex text-sm text-theme-pink lg:space-x-14 lg:items-center">
                <p className="inline-block ml-4 lg:ml-auto hover:text-theme-pink-hover"><a href="#">Regulamin</a></p>
                <p className="inline-block ml-4 lg:ml-auto hover:text-theme-pink-hover"><a href="#">Polityka prywatności</a></p>
                <p className="inline-block ml-4 lg:ml-auto hover:text-theme-pink-hover"><a href="#">Program partnerski</a></p>
                <p className="inline-block ml-4 lg:ml-auto hover:text-theme-pink-hover"><a href="#">Kontakt</a></p>
              </div>
            </div>

            <div className="opacity-20 mt-5 mx-4 lg:mx-0" style={{fontSize: '10px'}}>
            To jest suplement diety. This is product is a diet supplement. UWAGA : informacja zawarta na stronie jest publikowana tylko w celach informacyjnych - nie zastępuje diagnozy medycznej. każda informacja nie powinna byc postrzegana jako alternatywa do diagnostyki medycznej i tez nie można jej mylić i wymieniać z preskrypcja do leczenia i terapii. w zadnym wypadku nie gwarantuje się rezultatów, możliwy sukces jakiegokolwiek leczenia rozni się, w zależności od pacjenta. Ten blog nie jest forma zastępczą gazety, wiec nie ma żadnych terminów wyznaczonych na publikacje. Jezeli sadzicie Państwo, ze udostępnione na stronie treści lub zdjęcia, mogą narazić państwa prawa - prosimy o informacje, od razu zostaną usunięte.
            </div>
            
          </div>

        </section>
          
      </main>

    </div>
  )
}
