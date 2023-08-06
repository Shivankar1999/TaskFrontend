// Get all Array of class Box-Offers

let OffersListData = Array.from(document.querySelectorAll('.Box-Offers'));
let OffersListRadioBtn = Array.from(
  document.querySelectorAll('input[type="radio"]')
);

console.log(OffersListData);
console.log(OffersListRadioBtn);
// Add EventLisner to all div's with same class name

OffersListData.forEach((div) => {
  div.addEventListener('click', function () {
    OffersListData.forEach((d) => {
      d.classList.remove('current');
    });
    OffersListRadioBtn.forEach((r) => {
      r.checked = false;
    });
    div.classList.add('current');
    div.children[0].children[0].checked = true;
    // console.log(inputElement);
  });
});

// Add To Cart....
