import Preference from "./Preference";

export default class NumberPreference extends Preference {
  constructor(name, defaultValue) {
    super(name, defaultValue, Number);
  }
  
  _parse(value) {
    return value === null ? null : +value;
  }
}