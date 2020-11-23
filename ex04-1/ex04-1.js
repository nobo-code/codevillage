function cointoss() {
  const num = Math.random()

  if (num >= 0.5) {
    console.log('表')
  } else {
    console.log('裏')
  }
}

for (let num = 0; num < 10; num++) {
  cointoss()
}