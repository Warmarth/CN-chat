const language = {
  en: 'Hello',
  bi: 'Muraho',
  fr: 'Bonjour',
};

function mapper(i) {
  return Object.entries(i).map(([key, value]) => value);
}

let r = mapper(language);
console.log(r);