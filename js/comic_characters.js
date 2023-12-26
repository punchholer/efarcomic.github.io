// Function to change character information
function changeCharacter(characterData) {
    const imageContainer = document.getElementById('image-container');
    const characterNameElement = document.getElementById('character-name');
    const detailsElement = document.getElementById('details');
    const descriptionElement = document.getElementById('description');
    const statusElement = document.getElementById('status');
    const revealButton = document.getElementById('reveal-button');
    const cipherDecoderContainer = document.getElementById('cipher-decoder-container');

    // Remove existing cipher decoder
    if (cipherDecoderContainer) {
        cipherDecoderContainer.parentNode.removeChild(cipherDecoderContainer);
    }
    // Check if the current character is 'The Bucket' or 'Foamy'
    if (characterData.characterName === 'The Bucket' || characterData.characterName === 'Foamy' || characterData.characterName === 'Snake Oil') {
        // Set opacity to 0.1 for status
        statusElement.style.opacity = 0.1;

        // Create the decoder container for 'The Bucket' only
        if (characterData.characterName === 'The Bucket') {
            // Create the decoder container
            const decoderContainer = document.createElement('div');
            decoderContainer.id = 'cipher-decoder-container';

            // Add content to the decoder container (e.g., a form)
            decoderContainer.innerHTML = `
                <form id="decoder-form">
                    <h2>Bucket decoder</h2>
                    <input type="text" id="cipher-text" name="cipher-text" required>
                    <button type="button" onclick="decodeCipher()">Decode</button>
                    <p id="decoded-text"></p>
                </form>
            `;

            // Append the decoder container between content-container and footer
            const contentContainer = document.getElementById('content-container');
            contentContainer.parentNode.insertBefore(decoderContainer, document.getElementById('footer'));

            // Hide the reveal button for 'The Bucket'
            revealButton.style.display = 'none';
        }
        // Remove the 'pressed' class from all buttons
        const allButtons = document.querySelectorAll('#button-container img');
        allButtons.forEach(button => button.classList.remove('pressed'));

        // Add the 'pressed' class to the clicked button
        const pressedButton = document.querySelector(`#button-container img[alt="${characterData.characterName}"]`);
        pressedButton.classList.add('pressed');
    } else {
        // For other characters, set opacity to 1 for status
        statusElement.style.opacity = 1;

        // Reset the status and button
        statusElement.style.display = 'none';
        revealButton.style.display = 'inline-block';
        revealButton.onclick = function () {
            revealStatus();
        };

        const allButtons = document.querySelectorAll('#button-container img');
        allButtons.forEach(button => button.classList.remove('pressed'));

        // Add the 'pressed' class to the clicked button
        const pressedButton = document.querySelector(`#button-container img[alt="${characterData.characterName}"]`);
        pressedButton.classList.add('pressed');
    }

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = `img/characters/profile/${characterData.imageFilename}`;
    newImage.alt = 'Displayed Image';

    // Update the content with HTML
    characterNameElement.textContent = characterData.characterName;
    detailsElement.innerHTML = characterData.details || '';
    descriptionElement.innerHTML = characterData.description || 'Description goes here.';
    statusElement.innerHTML = characterData.status || 'Status goes here.';

    // Clear previous content and append the new image
    imageContainer.innerHTML = '';
    imageContainer.appendChild(newImage);

    // Reset the status and button
    statusElement.style.display = 'none';
    revealButton.style.display = 'inline-block';
    revealButton.onclick = function () {
        revealStatus();
    };
}

// Function to reveal the status
function revealStatus() {
    const statusElement = document.getElementById('status');
    const revealButton = document.getElementById('reveal-button');

    statusElement.style.display = 'inline-block';
    revealButton.style.display = 'none';
}

// Function to decode the cipher text
function decodeCipher() {
    const cipherTextElement = document.getElementById('cipher-text');
    const decodedTextElement = document.getElementById('decoded-text');

    // Get the input values
    const cipherText = cipherTextElement.value;
    const shift = 15; // Set your desired shift value here, or you can get it from user input

    // Decode the cipher text using your caesarDecode function
    const decodedText = caesarDecode(cipherText, shift);

    // Display the result
    decodedTextElement.textContent = `Decoded Text: ${decodedText}`;
}

// Example Caesar cipher decoding function
function caesarDecode(text, shift) {
    return text.replace(/[a-zA-Z]/g, function (char) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const decodedChar = String.fromCharCode((char.charCodeAt(0) - offset - shift + 26) % 26 + offset);
        return isUpperCase ? decodedChar.toUpperCase() : decodedChar;
    });
}


