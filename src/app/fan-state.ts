/**
 * This class encapsulates state of a ceiling fan such as its direction and speed
 * @author Atif Majeed
 */
export class FanState {
  id = 1;
  constructor(public speed:number = 0, public reverse = false) {
  }

  public get state() {
    return this.speed == 0 ? "Stopped" : "Running";
  }
}
