document.getElementById('submit').addEventListener('click', function () {
  const target = document.getElementsByClassName('posts')[0];
  const div = document.createElement('div');
  const author = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  div.innerHTML = 
    `<p>${message}</p>
    <p>Posted by: <strong>${author}</strong></p>
    <hr>`;

  target.appendChild(div);
});
