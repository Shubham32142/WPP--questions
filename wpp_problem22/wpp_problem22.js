/*Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.*/
const dropdown = document.querySelector('#country');
document.querySelector('.chooseBtn').addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});