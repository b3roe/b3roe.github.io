$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Elementen formulier ophalen
const form = document.querySelector("form");
const sector = document.querySelector("#sector");
const introInput = document.querySelector("#intro");
const functietitelInput = document.querySelector("#functietitel");
const ktfi1Input = document.querySelector("#ktfi1");
const ktfi2Input = document.querySelector("#ktfi2");
const talentkeuzeInput = document.querySelector("#talentkeuze"); // Add talentkeuze input element
const hoofdtaakInput = document.querySelector("#hoofdtaak");
const deeltakenInput = document.querySelector("#deeltaken");
const capellebullets1Input = document.querySelector("#capellebullets1");
const capellebullets2Input = document.querySelector("#capellebullets2");
const afdelingInput = document.querySelector("#afdeling");
const collega1Input = document.querySelector("#naamcollega1");
const collega2Input = document.querySelector("#naamcollega2");
const quotecollegaInput = document.querySelector("#quotecollega");
const ktaf1Input = document.querySelector("#ktaf1");
const ktaf1vbInput = document.querySelector("#ktaf1vb");
const ktaf2Input = document.querySelector("#ktaf2");
const salarisInput = document.querySelector("#salaris");
const schaalInput = document.querySelector("#schaal");
const hardskillsInput = document.querySelector("#hardskills");
const voorwaardenbulletsInput = document.querySelector("#voorwaardenbullets");
const sluitingsdatumInput = document.querySelector("#sluitingsdatum");
const naamvacaturehouderInput = document.querySelector("#naamvacaturehouder");
const functievacaturehouderInput = document.querySelector("#functievacaturehouder");
const emailvacaturehouderInput = document.querySelector("#emailvacaturehouder");
const telvacaturehouderInput = document.querySelector("#telvacaturehouder");
const naamrecruiterInput = document.querySelector("#naamrecruiter");
const functierecruiterInput = document.querySelector("#functierecruiter");
const emailrecruiterInput = document.querySelector("#emailrecruiter");
const telrecruiterInput = document.querySelector("#telrecruiter");

// Variables for user input
let hoofdtaak = "Omschrijf hier de hoofdverantwoordelijkheid van de functie zo concreet mogelijk in maximaal 75 woorden]";
let deeltaken = "[subverantwoordelijkheid/taak, start met een werkwoord. Minimaal 3 en maximaal 5 bulletpoints]";
let capellebullets1 = "[keuzetekst 1 over Capelle]";
let capellebullets2 = "[keuzetekst 2 over Capelle]";
let afdeling = "[naam afdeling]";
let collega1 = "[naam collega]";
let collega2 = "[naam collega]";
let quotecollega = "'quote van 1 van de 2 collega's'";
let ktaf1 = "[Keuzetekst 1 afdeling]";
let ktaf1vb = "[licht met een voorbeeld keuzetekst 1 beter toe. Gebruik hier maximaal 2 zinnen voor. Elke zin bevat maximaal 15 woorden]";
let ktaf2 = "[keuzetekst 2 afdeling]";
let salaris = "[brutomaandsalaris]";
let schaal = "[nummer]]";
let hardskills = "[hardskill. Min. 3, max. 5 bulletpoints. Blijf weg bij pre en talenten of competenties. Max. 150 tekens per opsomming. Let erop dat het max. 15 woorden per zinsdeel zijn]";
let voorwaardenbullets = "Default Voorwaardenbullets Value";
let sluitingsdatum = "[sluitingsdatum]";
let naamvacaturehouder = "[voor- en achternaam vacaturehouder]";
let functievacaturehouder = "[functie vacaturehouder]";
let emailvacaturehouder = "[e-mailadres]";
let telvacaturehouder = "[telefoonnummer]";
let naamrecruiter = "[voor- en achternaam]";
let functierecruiter = "[functietitel]";
let emailrecruiter = "[e-mailadres]";
let telrecruiter = "[telefoonnummer]";
let intro = "[Schrijf in 1 à 2 zinnen het antwoord op de vraag: waarom kiest de ideale kandidaat voor deze functie bij de gemeente Capelle aan den IJssel en niet voor dezelfde functie bij een andere gemeente? Gebruik hiervoor maximaal 15 woorden per zin]";
let functietitel = "[functietitel]";
let ktfi1 = "[keuzetekst 1 functie-inhoud]";
let ktfi2 = "[keuzetekst 2 functie-inhoud]";
let talentkeuze = "[talentkeuze]";


