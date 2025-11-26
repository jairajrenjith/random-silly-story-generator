const lastUsedIndices = {
    intros: -1,
    names: -1,
    places: -1,
    actions: -1,
    activities: -1,
    v1: -1,
    c1: -1,
    v2: -1,
    c2: -1,
    c3: -1
};

const storyTemplate = "%I %n %V1 %T1 %y %C1 %V2 %z. %T2 %w %C3";

const storyIntros = [
    "It was a dark and stormy night.",
    "A weird glow appeared on the horizon.",
    "The universe hiccuped, and the lights went out.",
    "Just before lunch, a disaster unfolded.",
    "The clock chimed thirteen, signaling that something was very wrong."
];

const defaultNames = [
    "Captain Cuddles (System Default)",
    "A grumpy gnome named Reginald",
    "Professor Pifflepop",
    "A sentient toaster",
    "The legendary Disco Sasquatch"
];

const insertV1 = [
    "suddenly",
    "quickly",
    "slowly",
    "joyfully",
    "menacingly"
];

const insertT1 = [
    "materialized near",
    "burst through the ceiling and landed at",
    "was seen skipping joyfully towards",
    "mysteriously dissolved and reformed at",
    "aggressively high-fived the air while charging into"
];

const insertY = [
    "the bottom of a giant teacup",
    "a hidden dimension inside a sock drawer",
    "the surface of Mars (wearing roller skates)",
    "the local cheese festival",
    "a haunted car wash"
];

const insertC1 = [
    "and decided to",
    "and was forced to",
    "before preparing to",
    "after realizing they needed to",
    "which led them to"
];

const insertV2 = [
    "immediately",
    "haphazardly",
    "with gusto",
    "reluctantly",
    "enthusiastically"
];

const insertZ = [
    "start juggling flaming marshmallows",
    "turn into a flock of very confused pigeons",
    "sing the national anthem backwards",
    "challenge a squirrel to a breakdancing battle",
    "declare themselves the supreme ruler of all rubber bands"
];

const insertT2 = [
    "Everyone was shocked, but then they just went back to their",
    "Chaos reigned, followed by a communal shrug towards their",
    "The authorities were called, but they only cared about the",
    "Nobody paid attention, as they were too busy with their",
    "A collective gasp was heard, before returning to their"
];

const insertW = [
    "puzzled knitting",
    "important napping",
    "intense competitive thumb-wrestling",
    "search for lost pet rocks",
    "attempts to communicate with houseplants"
];

const insertC3 = [
    "weirdness.",
    "mess.",
    "fiasco.",
    "situation.",
    "intruder."
];

const generateBtn = document.getElementById('generateBtn');
const storyOutput = document.getElementById('storyOutput');
const nameInput = document.getElementById('nameInput'); 

function randomValueFromArray(array, stateKey) {
  let random;
  const lastIndex = lastUsedIndices[stateKey];
  
  do {
    random = Math.floor(Math.random() * array.length);
  } while (random === lastIndex && array.length > 1);

  lastUsedIndices[stateKey] = random;
  
  return array[random];
}

function generateStory() {
    let newStory = storyTemplate;

    const introItem = randomValueFromArray(storyIntros, 'intros');
    
    let nameToUse = nameInput.value.trim();
    if (nameToUse === '') {
        nameToUse = randomValueFromArray(defaultNames, 'names'); 
    }
    
    const v1Item = randomValueFromArray(insertV1, 'v1');
    const t1Item = randomValueFromArray(insertT1, 't1');
    const yItem = randomValueFromArray(insertY, 'places');
    const c1Item = randomValueFromArray(insertC1, 'c1');
    const v2Item = randomValueFromArray(insertV2, 'v2');
    const zItem = randomValueFromArray(insertZ, 'actions');
    const t2Item = randomValueFromArray(insertT2, 't2');
    const wItem = randomValueFromArray(insertW, 'activities');
    const c3Item = randomValueFromArray(insertC3, 'c3');

    newStory = newStory.replace('%I', introItem);
    newStory = newStory.replace('%n', nameToUse);
    newStory = newStory.replace('%V1', v1Item);
    newStory = newStory.replace('%T1', t1Item);
    newStory = newStory.replace('%y', yItem);
    newStory = newStory.replace('%C1', c1Item);
    newStory = newStory.replace('%V2', v2Item);
    newStory = newStory.replace('%z', zItem);
    newStory = newStory.replace('%T2', t2Item);
    newStory = newStory.replace('%w', wItem);
    newStory = newStory.replace('%C3', c3Item);

    storyOutput.textContent = newStory;
    storyOutput.style.textTransform = 'none'; 
}

generateBtn.addEventListener('click', generateStory);