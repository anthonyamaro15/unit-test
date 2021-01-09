module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
   const newValue = {...item};

  if(newValue.enhancement !== 20) {
     newValue.enhancement += 1;
  }
  return newValue;
}

function fail(item) {
  const newValues = {...item};

  if(newValues.enhancement < 15) {
     newValues.durability -= 5;
  }
  if(newValues.enhancement >= 15) {
     newValues.durability -= 10;
  }
  if(newValues.enhancement > 16) {
     newValues.enhancement -= 1;
  }
  return newValues;
}

function repair(item) {
   item.durability = 100;
   return item;
}

function get(item) {
  const newValues = {...item};

  if(newValues.enhancement > 0) {
     newValues.name = `[+${newValues.enhancement}] Iron Sword`
  }
  return newValues;
}
