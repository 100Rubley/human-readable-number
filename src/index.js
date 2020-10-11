module.exports = function toReadable(number) {
  const words = {
    0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
    5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
    15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
    70: 'seventy', 80: 'eighty', 90: 'ninety'
  }
  let humanWords
  let remainder = number % 10
  let hundredRemainder = number % 100

  switch (true) {
    case (number === 0):
      humanWords = 'zero'
      break

    case (number <= 20):
      humanWords = words[number]
      break

    case (number < 100):
      if (remainder === 0) {
        humanWords = `${words[number - remainder]}`
      } else {
        humanWords = `${words[number - remainder]} ${words[remainder]}`
      }
      break

    case (number < 1000):
      let hundred = number.toString().split('').shift()
      switch (true) {
        case (hundredRemainder === 0 && remainder === 0):
          humanWords = `${words[hundred]} hundred`
          break

        case (remainder === 0):
          humanWords = `${words[hundred]} hundred ${words[hundredRemainder - remainder]}`
          break

        case (hundredRemainder === 0):
          humanWords = `${words[hundred]} hundred ${words[hundredRemainder - remainder]}`
          break

        case (hundredRemainder < 20):
          humanWords = `${words[hundred]} hundred ${words[hundredRemainder]}`
          break

        default:
          humanWords = `${words[hundred]} hundred ${words[hundredRemainder - remainder]} ${words[remainder]}`
          break
      }
      break
  }
  return humanWords
}
