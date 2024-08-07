class MyClass {
    #privateMember;
  
    constructor(value) {
      this.#privateMember = value; 
    }
  
    getPrivateMember() {
      return this.#privateMember; 
  }
  
}
  const obj = new MyClass(10);
  console.log(obj.getPrivateMember()); 
  