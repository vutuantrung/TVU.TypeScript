const userName = 'Trung';

console.log(userName);

// using ! to check if existe the button
const button = document.querySelector('button')!;
button.addEventListener('click', () => {
  console.log('Clicked!');
});
