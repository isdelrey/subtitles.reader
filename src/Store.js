import { observable, computed, action, extendObservable } from 'mobx';

export default class {
  @observable values = {};

  constructor(store, initialState) {
    this.store = store;
  }
  @action set(key, value) {
    this.values[key] = value;
  }
  @computed get contents() {
    return this.values;
  }
  @action push(key, value) {
    if(!this.values.hasOwnProperty(key))
      this.values[key] = [];
    this.values[key].push(value);
  }
}
