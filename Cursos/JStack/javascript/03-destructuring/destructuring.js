const user = {
  firstName: 'Luiz',
  lastName: 'Oliveira',
  full_name: 'Luiz Guilherme Silva de Oliveira',
  age: 22,
  instagram: '@lgoliveira1',
  skills: ['Front-end', 'JavaScript', 'React'],
};

// Destructuring
const { firstName, lastName, skills, full_name: fullName } = user;
const [primary, secondary, tertiary, quaternary] = skills;


console.log(fullName);
