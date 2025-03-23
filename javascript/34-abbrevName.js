function abbrevName(name){ 
  return name.split(' ').map(a => a.charAt(0)).join('.').toUpperCase()
}
console.log(abbrevName('arif Wibowo')); // 'A.W'