const gaaliReplace = (sentence, replacer, addWord, ingnoreWord) => {
  let gaaliya = [
    "chutiya",
    "chootiya",
    "bhenchod",
    "bhenchhod",
    "bhosdike",
    "bsdk",
    "gaand",
    "gand",
    "lund",
    "lode",
    "laude",
    "lodu",
    "jhat",
    "jhaat",
    "jhatu",
    "jhatoo",
    "jhaatu",
    "jhaatoo",
    "chodu",
    "chodike",
    "madarchod",
    "maadarchhod",
    "madachhod",
    "randi",
    "raand",
    "saale",
    "bhosad",
    "zavad",
    "zavaad",
    "chus le",
    "backchod",
    "baklund",
    "bakland",
    "backlund",
    "backland",
    "bhadve",
    "bhadwe",
    "bulle",
    "lulli",
    "dalli",
    "dalle",
    "chut",
    "choot",
    "betichod",
    "chudasi",
    "bhosra",
    "kukarchod",
  ]
    .concat(addWord ?? [""])
    .filter((gaali) => {
      let ignoreGaaliSet = new Set(ingnoreWord ?? [""]);
      return !ignoreGaaliSet.has(gaali);
    });

  let replacerRegx = new RegExp(gaaliya.join("|"), "gim");

  let replacedText = sentence.replace(replacerRegx, replacer ?? "***");
  return replacedText;
};

module.exports= gaaliReplace;
