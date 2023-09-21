export const updateObjectInArray = (items: Array<any>, objectPropName: string,
                                    itemId: string, newObjProps: { followed: boolean}) => {
  return items.map(u => {
    if(u[objectPropName] === itemId){
      return {...u, ...newObjProps}
    }
    return u;
  })
}