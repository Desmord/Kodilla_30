module.exports = (fullName) => {

  if (!fullName) return `Error`;
  if (typeof fullName !== `string`) return `Error`;

  const words = fullName.split(` `);

  if (words.length <= 1 || words.length > 2) return `Error`;

  const [firstName, lastName] = fullName.split(' ');

  if (!firstName || !lastName) return `Error`;

  let firstNameInProperFormat = words[0].toLocaleLowerCase();
  firstNameInProperFormat =
    firstNameInProperFormat.substring(0, 1).toUpperCase() +
    firstNameInProperFormat.substring(1, firstNameInProperFormat.length + 1)

  let lastNameInProperFormat = words[1].toLocaleLowerCase();
  lastNameInProperFormat =
    lastNameInProperFormat.substring(0, 1).toUpperCase() +
    lastNameInProperFormat.substring(1, lastNameInProperFormat.length + 1)

  return `${firstName} ${lastName}`
};
