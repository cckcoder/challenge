function main(input) {
  let depth = parseInt(input);
  let step = 0;
  let climbsUp = 7;
  let slipsBack = 2;
  let day = 0;
  while (step < depth) {
    day++;
    if (day >= 6) {
      step += climbsUp;
    } else {
      step += climbsUp - slipsBack;
    }
  }
  console.log(`Day: ${day}, Step: ${step}`);
  return day;
}

// Input 31
// Output 6
main(31);
