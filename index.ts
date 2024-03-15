let phoneNumber : string; // add type declaration to inform TypeScript that it should be a string

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323'; 
}

let answerToLife;
answerToLife = 42;
answerToLife = 'forty two';

// this code will compile w/o any issues, since answerToLife is typed as any
