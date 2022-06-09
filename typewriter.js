const sentence = "hello there from lighthouse labs";
let c = '';
for (let x = 0; x <= sentence.length; x++) {
  c += sentence[x];
  setTimeout(()=>{
    if (x !== sentence.length) {
      process.stdout.write(c[x]);
    } else {
      console.log();
    }
  },x * 100)
}