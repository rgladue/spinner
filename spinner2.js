const spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|    ','\r|  ',]
let delay = 0;
const increment = 200
for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(line)
  }, delay);
  delay += increment;
}