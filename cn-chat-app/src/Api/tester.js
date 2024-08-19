
// What is the purpose of the following code snippet?
// A. It is a server-side code that creates an Express server that listens on port 3000 and sends a response of 'Hello World' when a GET request is made to the root route ('/').
// B. It is a client-side code that creates an Express server that listens on port 3000 and sends a response of 'Hello World' when a GET request is made to the root route ('/').
// C. It is a server-side code that creates an Express server that listens on port 3000 and sends a response of 'Hello World' when a POST request is made to the root route ('/').
// D. It is a client-side code that creates an Express server that listens on port 3000 and sends a response of 'Hello World' when a POST request is made to the root route ('/').
// Answer: A

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
