export default class Tools {
  static isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  }
  static removeElementOfArray(arr, element) {
    let list = arr
    list.splice(list.findIndex(item => item.id === element.id), 1);
    return list
  }
}