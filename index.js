require ('datejs')

function combineUsers( ...args) {
  const combinedObjects = {
  users : []
}

args.array.forEach(element => {
  combinedObjects.users.push (...arr)
});

combinedObject.merge_date = new Date().toString('M/d/yyyy');
  return combinedObject;
}

const result = combineUsers(
  ['alice', 'bob'],
  ['charlie'],
  ['dave', 'eve']
);



















module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};