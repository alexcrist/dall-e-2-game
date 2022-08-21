
const winImage = 'https://media.discordapp.net/attachments/1010632210568716381/1010992888462725222/Mulien_a_white_and_orange_space_rover_viewed_afar_in_a_dramatic_7eb5b3c6-558a-4865-841c-006f7c9f736e.png';
const loseImage = 'https://cdn.discordapp.com/attachments/957704140400754770/1011001665983365190/unknown.png';

const scenes = [
  {
    image: 'https://media.discordapp.net/attachments/1010632210568716381/1010992888462725222/Mulien_a_white_and_orange_space_rover_viewed_afar_in_a_dramatic_7eb5b3c6-558a-4865-841c-006f7c9f736e.png',
    description: 'You are part of one of the first colonies of Mars. All is well until an oxygen tank bursts, destroying your facilities, including your communications with Earth. Before venturing off in hope of finding a neighboring colony, you...',
    choices: [
      'Detach a damaged oxygen tank to bring along',
      'Gather the crew for your mission',
      'Dig for buried gold',
      'Slip into your suit'
    ],
    correctChoices: [
      0,
      1
    ]
  }, 
  {
    image: 'https://cdn.discordapp.com/attachments/957704140400754770/1011002717717676062/unknown.png',
    description: 'TODO',
    choices: [
      'F',
      'B'
    ],
    correctChoices: [
      0
    ]
  },
];

let sceneIndex = 0;

const body = document.querySelector('body');

const displayWin = () => {
  body.style.backgroundImage = `url(${winImage})`;
  body.innerHTML = `
    <div class="description">
      Game over. You win!
    </div>
  `;
}

const displayLose = () => {
  body.style.backgroundImage = `url(${loseImage})`;
  body.innerHTML = `
    <div class="description">
      Game over. You lose.
    </div>
  `;
}

const displayScene = (index) => {
  const { image, description, choices, correctChoices } = scenes[index];
  
  console.log('correct choices:', correctChoices);

  body.style.backgroundImage = `url(${image})`;
  body.innerHTML = `
    <div class="description">
      ${description}
    </div>
    <div class="options">
      ${choices.map((choice) => {
        return `
          <div class="option">
            ${choice}
          </div>
        `;
      })}
    </div>
  `;

  const choiceElements = document.querySelectorAll('.option');
  for (let i = 0; i < choiceElements.length; i++) {
    const element = choiceElements[i];
    element.addEventListener('click', () => {
      if (correctChoices.includes(i)) {
        sceneIndex++;
        if (sceneIndex >= scenes.length) {
          displayWin();
        } else {
          displayScene(sceneIndex);
        }
      } else {
        displayLose();
      }
    });
  }
}

displayScene(sceneIndex);
