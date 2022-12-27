$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  // Elementen formulier ophalen
  const form = document.querySelector("form");
  const ordernummerInput = document.querySelector("#ordernummer");
  const ticcInput = document.querySelector("#ticc");
  const contactpersoonInput = document.querySelector("#contactpersoon");
  const functietitelInput = document.querySelector("#functietitel");
  const standplaatsInput = document.querySelector("#standplaats");
  const datumInput = document.querySelector("#datum");
  const copywriterInput = document.querySelector("#copywriter");
  const gotwInput = document.querySelector("#gotw");
  const introInput = document.querySelector("#intro");
  const tussenkopInput = document.querySelector("#tussenkop");
  const hoofdtaakInput = document.querySelector("#hoofdtaak");
  const takenInput = document.querySelector("#taken");
  const optioneelInput = document.querySelector("#optioneel");
  const functieeisenInput = document.querySelector("#functieeisen");
  const hardskillInput = document.querySelector("#hardskills");
  const bijzonderhedenInput = document.querySelector("#bijzonderheden");
  const values = {
    ordernummer: form.elements["ordernummer"].value,
    ticc: form.elements["ticc"].value,
    contactpersoon: form.elements["contactpersoon"].value,
    functietitel: form.elements["functietitel"].value,
    standplaats: form.elements["standplaats"].value,
    datum: form.elements["datum"].value,
    copywriter: form.elements["copywriter"].value,
    gotw: form.elements["gotw"].value,
    intro: form.elements["intro"].value,
    tussenkop: form.elements["tussenkop"].value,
    hoofdtaak: form.elements["hoofdtaak"].value,
    taken: form.elements["taken"].value,
    optioneel: form.elements["optioneel"].value,
    functieeisen: form.elements["functieeisen"].value,
    hardskills: form.elements["hardskills"].value,
    bijzonderheden: form.elements["bijzonderheden"].value,
    };
  
  // Variabelen voor gebruikersinput
  let ordernummer = "";
  let ticc = "";
  let contactpersoon = "";
  let functietitel = "";
  let standplaats = "";
  let datum = "";
  let copywriter = "";
  let gotw = "";
  let intro = "";
  let tussenkop = "";
  let hoofdtaak = "";
  let taken = "";
  let optioneel = "";
  let functieeisen = "";
  let hardskills = "";
  let bijzonderheden = "";
  
  // Update variabelen terwijl gebruiker input geeft
  ordernummerInput.addEventListener("input", (event) => {
    ordernummer = event.target.value;
  });
  ticcInput.addEventListener("input", (event) => {
    ticc = event.target.value;
  });
  contactpersoonInput.addEventListener("input", (event) => {
    contactpersoon = event.target.value;
  });
  functietitelInput.addEventListener("input", (event) => {
    functietitel = event.target.value;
  });
  standplaatsInput.addEventListener("input", (event) => {
    standplaats = event.target.value;
  });
  datumInput.addEventListener("input", (event) => {
    datum = event.target.value;
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
  tussenkopInput.addEventListener("input", (event) => {
    tussenkop = event.target.value;
  });
  hoofdtaakInput.addEventListener("input", (event) => {
    hoofdtaak = event.target.value;
  });
  takenInput.addEventListener("input", (event) => {
    taken = event.target.value;
  });
  optioneelInput.addEventListener("input", (event) => {
    optioneel = event.target.value;
  });
  functieeisenInput.addEventListener("input", (event) => {
    functieeisen = event.target.value;
  });
  hardskillInput.addEventListener("input", (event) => {
    hardskills = event.target.value;
  });
  bijzonderhedenInput.addEventListener("input", (event) => {
    bijzonderheden = event.target.value;
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
    if (!hasOnlyNumbers(form.elements["ordernummer"], REQUIRED, NUMBER_INVALID)) {
      // Display error message for ordernummer field
      isValid = false;
    }
    if (!hasValue(form.elements["ticc"], REQUIRED)) {
      // Display error message for ticc field
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
    if (!hasValue(form.elements["tussenkop"], REQUIRED)) {
      // Display error message for tussenkop field
      isValid = false;
    }
    if (!hasValue(form.elements["hoofdtaak"], REQUIRED)) {
      // Display error message for taken field
      isValid = false;
    }
    if (!hasValue(form.elements["taken"], REQUIRED)) {
      // Display error message for taken field
      isValid = false;
    }
    if (!hasValue(form.elements["functieeisen"], REQUIRED)) {
      // Display error message for functieeisen field
      isValid = false;
    }
    if (!hasValue(form.elements["hardskills"], REQUIRED)) {
      // Display error message for hardskills field
      isValid = false;
    }
    if (!hasValue(form.elements["bijzonderheden"], REQUIRED)) {
      // Display error message for bijzonderheden field
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
                            text: "UBR",
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

      //TICC
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
                        text: "Link naar TICC",
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
                            text: ticc,
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
    const takenLines = taken.split(/[\n,]/);
    const hardskillsLines = hardskills.split(/[\n,]/);
    const bijzonderhedenLines = bijzonderheden.split(/[\n,.]/);
  
  // Trim witruimte van input
    const trimmedTakenLines = takenLines.map(line => line.trim());
    const trimmedHardskillsLines = hardskillsLines.map(line => line.trim());
    const trimmedBijzonderhedenLines = bijzonderhedenLines.map(line => line.trim());

  

  // Maak bullets van taken input
    const takenBullets = trimmedTakenLines.map(line => {
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
  
  // Maak bullets van hard skills input
    const hardskillsBullets = trimmedHardskillsLines.map(line => {
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
          }),
        ]
      });
    });

  // Maak bullets van bijzonderheden input
  const bijzonderhedenBullets = trimmedBijzonderhedenLines.map(line => {
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
                text: "Functieomschrijving",
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
  
  //Unieke tussenkop + taken + optioneel
          new docx.Paragraph({
            spacing: {
              before: 200,
          },
            children: [
              new docx.TextRun({
                text: tussenkop,
                bold: true,
                font: "Calibri",
                size: 20,
              }),
              new docx.TextRun({
                text: hoofdtaak,
                bold: false,
                font: "Calibri",
                size: 20,
                break: 1,
              }),
            ],
          }),
          new docx.Paragraph({
            children: [],  
          }),

          ...takenBullets,

  //Optioneel
          new docx.Paragraph({
            spacing: {
              before: 200,
          },
            children: [
              new docx.TextRun({
                text: optioneel,
                bold: false,
                font: "Calibri",
                size: 20,
              }),
            ],
          }),

  //Functie-eisen
          new docx.Paragraph({
            spacing: {
              before: 200,
          },
            children: [
              new docx.TextRun({
                text: "Functie-eisen",
                bold: true,
                font: "Calibri",
                size: 20,
              }),
              new docx.TextRun({
                text: functieeisen,
                bold: false,
                font: "Calibri",
                size: 20,
                break: 1,
              }),
            ],
          }),
          new docx.Paragraph({
            children: [],  
          }),

          ...hardskillsBullets,

  //Bijzonderheden
          new docx.Paragraph({
            spacing: {
              before: 200,
          },
            children: [
              new docx.TextRun({
                text: "Bijzonderheden",
                bold: true,
                font: "Calibri",
                size: 20,
              }),
            ],
          }),
          new docx.Paragraph({
            children: [],  
          }),

          ...bijzonderhedenBullets,

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