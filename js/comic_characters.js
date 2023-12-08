function changeCharacter(characterData) {
    const imageContainer = document.getElementById('image-container');
    const characterNameElement = document.getElementById('character-name');
    const detailsElement = document.getElementById('details');
    const descriptionElement = document.getElementById('description');

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = `img/characters/profile/${characterData.imageFilename}`;
    newImage.alt = 'Displayed Image';

    // Update the content with HTML
    characterNameElement.textContent = characterData.characterName;
    detailsElement.innerHTML = characterData.details || 'Details go here.';
    descriptionElement.innerHTML = characterData.description || 'Description goes here.';

    // Clear previous content and append the new image
    imageContainer.innerHTML = '';
    imageContainer.appendChild(newImage);
}

// Example data for characters
const characters = [
    {
        characterName: 'Amulet',
        imageFilename: 'Amulet.png',
        details: 
        '<p><strong>Intellect:</strong> 3/5</p><p><strong>Strength:</strong> 2/5</p><p><strong>Willpower:</strong> 4/5</p>',
        description: '<p><strong>Object type:</strong> Coin Amulet<p><strong>Description:</strong></p><p>Amulet relies on her own positive outlook to brave through misfortune. Despite this, she feels like an outcast due to her eccentricities, and attempts to isolate herself from anyone she doesn‘t trust. Due to this, she can become self-centered and stubborn. It is still unclear of what she meant by "magic", maybe it was just her intuition all along.</p><p><strong>Status:</strong> Unknown</p>'
    },
    {
        characterName: 'Badgey',
        imageFilename: 'Badgey.png',
        details: 
        '<strong>Intellect:</strong> 3/5</p><p><strong>Strength:</strong> 4/5</p><p><strong>Willpower:</strong> 1/5</p>',
        description: '<p><strong>Object type:</strong> Circular Pin Badge</p><p><strong>Description:</strong></p><p>Badgey is kind and sincere, willing to listen to what others have to say. He doesn‘t brag often, and would be glad to quietly stay on the sidelines and help others. However, Badgey lacks in self esteem. While he can be somewhat inquisitive on other’s motives, he would rarely question them due to not believing in his own convictions enough.</p><p><strong>Status:</strong> Unknown</p>'
    },
     {
        characterName: 'Clove',
        imageFilename: 'Clove.png',
        details: 
        '<p><strong>Intellect:</strong> 3/5</p><p><strong>Strength:</strong> 1/5</p><p><strong>Willpower:</strong> 5/5</p>',
        description: '<p><strong>Object type:</strong> Flower Bud of <em>S. Aromaticum</em></p><p><strong>Description:</strong></p><p>Clove speaks her mind without a filter. She may not be fully capable of understanding the true horrors of Abject Reality, but she is empathetic and can easily read the environment around her. Aware of her own diminutive size, but she appears confident about it. Perceptive and kind, she is often the unintentional mediator between her friends.</p><p><strong>Status:</strong> Unknown</p>'
    },
     {
        characterName: 'Foamy',
        imageFilename: 'Foamy.png',
        details: 
        '<strong>Intellect:</strong> -</p><p><strong>Strength:</strong> -</p><p><strong>Willpower:</strong> -</p>',
        description: '<p><strong>Object type:</strong> Styrofoam Block</p><p><strong>Description:</strong></p>'
    },
    {
        characterName: 'Jeans',
        imageFilename: 'Jeans.png',
        details: 
        '<p><strong>Intellect:</strong> 2/5</p><p><strong>Strength:</strong> 5/5</p><p><strong>Willpower:</strong> 4/5</p>',
        description: '<p><strong>Object type:</strong> Denim Jeans</p><p><strong>Description:</strong></p><p>Jeans is notably tall and the most athletic. She rushes into action, without too much hesitation. To everyone else, she appears infallible. Kind, yet fiercely protective against the dangers, she is empatheticand encourages everyone to fight even when everyone, including herself, are at their lowest point..</p><p><strong>Status:</strong> Deceased</p>'
    },
    {
        characterName: 'Pinky',
        imageFilename: 'Pinky.png',
        details: 
        '<p><strong>Intellect:</strong> 1/5</p><p><strong>Strength:</strong> 3/5</p><p><strong>Willpower:</strong> 5/5</p>',
        description: '<p><strong>Object type:</strong> Acrylic Fingernail</p><p><strong>Description:</strong></p><p>Pinky is hot headed, and has violent tendencies. She does not back down when she’s up for a fight and getting her way, even if she’s worn out. She’s the most aggressive when she’s stressed. She interacts a lot with Swabs and has a soft spot for her because of how calm she is. She sees Swabs as her co-leader and the only person who could talk to those that she doesn’t know how to get along with.</p><p><strong>Status:</strong> Unknown</p>'
    },
    {
        characterName: 'Silica',
        imageFilename: 'Silica.png',
        details: 
        '<p><strong>Intellect:</strong> 2/5</p><p><strong>Strength:</strong> 3/5</p><p><strong>Willpower:</strong> 4/5</p>',
        description: '<p><strong>Object type:</strong> Silica Gel Packet</p><p><strong>Description:</strong></p><p>Silica is an unintentional oddball and is always naively curious about everything and everyone. He is skittish in new environments, but once he had built some of his confidence, Silica is bold and barely shows any fear in front of danger. He can be fiercely loyal to anyone he chooses to protect. He is also allergic to consuming water, but not snow.<p><strong>Status:</strong> Unknown</p>'
    },
    {
        characterName: 'Squiggly',
        imageFilename: 'Squiggly.png',
        details: 
        '<p><strong>Intellect:</strong> 5/5</p><p><strong>Strength:</strong> 1/5</p><p><strong>Willpower:</strong> 2/5</p>',
        description: '<p><strong>Object type:</strong> S shaped block</p><p><strong>Description:</strong></p><p>Squiggly is the older twin, but he is more anxious than his younger brother, Z. His other name is known as ‘Rhodes’. Without his brother, he feels that he became a half of a whole. He tries his best to care about the safety of his friends and is confident about questioning the ambiguous nature of Abject Reality, even if he appears paranoid about everything wrong that could happen.</p><p><strong>Status:</strong> Unknown</p>'
    },
     {
        characterName: 'Swabs',
        imageFilename: 'Swabs.png',
        details: 
        '<p><strong>Intellect:</strong> 5/5</p><p><strong>Strength:</strong> 1/5</p><p><strong>Willpower:</strong> 3/5</p>',
        description: '<p><strong>Object type:</strong> Cotton Bud</p><p><strong>Description:</strong></p><p>Swabs is calm and collected and gets along with almost everyone fairly well as a pacifist. She dislikes people fighting with each other and tries her best to prevent them. She is curious about how Abject Reality works, and would be the one to seek information about it. She bottles up her own negative emotions, which leads to mild signs of aggression in her actions.</p><p><strong>Status:</strong> Unknown</p>'
    },
     {
        characterName: 'Wet Wipes',
        imageFilename: 'Wipes.png',
        details: 
        '<p><strong>Intellect:</strong> 4/5</p><p><strong>Strength:</strong> 2/5</p><p><strong>Willpower:</strong> 2/5</p>',
        description: '<p><strong>Object type:</strong> Wet Tissues</p><p><strong>Description:</strong></p><p>Wet Wipes is serious and gloomy. A true wet blanket, she is in no mood for Basket’s jokes. She is often pessimistic about blind optimism due to her believing that she’s just going to be a hindrance to their hope. Her dour facade slips off when she is left with her own emotions to introspect on, due to her desiring companionship and approval, of all things.</p><p><strong>Status:</strong> Unknown</p>'
    },
 {
        characterName: 'Z',
        imageFilename: 'Z.png',
        details: 
        '<p><strong>Intellect:</strong> 4/5</p><p><strong>Strength:</strong> 1/5</p><p><strong>Willpower:</strong> 3/5</p>',
        description: '<p><strong>Object type:</strong> Z shaped block</p><p><strong>Description:</strong></p><p>Z is the younger brother of the twins. His direct confidence can easily gain trust from anyone. His cool exterior does not last very long, as in turmoil, he becomes easily frustrated by his own mistakes and the situation around him. His other name is known as ‘Cleveland’. Z wears sunglasses due to his photosensitivity, and hydrophobic from the fear of water entering his eyes.</p><p><strong>Status:</strong> Unknown</p>'
    },
    {
        characterName: 'Snake Oil',
        imageFilename: '',
        details: 
        '<p><strong>Intellect:</strong> ?/5</p><p><strong>Strength:</strong> ?/5</p><p><strong>Willpower:</strong> ?/5</p>',
        description: '<p><strong>Object type:</strong> <em>Snake Oil</em></p><p><strong>Description:</strong></p><p>Suspected to have seized the holographic and reality bending controls of Abject Reality in Tower 1. Location identified, approach with caution.</p><p><strong>Status:</strong> Unknown</p>'
    },
    {
        characterName: 'Mirror',
        imageFilename: 'Mirror.png',
        details: 
        '<p><strong>Intellect:</strong> -/5</p><p><strong>Strength:</strong> -/5</p><p><strong>Willpower:</strong> -/5</p>',
        description: '<p><strong>Object type:</strong> Framed Mirror</p><p><strong>Description:</strong></p><p>Mirror was loving and kind to everyone she meets. She always had a penchant of making everyone look the best they’ve ever been, which was why she was so fascinated by fashion and makeup. One moment, she was in the studio away from home, and the next day, she was gone. There have been several attempts for a full recovery, but none of them managed to being her back to her old self.</p><p><strong>Status:</strong> Unknown</p>'
    },
    {
        characterName: 'The Bucket',
        imageFilename: '',
        details: 
        '<p><strong>Intellect:</strong> ?/5</p><p><strong>Strength:</strong> ?/5</p><p><strong>Willpower:</strong> ?/5</p>',
        description: '<p><strong>Object type:</strong> The liquid inside of it (?)</p><p><strong>Description:</strong></p><p>Not much is known about this object, other than the fact that it appeared in Abject Reality and currently in the hands of someone else. This object is made up of hundreds of voices from an alternate dimension and has been proven from experimentation and reacts well to Regia crystals. Further testing is required.</p><p><strong>Status:</strong> Unknown</p>'
    },
];

// Function to initialize the buttons
function initializeButtons() {
    const buttonContainer = document.getElementById('button-container');

    characters.forEach(character => {
        const button = document.createElement('button');
        button.textContent = character.characterName;
        button.addEventListener('click', () => changeCharacter(character));
        buttonContainer.appendChild(button);
    });

    // Set initial character when the page loads
    changeCharacter(characters[0]); // You can set a different initial character if needed
}

// Initialize the buttons when the page loads
document.addEventListener('DOMContentLoaded', initializeButtons);
