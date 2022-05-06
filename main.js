const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function () {
  const div = document.createElement('div');
  div.classList.add('page-header');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const strong = document.createElement('strong');
  strong.appendChild(document.createTextNode(document.getElementById('name').value));
  const postMessage = document.createTextNode(document.getElementById('message').value);
  const byAuthor = document.createTextNode('Posted By: ');
  const target = document.getElementsByClassName('posts')[0];
  p1.appendChild(postMessage);
  p2.append(byAuthor, strong);
  div.append(p1, p2);
  target.appendChild(div);
});