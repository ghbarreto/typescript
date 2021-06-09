const button = document.querySelector('button');
const userName = 'Gabriel';

console.log(userName);

if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}