//Function to initialize character buttons
function initializeButtons() {
    const buttonContainer = document.getElementById('button-container');

    characters.forEach(character => {
        // Create a container div for each button to control spacing
        const buttonWrapper = document.createElement('div');
        buttonWrapper.style.marginRight = '5px'; // Set the desired spacing

        // Create an image element for the button
        const buttonImage = document.createElement('img');
        buttonImage.src = `img/characters/thumbnails/${character.imageFilename}`;
        buttonImage.alt = character.characterName;

        buttonImage.addEventListener('click', () => {
            changeCharacter(character);
            // Optionally, you can prevent the button from being clicked again
            buttonImage.removeEventListener('click', arguments.callee);
        });

        // Append the image button to the container
        buttonContainer.appendChild(buttonImage);
    });

    // Set initial character when the page loads
    changeCharacter(characters[0]); // You can set a different initial character if needed
}

// Function to initialize the buttons
function initializeButtons() {
    const buttonContainer = document.getElementById('button-container');

    characters.forEach(character => {
        // Create an image element for the button
        const buttonImage = document.createElement('img');
        buttonImage.src = `img/characters/thumbnails/${character.imageFilename}`; // Adjust the path accordingly
        buttonImage.alt = character.characterName;

        // Add a click event listener to change the character when the button is clicked
        buttonImage.addEventListener('click', () => changeCharacter(character));

        // Append the image button to the container
        buttonContainer.appendChild(buttonImage);
    });

    // Set initial character when the page loads
    changeCharacter(characters[0]); // You can set a different initial character if needed
}

// Initialize the buttons when the page loads
document.addEventListener('DOMContentLoaded', initializeButtons);


