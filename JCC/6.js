//Question: Generate Random AlphaNumeric Captcha Using Javascript

function generateRandom() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let strLength = 7;

  let result = "";

  for (i = 0; i < strLength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);

    result = result + chars.substring(randNum, randNum + 1);
  }

  return result;
  //   document.getElementById("randomChar").innerHTML = result;
}

console.log(generateRandom());
