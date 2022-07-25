const user = {
  firstName: 'Luiz',
  lastName: 'Oliveira',
  age: 22,
  instagram: '@lgoliveira1',
  skills: ['Front-end', 'JavaScript', 'React'],
  active: false
};

// Spread (espalhar) operator
// user.active = true;
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true

};


console.log({user});
console.log({updatedUser});