// Update options keuzeteksten
function updateOptions() {
  const sectorDropdown = document.getElementById("sector");
  const ktfi2Dropdown = document.getElementById("ktfi2");

  // Clear existing options
  ktfi2Dropdown.innerHTML = '<option value="" disabled selected></option>';

  // Define options based on selected sector
  const sectorValue = sectorDropdown.value;
  const options = [];

  switch (sectorValue) {
    case "Stadsbeheer":
      options.push("beschermende ", "vastberaden ", "gemotiveerde ", "enthousiaste ", "omgevingsbewuste ");
      break;
    case "Voor de samenleving":
      options.push("zorgzame ", "relatiegerichte ", "betrokken ", "sociale ", "verbindende ");
      break;
    case "Dienstverlening":
      options.push("communicatieve ", "optimistische ", "geduldige ", "opgewekte ", "oplossingsgerichte ");
      break;
    case "Stadsontwikkeling":
      options.push("vindingrijke ", "inspirerende ", "vernieuwende ", "ontwikkelende ", "creatieve ");
      break;
    case "Bestuurs- en concernondersteuning":
      options.push("toekomstgerichte ", "innovatieve ", "overtuigende ", "ondersteunende ", "ondernemende ");
      break;
    case "Financiën":
      options.push("nauwkeurige ", "feitelijke ", "opmerkzame ", "gestructureerde ", "analytische ");
      break;
    // Add cases for other sectors as needed
  }

  // Populate ktfi2Dropdown with new options
  for (const optionText of options) {
    const option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    ktfi2Dropdown.add(option);
  }
}

// Update options talentkeuze
function updateTalentkeuzeOptions() {
  const talentkeuzeDropdown = document.getElementById("talentkeuze");

  // Clear existing options
  talentkeuzeDropdown.innerHTML = '<option value="" disabled selected></option>';

  // Define options based on selected sector
  const sectorValue = sector.value;
  const options = [];

  switch (sectorValue) {
    case "Stadsbeheer":
      options.push(
        "frisse blik op het voorkomen en hergebruiken van afval.",
        "creatieve brein voor het bedenken van nieuwe inzamelingsmogelijkheden.",
        "aandacht voor een schone en nette stad.",
        "liefde voor onze gemeente.",
        "energieke manier van werken."
      );
      break;
    case "Stadsontwikkeling":
      options.push(
        "hart voor het bouwen aan een aantrekkelijke stad.",
        "toewijding voor groene vernieuwingen.",
        "innoverende ideeën.",
        "optimistische manier van denken.",
        "mindset dat alles mogelijk is."
      );
      break;
    case "Voor de samenleving":
      options.push(
        "verbindende methodes.",
        "natuurlijke manier van helpen.",
        "maatschappelijke betrokkenheid.",
        "belangstelling in de mens.",
        "gevoel voor je omgeving."
      );
      break;
    case "Bestuurs- en concernondersteuning":
      options.push(
        "succesvolle inzichten.",
        "blik op verbeteringen in onze dienstverlening.",
        "focus op doelstellingen.",
        "ongefilterde mening te geven.",
        "vlijmscherpe onderbouwingen."
      );
      break;
    case "Dienstverlening":
      options.push(
        "zicht op procesoptimalisatie.",
        "motivatie om inwoners en ondernemers nóg slimmer en sneller te helpen.",
        "nieuwsgierigheid naar wat er speelt in de stad.",
        "persoonlijke aanpak.",
        "betrouwbare werkwijze."
      );
      break;
    case "Financiën":
      options.push(
        "standvastigheid om elke dag weer de beste resultaten te leveren.",
        "visie op trends en ontwikkelingen in je vakgebied.",
        "scherpe blik op de allerkleinste details.",
        "voorspellende gave.",
        "vernieuwende verbeteringen."
      );
      break;
    // Add cases for other sectors as needed
  }

  // Populate talentkeuzeDropdown with new options
  for (const optionText of options) {
    const option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    talentkeuzeDropdown.add(option);
  }
}


// Event listeners
sector.addEventListener("change", (event) => {
  ktfi2 = ktfi2Input.value;
  talentkeuze = talentkeuzeInput.value; // Update talentkeuze variable

  updateOptions();
  updateTalentkeuzeOptions(); // Call updateTalentkeuzeOptions for talentkeuze
});

introInput.addEventListener("input", (event) => {
  intro = event.target.value.trim();
});

functietitelInput.addEventListener("input", (event) => {
  functietitel = event.target.value.trim();
});

ktfi1Input.addEventListener("input", (event) => {
  ktfi1 = event.target.value.trim();
});

ktfi2Input.addEventListener("input", (event) => {
  ktfi2 = event.target.value.trim();
});

talentkeuzeInput.addEventListener("input", (event) => {
  talentkeuze = event.target.value.trim();
});

hoofdtaakInput.addEventListener("input", (event) => {
  hoofdtaak = event.target.value.trim();
});

