const args = process.argv.slice(2); // get rid of the first 2 default args.
for (let arg of args) {
  console.log(`hello, ${arg}`);
}
