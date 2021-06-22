export const updateObjectInArray = (array, objPropName, itemId, newObjProps) => {
 return array.map((u) => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObjProps};
    }
    return u;
  });
};