deeltakenInput.addEventListener("input", (event) => {
  deeltaken = event.target.value.trim();
});

capellebullets1Input.addEventListener("input", (event) => {
  capellebullets1 = event.target.value.trim();
});

capellebullets2Input.addEventListener("input", (event) => {
  capellebullets2 = event.target.value.trim();
});

afdelingInput.addEventListener("input", (event) => {
  afdeling = event.target.value.trim();
});

collega1Input.addEventListener("input", (event) => {
  collega1 = event.target.value.trim();
});

collega2Input.addEventListener("input", (event) => {
  collega2 = event.target.value.trim();
});

quotecollegaInput.addEventListener("input", (event) => {
  quotecollega = event.target.value.trim();
});

ktaf1Input.addEventListener("input", (event) => {
  ktaf1 = event.target.value.trim();
});

ktaf1vbInput.addEventListener("input", (event) => {
  ktaf1vb = event.target.value.trim();
});

ktaf2Input.addEventListener("input", (event) => {
  ktaf2 = event.target.value.trim();
});

salarisInput.addEventListener("input", (event) => {
  salaris = event.target.value.trim();
});

schaalInput.addEventListener("input", (event) => {
  schaal = event.target.value.trim();
});

hardskillsInput.addEventListener("input", (event) => {
  hardskills = event.target.value.trim();
});

sluitingsdatumInput.addEventListener("input", (event) => {
  sluitingsdatum = event.target.value.trim();
});

naamvacaturehouderInput.addEventListener("input", (event) => {
  naamvacaturehouder = event.target.value.trim();
});

functievacaturehouderInput.addEventListener("input", (event) => {
  functievacaturehouder = event.target.value.trim();
});

emailvacaturehouderInput.addEventListener("input", (event) => {
  emailvacaturehouder = event.target.value.trim();
});

telvacaturehouderInput.addEventListener("input", (event) => {
  telvacaturehouder = event.target.value.trim();
});

naamrecruiterInput.addEventListener("input", (event) => {
  naamrecruiter = event.target.value.trim();
});

functierecruiterInput.addEventListener("input", (event) => {
  functierecruiter = event.target.value.trim();
});

emailrecruiterInput.addEventListener("input", (event) => {
  emailrecruiter = event.target.value.trim();
});

telrecruiterInput.addEventListener("input", (event) => {
  telrecruiter = event.target.value.trim();
});

