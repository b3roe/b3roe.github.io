$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Elementen formulier ophalen
const form = document.querySelector("form");
const functietitelInput = document.querySelector("#functietitel");
const standplaatsInput = document.querySelector("#standplaats");
const opdrachtgeverInput = document.querySelector("#opdrachtgever");
const datumInput = document.querySelector("#datum");
const contactpersoonInput = document.querySelector("#contactpersoon");
const ordernummerInput = document.querySelector("#ordernummer");
const copywriterInput = document.querySelector("#copywriter");
const gotwInput = document.querySelector("#gotw");
const introInput = document.querySelector("#intro");
const ditdoejebijInput = document.querySelector("#ditdoejebij");
const functieeisenInput = document.querySelector("#functieeisen");
const pullInput = document.querySelector("#pullfactoren");
const testquoteInput = document.querySelector("#testquote");
const testnaamInput = document.querySelector("#testnaam");
const testfunctieInput = document.querySelector("#testfunctie");
const competentiesInput = document.querySelector("#competenties");
const values = {
  opdrachtgever: form.elements["opdrachtgever"].value,
  ordernummer: form.elements["ordernummer"].value,
  contactpersoon: form.elements["contactpersoon"].value,
  functietitel: form.elements["functietitel"].value,
  standplaats: form.elements["standplaats"].value,
  datum: form.elements["datum"].value,
  copywriter: form.elements["copywriter"].value,
  gotw: form.elements["gotw"].value,
  intro: form.elements["intro"].value,
  ditdoejebij: form.elements["ditdoejebij"].value,
  pullfactoren: form.elements["pullfactoren"].value,
  testquote: form.elements["testquote"].value,
  testnaam: form.elements["testnaam"].value,
  testfunctie: form.elements["testfunctie"].value,
  functieeisen: form.elements["functieeisen"].value,
  competenties: form.elements["competenties"].value,

};

// Variabelen voor gebruikersinput
let functietitel = "";
let standplaats = "";
let opdrachtgever = "";
let datum = "";
let contactpersoon = "";
let ordernummer = "";
let copywriter = "";
let gotw = "";
let intro = "";
let ditdoejebij = "";
let pullfactoren = "";
let testquote = "";
let testnaam = "";
let testfunctie = "";
let functieeisen = "";
let competenties = "";

// Update variabelen terwijl gebruiker input geeft
functietitelInput.addEventListener("input", (event) => {
  functietitel = event.target.value;
});
standplaatsInput.addEventListener("input", (event) => {
  standplaats = event.target.value;
});
opdrachtgeverInput.addEventListener("input", (event) => {
  opdrachtgever = event.target.value;
});
datumInput.addEventListener("input", (event) => {
  datum = event.target.value;
});
contactpersoonInput.addEventListener("input", (event) => {
  contactpersoon = event.target.value;
});
ordernummerInput.addEventListener("input", (event) => {
  ordernummer = event.target.value;
});
copywriterInput.addEventListener("input", (event) => {
  copywriter = event.target.value;
});
gotwInput.addEventListener("input", (event) => {
  gotw = event.target.value;
});
introInput.addEventListener("input", (event) => {
  intro = event.target.value;
});
ditdoejebijInput.addEventListener("input", (event) => {
  ditdoejebij = event.target.value;
});
pullInput.addEventListener("input", (event) => {
  pullfactoren = event.target.value;
});
testquoteInput.addEventListener("input", (event) => {
  testquote = event.target.value;
});
testnaamInput.addEventListener("input", (event) => {
  testnaam = event.target.value;
});
testfunctieInput.addEventListener("input", (event) => {
  testfunctie = event.target.value;
});
functieeisenInput.addEventListener("input", (event) => {
  functieeisen = event.target.value;
});
competentiesInput.addEventListener("input", (event) => {
  competenties = event.target.value;
});

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

//Error message functions
function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

//Error messages
const REQUIRED = "Dit veld is vereist";
const DROPDOWN_REQUIRED = "Selecteer een optie";
const EMAIL_INVALID = "Voer een correct e-mailadres in";
const DATE_INVALID = "Voer een correcte datum in (dd-mm-jjjj)";
const NUMBER_INVALID = "Gebruik alleen cijfers";
const JE_INVALID = "Begin iedere zin met 'Je...'";

//Valideer ordernummer
function hasOnlyNumbers(input, requiredMsg, invalidMsg) {
	//check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}

	// validate digits only (0-9)
	const numberRegex = /^\d+$/;

	const ordernummer = input.value.trim();
	if (!numberRegex.test(ordernummer)) {
		return showError(input, invalidMsg);
	}
	return showSuccess(input);
}

