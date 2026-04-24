# Laboration 3 - Typescript
I den här laborationen skapar jag en webbplats som är gjord med ramverket Angular inom TypeScript. Webbplatsen har tre sidor och de finns inom mappen src -> app -> pages.

**Webbplats:** https://fb-lab3-ts.netlify.app/

* **Hem** (Startsidan) - Sidan använder en egen fotograferad bild från Afrika där en Angular-logotyp infogades i mitten. Ett välkomstmeddelande skapades genom Angulars "Event Binding" vid klick på knappen till meddelandet.
  
* **Konvertera** - Tre konverteringsmetoder togs fram för att omvandla temperaturer, vikter och längder. Alla omvandlingar skrevs inom convert.ts och gjordes till en egen klass med properties och logik. Angulars NgModel användes för tvåvägs-binding och jag valde att inte ha någon knapp för att konvertera värden utan det skulle uppdateras automatiskt.
  
* **Om** - En beskrivning av uppgiften och hur jag gått tillväga när jag skapade webbplatsen.

En huvudmeny skapades som en egen komponent med namnet mainheader. Den placerades i mappen partials. Navigeringen bland sidor hanteras av Angulars routerLink. 
Samtliga sidor har en footer som är skapad och infogad som en egen komponent. TypeScript-logotypen infogades exempelvis i innehållet inom footern.
En 404-sida skapades om någon av sidorna inte kunde hittas eller om besökaren navigerat fel bland webbplatsens adresser.

Jag valde preprocessorn SCSS för att designa innehållet på sidorna genom struktur, layout och färger. Flex-layout användes till exempel på konverteringsmodellen, tillsammans med färgerna grönt, gul och orange/rött. Global styling för hela webbplatsen gjordes inom styles.scss medan detaljer för respektive sida sköttes inom komponentens egna scss-fil.

## Slutsatser Angular
Webbplatsen upplevs responsiv och snabb. Jag gillar verkligen hur snabb sidorna är att navigera mellan efter att hemsidan är publicerad. Sidinnehållet ändras hastigt och man slipper behöva ladda om sidorna vid navigering. Syftet med detta är att efterlikna en Single-page Application, att hemsidan har en sida där innehållet ändras dynamiskt efter användarens interaktioner. Vilket jag ser som en stor fördel med detta ramverk.  





## Instruktioner från Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
