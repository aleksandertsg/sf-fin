import UniqueNameGenerator from 'unique-names-generator'


const getName = () => UniqueNameGenerator.uniqueNamesGenerator({
  dictionaries: [UniqueNameGenerator.adjectives, UniqueNameGenerator.animals],
  separator: '_',
  length: 2
})

export { getName }
