# SPECYFIKACJA WYMAGAŃ

## PLX - Portal z ogłoszeniami lokalnymi

**Wersja:** *0.3.0*\
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
| 0.2.0         | Wersja końcowa backend|
| 0.3.0         | Wersja końcowa frontend|


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

* Responsywne menu strony(Tomasz Korzeniowski)
* Logowanie użytkownika "FRONTEND" (Tomasz Korzeniowski)
* Ogłoszenia promowane (Tomasz Korzeniowski)
* Dodawanie ogłoszeń "FRONTEND" (Tomasz Korzeniowski)
* Profil użytkownika "FRONTEND" (Tomasz Korzeniowski)
* Wyszukiwanie ogłoszeń (Tomasz Korzeniowski)
* FAQ (Tomasz Korzeniowski)
* Resetowanie hasła użytkownika (Tomasz Korzeniowski)
* Rejestracja użytkownika (Mateusz Kliś i Bartosz Dobija)
* Weryfikacja użytkownika przy pomocy poczty elektronicznej (Mateusz Kliś i Bartosz Dobija)
* Logowanie użytkownika (Mateusz Kliś i Bartosz Dobija)
* Edycja profilu (Mateusz Kliś i Bartosz Dobija)
* Kontakt z supportem (Mateusz Kliś i Bartosz Dobija) 
* Kontakt ze sprzedającym/kupującym (Mateusz Kliś)
* Wystawianie opinii innym sprzedającym/kupującym - niezrealizowane
* Dostęp do najczęsciej zadawanych pytań (Bartosz Dobija)
* Wybór sposobu dostawy - niezrealizowane
* Dodawanie ogłoszeń (Mateusz Kliś i Bartosz Dobija)
* Edytowanie ogloszeń (Mateusz Kliś i Bartosz Dobija)
* Usuwanie ogłoszeń (Mateusz Kliś i Bartosz Dobija)
* Przeglądanie ogłoszeń (Mateusz Kliś i Bartosz Dobija)
* Sortowanie ogłoszeń według wybranych kryteriów np ceny - niezrealizowane
* Zgłaszanie podejrzanych ogłoszeń (Mateusz Kliś i Bartosz Dobija)
  
### Wobec administratora

* Moderacja ogłoszeń (Mateusz Kliś i Bartosz Dobija)
* Moderacja profili (Mateusz Kliś i Bartosz Dobija)
* Usuwanie ogłoszeń (Mateusz Kliś i Bartosz Dobija)
* Odpowiadanie użytkownikom na ich zapytania - niezrealizowane 
* Wysyłanie newslettera (Mateusz Kliś i Bartosz Dobija)
* Manualne akceptowanie ogłoszeń z oznaczeniem 18+ - niezrealizowane 
  
## Wymagania niefunkcjonalne

* Filtrowanie treści wprowadzanych wobec listy słów zakazanych - niezrealizowane 
* Kompresja zdjęć (Mateusz Kliś i Bartosz Dobija)
* Wysyłanie powiadomień o nowej wiadomości od kupującego/sprzedającego (Mateusz Kliś i Bartosz Dobija)
* Wysyłanie powiadomień o odpowiedzi administratora (Mateusz Kliś i Bartosz Dobija)
* Ukrywanie ogłoszeń starszych niż 90 dni - niezrealizowane 
* Zapisywanie, edytowanie, usuwanie i wyświetlanie ogłoszeń z baz danych (Mateusz Kliś i Bartosz Dobija)
* Przechowywanie wiadomości między użytkownikami lokalnie - niezrealizowane 
* Zgodność z przepisami prawa polskiego i unijnego - niezrealizowane
* Mobile-first

## Możliwości rozwoju

* Obsługa płatności między sprzedawcą i kupującym - niezrealizowane
* Implementacja usługi kurierskiej dla sprzedającego - niezrealizowane
* Promowanie ogłoszeń (Mateusz Kliś i Bartosz Dobija)
* Dodawanie ogłoszeń do ulubionych (Mateusz Kliś i Bartosz Dobija)
* Eksport ogłoszeń na inne platformy - niezrealizowane
* Stworzenie systemu lojalnościowego dla kupujących i sprzedających - niezrealizowane


# Opis architektury i technologii
Strona internetowa zaprojektowana z podejściem mobile first będzie oparta klasycznie o [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) i [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS). Naszym głównym frameworkiem będzie [NodeJS](https://nodejs.org/en/docs/) ze wsparciem frameworka [Express](https://expressjs.com/), a za interaktywne UI będzie odpowiadał [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) i [Bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

Do zrealizowania naszego projektu będziemy korzystać z następujących wzorców projektowych:
- [Obserwator](https://refactoring.guru/design-patterns/observer) do opracowania systemu obserwowania i powiadomień - niezrealizowane
- [Prototyp](https://refactoring.guru/design-patterns/prototype) do tworzenia ofert - niezrealizowane
- [Pamiątka](https://refactoring.guru/design-patterns/memento) do proponowania ofert na podstawie poprzednich wyświetleń ofert - niezrealizowane

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