function generate() {
//  if (validate()) {

//Split input
const hardskillsLines = hardskills.split(/[\n,]/);
const deeltakenLines = deeltaken.split(/[\n,.]/);

// Trim witruimte van input
const trimmedHardskillsLines = hardskillsLines.map(line => line.trim());
const trimmedDeeltakenLines = deeltakenLines.map(line => line.trim());

// Maak bullets van competenties input
const hardskillsBullets = trimmedHardskillsLines.map(line => {
  let modifiedLine = line.toLowerCase(); // Convert the entire line to lowercase

  // Add a period at the end if it doesn't already end with one
  if (!modifiedLine.endsWith(".")) {
    modifiedLine = modifiedLine + ".";
  }

  return new docx.Paragraph({
    bullet: { level: 0 },
    children: [
      new docx.TextRun ({
        text: modifiedLine,
        font: "Calibri",
      })
    ]
  });
});


const deeltakenBullets = trimmedDeeltakenLines.map(line => {
  let modifiedLine = line.toLowerCase(); // Convert the entire line to lowercase

  // Add a period at the end if it doesn't already end with one
  if (!modifiedLine.endsWith(".")) {
    modifiedLine = modifiedLine + ".";
  }

  return new docx.Paragraph({
    bullet: { level: 0 },
    children: [
      new docx.TextRun ({
        text: modifiedLine,
        font: "Calibri",
      })
    ]
  });
});

//Maak bullets van arbeidsvoorwaarden input
const checkboxes = document.querySelectorAll('.checkbox-input');
const checkedValues = [];

checkboxes.forEach(checkbox => {
  if (checkbox.checked) {
    checkedValues.push(checkbox.value);
  }
});

const abvBullets = checkedValues.map(value => {
  let modifiedValue = value.toLowerCase();

  if (!modifiedValue.endsWith(".")) {
    modifiedValue = modifiedValue + ".";
  }

  return new docx.Paragraph({
    bullet: { level: 0 },
    children: [
      new docx.TextRun({
        text: modifiedValue,
        font: "Calibri",
      }),
    ],
  });
});

// Genereer document
  const doc = new docx.Document({
    creator: "Copywriter | VoorTekst",
    encoding: "utf-8",
    sections: [{
      properties: {},
      children: [

//Titeltekst        
        new docx.Paragraph({
          children: [
            new docx.TextRun({
              text: "Vacaturetekstgenerator VoorTekst",
              bold: true,
              font: "Calibri",
              size: 40,
            }),
          ],
        }),

//Intro
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: intro + " Jouw talent en werkgeluk staat bij ons voorop.",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
          ],
        }),

//Jouw functie
        new docx.Paragraph({
          spacing: {
            before: 200,
            after: 200,
        },
          children: [
            new docx.TextRun({
              text: "Jouw functie als " + functietitel + " heeft effect omdat... ",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: "er áltijd draagvlak is voor een goed plan. Zo zorg jij voor " + ktfi1 + " als " + ktfi2 + " " + functietitel + ". " + hoofdtaak + ". Verder houd jij je bezig met het:",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
          ],
        }),

        ...deeltakenBullets,

//Over Capelle aan den IJssel
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Over Capelle aan den IJssel",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: "Wij zijn een gemeente met het mooiste aantal inwoners dat er bestaat. Groot genoeg om te werken met de uitdagingen en onderwerpen die bij een grote stad horen. Klein genoeg om op individueel niveau echt verschil te maken. Wist je trouwens dat:",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
          ],
        }),

        new docx.Paragraph({
          bullet: { level: 0 },
          spacing: {
            before: 200,
          },
          children: [
            new docx.TextRun({
              text: capellebullets1,
              font: "Calibri",
            }),
          ],
        }),
        new docx.Paragraph({
          bullet: { level: 0 },
          children: [
            new docx.TextRun({
              text: capellebullets2,
              font: "Calibri",
            }),
          ],
        }),
        new docx.Paragraph({
          bullet: { level: 0 },
          children: [
            new docx.TextRun({
              text: "je als... " + functietitel + " de afdeling " + afdeling + " versterkt?",
              font: "Calibri",
            }),
          ],
        }),

//Over afdeling
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Over " + afdeling,
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: "Hier ben jij onder andere de collega van " + collega1 + " en " + collega2 + ". " + ktaf1 + " is een talent dat jullie allemaal hebben. Dat merk je vooral door " + ktaf1vb,
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
            new docx.TextRun({
              text: quotecollega,
              bold: false,
              italics: true,
              font: "Calibri",
              size: 20,
              break: 2,
            }),
            new docx.TextRun({
              text: "Als collega van " + afdeling + " ben je lid van een " + ktaf2 + ".",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 2,
            }),
          ],
        }),

//Jouw talenten
        new docx.Paragraph({
          spacing: {
            before: 200,
            after: 200,
        },
          children: [
            new docx.TextRun({
              text: "Jouw talenten",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: "Iedereen heeft talenten en bij Capelle kan en mag je die altijd inzetten. Zo werken we samen aan een inclusieve samenleving. Dat doe je met jouw " + talentkeuze + " Verder heb je:",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
          ],
        }),

        ...hardskillsBullets,

//Jouw mogelijkheden
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Jouw mogelijkheden",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
          ],
          }),
          new docx.Paragraph({
            bullet: { level: 0 },
            children: [
            new docx.TextRun({
              text: "tot € " + salaris + " bruto per maand inclusief 17,05% IKB (schaal " + schaal + ").",
              bold: false,
              font: "Calibri",
              size: 20,
            }),
          ],
        }),

        ...abvBullets,

//Daadkracht begint hier
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Daadkracht begint hier",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: "Iedereen mag meedoen en daar hoor jij ook bij. Daarom helpen we je graag op weg. We ontvangen graag jouw sollicitatie op deze vacature van " + functietitel + " bij de gemeente Capelle aan Den IJssel. Je kan solliciteren tot " + sluitingsdatum + ".",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
            new docx.TextRun({
              text: "Vragen stellen mag altijd! Wil je meer weten over de functie? Neem dan contact op met " + naamvacaturehouder + ", " + functievacaturehouder + " via " + emailvacaturehouder + " of " + telvacaturehouder + ". Hier lees je alles over onze sollicitatieprocedure. Wil je hier meer over weten? Neem daarvoor contact op met " + naamrecruiter + ", " + functierecruiter + " via " + emailrecruiter + " of " + telrecruiter + ".",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 2,
            }),
            new docx.TextRun({
              text: "'Samen maken we het verschil in Capelle'",
              bold: false,
              font: "Calibri",
              size: 20,
              break: 2,
            }),
          ],
        }),

      ],
    }]
  });

  docx.Packer.toBlob(doc).then(blob => {
    console.log(blob);
    saveAs(blob, functietitel + ".docx");
    console.log("Document created successfully");
  });
}
//}