// Example data for characters
const characters = [
    {
        characterName: 'Amulet',
        imageFilename: 'Amulet.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/amu_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/amu_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/amu_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Coin Amulet<p><strong>Description:</strong></p><p>Amulet relies on her own positive outlook to brave through misfortune. Despite this, she feels like an outcast due to her eccentricities, and attempts to isolate herself from anyone she doesn‘t trust. Due to this, she can become self-centered and stubborn. It is still unclear of what she meant by "magic", maybe it was just her intuition all along.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Badgey',
        imageFilename: 'Badgey.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/bad_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/bad_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/bad_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Circular Pin Badge</p><p><strong>Description:</strong></p><p>Badgey is kind and sincere, willing to listen to what others have to say. He doesn‘t brag often, and would be glad to quietly stay on the sidelines and help others. However, Badgey lacks in self esteem. While he can be somewhat inquisitive on other’s motives, he would rarely question them due to not believing in his own convictions enough.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Basket',
        imageFilename: 'Basket.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/bas_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/bas_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/bas_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Wastepaper Basket</p><p><strong>Description:</strong></p><p>A proud jokester, Basket tells dry jokes at the expense of everyone he meets. He is often unaware of how his words can hurt others, which could lead to disastrous results on his side. He rarely looks where he leaps. Therefore, the prideful Basket is often burdened from the consequences of his past mistakes that he deeply regrets.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Clove',
        imageFilename: 'Clove.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/clo_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/clo_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/clo_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Flower Bud of <em>S. Aromaticum</em></p><p><strong>Description:</strong></p><p>Clove speaks her mind without a filter. She may not be fully capable of understanding the true horrors of Abject Reality, but she is empathetic and can easily read the environment around her. Aware of her own diminutive size, but she appears confident about it. Perceptive and kind, she is often the unintentional mediator between her friends.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Foamy',
        imageFilename: 'Foamy.png',
        details:
            ``,
        description: '<p><strong>Object type:</strong> Styrofoam Block</p><p><strong>Description:</strong></p><p>Styrofoam is sorry for what he had done.</p><p>As I rightfully should.</p>',
        status: '<strong>Status:</strong> Wxsstc'
    },
    {
        characterName: 'Jeans',
        imageFilename: 'Jeans.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/jea_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/jea_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/jea_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Denim Jeans</p><p><strong>Description:</strong></p><p>Jeans is notably tall and the most athletic. She rushes into action, without too much hesitation. To everyone else, she appears infallible. Kind, yet fiercely protective against the dangers, she is empathetic and encourages everyone to fight even when everyone, including herself, are at their lowest point.</p>',
        status: '<strong>Status:</strong> Deceased'
    },
    {
        characterName: 'Pinky',
        imageFilename: 'Pinky.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/pin_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/pin_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/pin_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Acrylic Fingernail</p><p><strong>Description:</strong></p><p>Pinky is hot headed, and has violent tendencies. She does not back down when she’s up for a fight and getting her way, even if she’s worn out. She’s the most aggressive when she’s stressed. She interacts a lot with Swabs and has a soft spot for her because of how calm she is. She sees Swabs as her co-leader and the only person who could talk to those that she doesn’t know how to get along with.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Silica',
        imageFilename: 'Silica.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/sil_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/sil_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/sil_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Silica Gel Packet</p><p><strong>Description:</strong></p><p>Silica is an unintentional oddball and is always naively curious about everything and everyone. He is skittish in new environments, but once he had built some of his confidence, Silica is bold and barely shows any fear in front of danger. He can be fiercely loyal to anyone he chooses to protect. He is also allergic to consuming water, but not snow.<p>',
        status: '<strong>Status:</strong> Alive?'
    },
    {
        characterName: 'Squiggly',
        imageFilename: 'Squiggly.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/squ_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/squ_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/squ_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> S Shaped Block</p><p><strong>Description:</strong></p><p>Squiggly is the older twin, but he is more anxious than his younger brother, Z. His other name is known as ‘Rhodes’. Without his brother, he feels that he became a half of a whole. He tries his best to care about the safety of his friends and is confident about questioning the ambiguous nature of Abject Reality, even if he appears paranoid about everything wrong that could happen.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Swabs',
        imageFilename: 'Swabs.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/swa_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/swa_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/swa_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Cotton Bud</p><p><strong>Description:</strong></p><p>Swabs is calm and collected and gets along with almost everyone fairly well as a pacifist. She dislikes people fighting with each other and tries her best to prevent them. She is curious about how Abject Reality works, and would be the one to seek information about it. She bottles up her own negative emotions, which leads to mild signs of aggression in her actions.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Wet Wipes',
        imageFilename: 'Wipes.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/wip_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/wip_strwill.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/wip_strwill.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Wet Tissues</p><p><strong>Description:</strong></p><p>Wet Wipes is serious and gloomy. A true wet blanket, she is in no mood for Basket’s jokes. She is often pessimistic about blind optimism due to her believing that she’s just going to be a hindrance to their hope. Her dour facade slips off when she is left with her own emotions to introspect on, due to her desiring companionship and approval, of all things.</p>',
        status: '<strong>Status:</strong> Deceased'
    },
    {
        characterName: 'Z/Zwiggly',
        imageFilename: 'Z.png',
        details:
            `
            <div class="attribute">
                <p><strong>Intellect:</strong></p>
                <img src="img/characters/biocircles/z_int.png" alt="Intellect">
            </div>
            <div class="attribute">
                <p><strong>Strength:<p></p></strong></p>
                <img src="img/characters/biocircles/z_str.png" alt="Strength">
            </div>
            <div class="attribute">
                <p><strong>Willpower:</strong></p>
                <img src="img/characters/biocircles/z_will.png" alt="Willpower">
            </div>
        `,
        description: '<p><strong>Object type:</strong> Z Shaped Block</p><p><strong>Description:</strong></p><p>Z is the younger brother of the twins. His direct confidence can easily gain trust from anyone. His cool exterior does not last very long, as in turmoil, he becomes easily frustrated by his own mistakes and the situation around him. His other name is known as ‘Cleveland’. Z wears sunglasses due to his photosensitivity, and hydrophobic from the fear of water entering his eyes.</p>',
        status: '<strong>Status:</strong> Alive'
    },
    {
        characterName: 'Snake Oil',
        imageFilename: 'Snake.png',
        details:
            ``,
        description: '<p><strong>Object type:</strong> <em>Snake Oil</em></p><p><strong>Description:</strong></p><p>Suspected to have seized the holographic and reality bending controls of Abject Reality, and has a sadistic and impersonable attitude.</p>',
        status: '<strong>Status:</strong> Jcstgvgdjcs'
    },
    {
        characterName: 'Mirror',
        imageFilename: 'Mirror.png',
        details:
            ``,
        description: '<p><strong>Object type:</strong> Framed Mirror</p><p><strong>Description:</strong></p><p>Mirror was loving and kind to everyone she meets. She always had a penchant of making everyone look the best they’ve ever been, which was why she was so fascinated by fashion and makeup. One moment, she was in the studio away from home, and the next day, she was gone. There have been several attempts for a full recovery, but none of them managed to bring her back to her old self.</p>',
        status: '<strong>Status:</strong> Deceased'
    },
    {
        characterName: 'The Bucket',
        imageFilename: 'TheBucket.png',
        details:
            ``,
        description: '<p><strong>Object type:</strong> <em>Vessel For Hundreds Of Eyes</em></p><p><strong>Description:</strong></p><p>Not much is known about this object, other than the fact that it appeared in Abject Reality and currently in the hands of someone else. This object is made up of hundreds of voices from an alternate dimension, and peculiarly, defies the laws of physics. Further testing is required.</p>',
        status: '<strong>Status:</strong> Fifteen Letters'
    },
];