//Valideer email
function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const contactpersoon = input.value.trim();
	if (!emailRegex.test(contactpersoon)) {
		return showError(input, invalidMsg);
	}
	return true;
}

//Valideer functie-eisen
function validateJe(input, requiredMsg, invalidMsg) {
  const functieLines = functieeisen.split('\n');
  if (!hasValue(input, requiredMsg)) {
    return false;
  };

  functieLines.forEach((line) => {
    if (line.startsWith("Je ") || line.startsWith("je ")) {
      valid = true;
    } else {
      valid = false;
    }
  });

  if (valid) {
    return true;
  } else {
    return showError(input, invalidMsg);
  }

}

//Valideer datum
function validateDate(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate date format
	const dateRegex = /^\d{2}[\/-]\d{2}[\/-]\d{4}$/; // accept both / and - as separators

	const datum = input.value.trim();
	if (!dateRegex.test(datum)) {
		return showError(input, invalidMsg)
	}
	return true;
}

function validate() {
  let isValid = true;
  if (!hasValue(form.elements["opdrachtgever"], DROPDOWN_REQUIRED)) {
    // Display error message for opdrachtgever field
    isValid = false;
  }
  if (!hasOnlyNumbers(form.elements["ordernummer"], REQUIRED, NUMBER_INVALID)) {
    // Display error message for ordernummer field
    isValid = false;
  }
  if (!validateEmail(form.elements["contactpersoon"], REQUIRED, EMAIL_INVALID)) {
    // Display error message for contactpersoon field
    isValid = false;
  }
  if (!hasValue(form.elements["functietitel"], REQUIRED)) {
    // Display error message for functietitel field
    isValid = false;
  }
  if (!hasValue(form.elements["standplaats"], REQUIRED)) {
    // Display error message for standplaats field
    isValid = false;
  }
  if (!validateDate(form.elements["datum"], REQUIRED, DATE_INVALID)) {
    // Display error message for datum field
    isValid = false;
  }
  if (!hasValue(form.elements["copywriter"], DROPDOWN_REQUIRED)) {
    // Display error message for copywriter field
    isValid = false;
  }
  if (!hasValue(form.elements["gotw"], REQUIRED)) {
    // Display error message for gotw field
    isValid = false;
  }
  if (!hasValue(form.elements["intro"], REQUIRED)) {
    // Display error message for intro field
    isValid = false;
  }
  if (!hasValue(form.elements["ditdoejebij"], REQUIRED)) {
    // Display error message for ditdoejebij field
    isValid = false;
  }
  if (!hasValue(form.elements["pullfactoren"], REQUIRED)) {
    // Display error message for pullfactoren field
    isValid = false;
  }
  if (!hasValue(form.elements["testquote"], REQUIRED)) {
// Display error message for testimonial field
    isValid = false;
  }
  if (!hasValue(form.elements["testnaam"], REQUIRED)) {
    // Display error message for testimonial field
    isValid = false;
  }
  if (!hasValue(form.elements["testfunctie"], REQUIRED)) {
    // Display error message for testimonial field
    isValid = false;
  }
  if (!validateJe(form.elements["functieeisen"], REQUIRED, JE_INVALID)) {
    // Display error message for functieeisen field
    isValid = false;
  }
  if (!hasValue(form.elements["competenties"], REQUIRED)) {
    // Display error message for competenties field
    isValid = false;
  }
  return isValid;
}


function generate() {
  if (validate()) {

  const table = new docx.Table({
    width: {
      size: 70,
      type: docx.WidthType.PERCENTAGE,
    },
    rows: [
    //In opdracht van      
        new docx.TableRow({
            children: [
                new docx.TableCell({
                  width: {
                    size: 35,
                    type: docx.WidthType.PERCENTAGE,
                  },
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: "In opdracht van",
                          bold: true,
                          font: "Calibri",                          
                        })
                      ]
                    })],
                }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: opdrachtgever,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Ordernummer
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Ordernummer",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: ordernummer,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Contactpersoon
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Contactpersoon",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: contactpersoon,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Functietitel
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Functietitel",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: functietitel,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Locatie
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Locatie",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: standplaats,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Datum 
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Datum",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: datum,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Copywriter
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Copywriter",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: copywriter,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
    //Goed om te weten
          new docx.TableRow({
            children: [
              new docx.TableCell({
                margins: {
                  left: docx.convertInchesToTwip(0.1),
                  right: docx.convertInchesToTwip(0.1),
              },
                children: [new docx.Paragraph({
                  children: [
                    new docx.TextRun({
                      text: "Goed om te weten",
                      bold: true,
                      font: "Calibri",                          
                    })
                  ]
                })],
            }),
                new docx.TableCell({
                  margins: {
                    left: docx.convertInchesToTwip(0.1),
                    right: docx.convertInchesToTwip(0.1),
                },
                    children: [new docx.Paragraph({
                      children: [
                        new docx.TextRun({
                          text: gotw,
                          font: "Calibri",    
                        })],
                    })],
                }),
            ],
          }),
        ]});

