let message = "";
let language = "English";

language = "Japanese";
language = "Spanish";
language = "German";
language = "Thai";

if(language === "English"){
  message = "Thank you";
}
else if(language === "Spanish"){
  message = "Gracias";
}
else if(language === "German"){
  message = "Danke";
}
else {
  message = "We don't support " + language;
}
console.log(message);