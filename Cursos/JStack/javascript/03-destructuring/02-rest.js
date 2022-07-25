const user = {
  firstName: 'Luiz',
  lastName: 'Oliveira',
  full_name: 'Luiz Guilherme Silva de Oliveira',
  age: 22,
  instagram: '@lgoliveira1',
  skills: ['Front-end', 'JavaScript', 'React'],
};

// Rest (resto) operator
const { firstName, skills, ...restUser } = user;
const [primary, ...restSkills] = skills;


console.log(restSkills);
