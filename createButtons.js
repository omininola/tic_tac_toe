const div = document.querySelector('.botos');

for (let i = 1; i < 10; i++) {
    var button = document.createElement('button');
    button.setAttribute('onclick', `whitchPlayer(${i})`)
    button.classList = 'botos-itens';
    button.id = `boto${i}`;

    var paragraph = document.createElement('p');
    paragraph.id = i;
    paragraph.innerHTML = "+";

    button.appendChild(paragraph);

    div.appendChild(button);
}