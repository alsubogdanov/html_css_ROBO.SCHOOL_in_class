const myModal = document.getElementById("myModal");
function openModal() {
  myModal.style.display = "flex";
}

// function closeModal() {
//   console.log(event);

//   if (
//     event.target === myModal ||
//     event.target === document.getElementById("closeModalBtn")
//   ) {
//     myModal.style.display = "none";
//   }
//   // document.getElementById('myModal').style.display = 'none';
// }

const fruits = ["apple", "banana", "orange"];

// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1}. ${fruit}`);
// });

const arr1 = [1, 5, 8];
const arr2 = [1, 5, 8];
const arr3 = arr1;
const x = 4;
const p = "Lorem ipsum, dolor sit amet consectetur adipisi";
const h3 = "Курсы и тренинги";

const str = "wer" + x;
const str2 = "Курсы \"и\" 'тренинги'";
const str3 = ` 
    <p>
        ${p}
    </p>
    <h3>${h3}</h3>
`;
console.log(str2);
