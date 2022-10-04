var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['С днём рождения!',
 'С Рождеством, любовь моя',
 'Счастливого Рождества всей твоей семье',
 'Ты — та, кто нужен мне на Рождество',
 'Поправляйся скорее'];

for(var i = 0; i < greetings.length; i++) {
 var input = greetings[i];
 if(greetings[i].indexOf('Рождеств') !== -1) {
 var result = input;
 var listItem = document.createElement('li');
 listItem.textContent = result;
 list.appendChild(listItem);
 }
}

var list = document.querySelector('.output ul');
var cities = ['лонДон', 'МанЧЕСТёр', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];
for (let i = 0; i < cities.length; i++) {
  var input = cities[i];
  var lower = cities[i].toLowerCase();
  var firstLet = lower.slice(0,1);
  var elem = lower.replace(firstLet,firstLet.toUpperCase());
  input = elem;
  var itemList = document.createElement('li');
  itemList.textContent = input;
  list.appendChild(itemList);
}

var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  var code = input.slice(0,3);
  var index = input.indexOf(';');
  var name = input.slice(index+1);
  var done = code + ' : ' + name;
  var result = done;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
