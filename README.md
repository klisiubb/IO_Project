# SPECYFIKACJA WYMAGAŃ

## PLX - Portal z ogłoszeniami lokalnymi

**Wersja:** *0.1.0*\
**Autorzy:**\
*Mateusz Kliś* [Github](https://github.com/klisiubb)\
*Bartosz Dobija* [Github](https://github.com/BartShoot)\
*Tomasz Korzeniowski* [Github](https://github.com/Hagenus)\
*Krzysztof Szczypka* [Github](https://github.com/krzysiek-7)


# Historia zmian:
| Wersja        | Zmiana        |
| ------------- |:-------------:|
| 0.0.1         | Wersja początkowa | 
| 0.1.0         | Wersja grupowa |


# Spis treści:
- [SPECYFIKACJA WYMAGAŃ](#specyfikacja-wymagań)
  - [PLX - Portal z ogłoszeniami lokalnymi](#plx---portal-z-ogłoszeniami-lokalnymi)
- [Historia zmian:](#historia-zmian)
- [Spis treści:](#spis-treści)
- [Wstęp:](#wstęp)
- [Opis ogólny:](#opis-ogólny)
  - [Wymagania funkcjonalne](#wymagania-funkcjonalne)
    - [Wobec użytkownika:](#wobec-użytkownika)
    - [Wobec administratora](#wobec-administratora)
  - [Wymagania niefunkcjonalne](#wymagania-niefunkcjonalne)
  - [Możliwości rozwoju](#możliwości-rozwoju)
- [Opis architektury i technologii](#opis-architektury-i-technologii)
- [Lista przypadków użycia](#lista-przypadków-użycia)
    - [Sprzedawca wystawia ofertę sprzedaży](#sprzedawca-wystawia-ofertę-sprzedaży)
    - [Kupujący chce znaleźć produkt](#kupujący-chce-znaleźć-produkt)
# Wstęp:

Celem powstania portalu **PLX** jest umożliwienie sprzedaży i kupna różnych towarów na rynku lokalnym jak i krajowym w prosty i czytelny dla użytkownika sposób.

# Opis ogólny:

## Wymagania funkcjonalne

### Wobec użytkownika:

* Rejestracja użytkownika
* Weryfikacja użytkownika przy pomocy poczty elektronicznej
* Logowanie użytkownika
* Edycja profilu
* Kontakt z administratorem
* Kontakt ze sprzedającym/kupującym
* Wystawianie opinii innym sprzedającym/kupującym
* Dostęp do najczęsciej zadawanych pytań
* Wybór sposobu dostawy
* Dodawanie ogłoszeń
* Edytowanie ogloszeń
* Usuwanie ogłoszeń
* Przeglądanie ogłoszeń
* Sortowanie ogłoszeń według wybranych kryteriów np ceny
* Zgłaszanie podejrzanych ogłoszeń
  
### Wobec administratora

* Moderacja ogłoszeń
* Moderacja profili
* Usuwanie ogłoszeń
* Odpowiadanie użytkownikom na ich zapytania
* Wysyłanie newslettera
* Manualne akceptowanie ogłoszeń z oznaczeniem 18+
  
## Wymagania niefunkcjonalne

* Filtrowanie treści wprowadzanych wobec listy słów zakazanych
* Kompresja zdjęć
* Wysyłanie powiadomień o nowej wiadomości od kupującego/sprzedającego
* Wysyłanie powiadomień o odpowiedzi administratora
* Ukrywanie ogłoszeń starszych niż 90 dni
* Zapisywanie, edytowanie, usuwanie i wyświetlanie ogłoszeń z baz danych
* Przechowywanie wiadomości między użytkownikami lokalnie
* Zgodność z przepisami prawa polskiego i unijnego
* Mobile-first

## Możliwości rozwoju

* Obsługa płatności między sprzedawcą i kupującym
* Implementacja usługi kurierskiej dla sprzedającego
* Promowanie ogłoszeń
* Dodawanie ogłoszeń do ulubionych
* Eksport ogłoszeń na inne platformy
* Stworzenie systemu lojalnościowego dla kupujących i sprzedających


# Opis architektury i technologii
Strona internetowa zaprojektowana z podejściem mobile first będzie oparta klasycznie o [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) i [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS). Naszym głównym frameworkiem będzie [NodeJS](https://nodejs.org/en/docs/) ze wsparciem frameworka [Express](https://expressjs.com/), a za interaktywne UI będzie odpowiadał [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) i [Bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

Do zrealizowania naszego projektu będziemy korzystać z następujących wzorców projektowych:
- [Obserwator](https://refactoring.guru/design-patterns/observer) do opracowania systemu obserwowania i powiadomień
- [Prototyp](https://refactoring.guru/design-patterns/prototype) do tworzenia ofert
- [Pamiątka](https://refactoring.guru/design-patterns/memento) do proponowania ofert na podstawie poprzednich wyświetleń ofert

# Lista przypadków użycia
### Sprzedawca wystawia ofertę sprzedaży
   1. Naciśnięcie przycisku odpowiedzialnego za utworzenie nowej oferty
   2. Wpisanie tytułu oferty
   3. Dodanie zdjęć
   4. Dodanie opisu
   5. Dodanie kontaktu (domyślnie powinien pojawić się poprzedni wpisany nr telefonu/e-mail itd)
   6. Naciśnięcie przycisku wystaw ofertę
   7. Po zatwierdzeniu przez moderację pozostało tylko czekać na odpowiedzi
### Kupujący chce znaleźć produkt
   1. Wpisanie odpowiedniej frazy w wyszukiwanie
   2. Filtrowanie po kategoriach
   3. Sortowanie według wybranego kryterium
   4. Znalezienie interesującego nas produktu
      1. Jeżeli uda się nam znaleźć
         1. Wchodzimy w ofertę
         2. Wyświetlamy kontakt do sprzedawcy
         3. Kontaktujemy się i finalizujemy płatność na warunkach pasującym obu stronom
      2. Jeżeli nie uda się nam znaleźć
         1. Używamy przycisku obserwuj
         2. Co jakiś czas będą wysyłane powiadomienia jeżeli nowe oferty zostaną znalezione
