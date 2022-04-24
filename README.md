# text-encryption-decryption
ONE Challenge: Text encryption and decryption 

## Play with it

You can visit the site by following the URL: [text encryption and decryption](https://eudesserpa.github.io/text-encryption-decryption/src/).

## Description
This is a challenge proposed by the tutors of the ONE program (Oracle Next Education).

### Clarification

Although its name indicates a text cipher, it is actually a basic encoder. Whose objective is, excuse the redundancy, to encode a text.

### Encoding rules
The encoding consists of 5 rules, one for each vowel, which are the ones to encode:

```javascript
const rules = {
  a: ai,
  e: enter,
  i: imes,
  o: ober,
  u: ufat,
}
```

#### Example
```javascript
// Encrypt
const input = "gato"; //Output: "gaitober"

// Decrypt
const input = "gaitober" // Output: "gato"
```


### Requirements
* It should work with lowercase letters only, no accents or special characters.
* A word encoded several times can be decoded to its original version.

## Contributing
Pull requests are welcome 😉. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
