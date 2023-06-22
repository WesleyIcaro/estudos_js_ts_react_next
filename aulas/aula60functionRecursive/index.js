function recursiva(max) {
  console.log(max)
  if (max >= 2000000) return
  max++
  recursiva(max)
}

recursiva(0)
