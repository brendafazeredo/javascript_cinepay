// 18 or younger -> pays half price
// between 18 and 60 -> pays half price only with the card, otherwise pays full
// 60 or older -> pays half price

const age = 15;
const has_a_card = true;

const is_an_adult = age >= 18 && age <= 60;

if (is_an_adult && !has_a_card){
  console.log("FULL");
} else {
  console.log("HALF")
}
