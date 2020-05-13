/**
 * Key Gen module
 * @module KeyGen
 */

const rsa = require('node-rsa');
const fs = require('fs');

const key = new rsa({ b: 512 });
console.log('Création de la clé privé...');
key.generateKeyPair(2048);
const pk = key.exportKey();
const pub = key.exportKey('public');

fs.writeFile(__dirname + '/private.key', pk, function(err) {
  if (err) {
    console.log('Problème lors de la création du fichier private.key');
    throw err;
  }
});
fs.writeFile(__dirname + '/public.key', pub, function(err) {
  if (err) {
    console.log('Problème lors de la création du fichier public.key');
    throw err;
  }
});

console.log(`La clé privée à été bien générée : ${__dirname}/private.key`);
