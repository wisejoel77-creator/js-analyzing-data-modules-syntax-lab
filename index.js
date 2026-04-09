const dateJS = require ('datejs')

function combineUsers( ...args) {
  const combinedObjects = {
  users : []
}

args.forEach(arr => {
  combinedObjects.users.push (...arr)
});

combinedObjects.merge_date = new Date().toString('M/d/yyyy');
  return combinedObjects;
}

const result = combineUsers(
  ['alice', 'bob'],
  ['charlie'],
  ['dave', 'eve']
);



















module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};