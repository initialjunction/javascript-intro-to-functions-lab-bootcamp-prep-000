function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  return console.log(string.toUpperCase())
}

function logWhisper(string)
{
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string)
{
  var lowercase = "hello"
  var uppercase = "HELLO"
  var mixedCase = "I love you, Grandma."
 if (lowercase.toLowerCase(string) === lowercase) {
   return "I can\'t hear you!"
 } else if (uppercase.toUpperCase(string) === uppercase) {
   return "YES INDEED!"
 } 
}