//Split input
  const compLines = competenties.split(/[\n,]/);
  const pullLines = pullfactoren.split(/[\n,]/);
  const functieLines = functieeisen.split(/[\n,.]/);

  // Trim witruimte van input
  const trimmedCompLines = compLines.map(line => line.trim());
  const trimmedPullLines = pullLines.map(line => line.trim());
  const trimmedFunctieLines = functieLines.map(line => line.trim());

// Maak bullets van competenties input
  const compBullets = trimmedCompLines.map(line => {
    return new docx.Paragraph({
      bullet: { level: 0 },
      children: [
        new docx.TextRun ({
          text: line,
          font: "Calibri",
        })
      ]
    });
  });

// Maak bullets van pullfactoren input
  const pullBullets = trimmedPullLines.map(line => {
    let modifiedLine = line;
    if (modifiedLine !== '' && modifiedLine[0] === modifiedLine[0].toUpperCase()) {
      modifiedLine = modifiedLine[0].toLowerCase() + modifiedLine.slice(1);
    }
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

// Maak bullets van functie-eisen input
  const functieBullets = trimmedFunctieLines.map(line => {
    let modifiedLine = line;
    if (modifiedLine !== '' && modifiedLine[0] === modifiedLine[0].toLowerCase()) {
      modifiedLine = modifiedLine[0].toUpperCase() + modifiedLine.slice(1);
    }
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

// Check of de opmaak van de testimonial quote correct is en pas deze evt. aan
  let modifiedTestquote = testquote.trim();
  modifiedTestquote = modifiedTestquote.charAt(0).toUpperCase() + modifiedTestquote.slice(1);
  if (!modifiedTestquote.endsWith('.')) {
    modifiedTestquote = modifiedTestquote + '.';
  }
  if (!modifiedTestquote.startsWith('"') || !modifiedTestquote.endsWith('"')) {
    modifiedTestquote = '"' + modifiedTestquote + '"';
  }

//Check of de opmaak van de testimonial functie correct is en pas deze evt. aan
  let modifiedTestnaam = testfunctie.trim();

//Check of de opmaak van de testimonial functie correct is en pas deze evt. aan
  let modifiedTestfunctie = testfunctie.trim();
  modifiedTestfunctie = modifiedTestfunctie.toLowerCase();

// Genereer document
  const doc = new docx.Document({
    creator: copywriter + " | VoorTekst",
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

//Tabel
        table,

//Intro
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Intro",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: intro,
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
          ],
        }),

//Dit doe je bij
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Dit doe je bij " + opdrachtgever,
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: ditdoejebij,
              bold: false,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
          ],
        }),

//Een bijzondere baan omdat
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Een bijzondere baan omdat...",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
          ],
        }),

        ...pullBullets,

//Dit zegt een collega
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Dit zegt een collega over jouw werkomgeving",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: modifiedTestquote,
              bold: false,
              italics: true,
              font: "Calibri",
              size: 20,
              break: 1,
            }),
            new docx.TextRun({
              text: " - " + modifiedTestnaam,
              bold: false,
              font: "Calibri",
              size: 20,
            }),
            new docx.TextRun({
              text: ", " + modifiedTestfunctie,
              bold: false,
              font: "Calibri",
              size: 20,
            }),
          ],
        }),

//Wanneer past deze baan bij je?
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Wanneer past deze baan bij je?",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
          ],
        }),

        ...functieBullets,

//Competenties
        new docx.Paragraph({
          spacing: {
            before: 200,
        },
          children: [
            new docx.TextRun({
              text: "Competenties",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
          ],
        }),

        ...compBullets,
      ],
    }]
  });

  docx.Packer.toBlob(doc).then(blob => {
    console.log(blob);
    saveAs(blob, ordernummer + ".docx");
    console.log("Document created successfully");
  });
}
}