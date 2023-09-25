class Person {
    constructor(name, age, address){
       this.name = name;
       this.age = age;
       this.address = address;
    } 
        // Getter methods
        get name() {
          return this._name;
        }
      
        get age() {
          return this._age;
        }
      
        get address() {
          return this._address;
        }
      
        // Setter methods
        set name(newName) {
          this._name = newName;
        }
      
        set age(newAge) {
            this._age = newAge
        }
      
        set address(newAddress) {
          this._address = newAddress;
        }
      }
      
      // Create instances of the Person class
      const person1 = new Person("John", 30, "Amawbia");
      const person2 = new Person("Chris", 25, "Nibo");
      
      // Get and set values using getter and setter methods
      console.log(person1.name); // "John "
      console.log(person1.age); // 30
      console.log(person1.address); // "Amawbia"
      
      person1.name = "Johnny";
      person1.age = 35;
      person1.address = "Awka";
      
      console.log(person1.name); // "Johnny"
      console.log(person1.age); // 35
      console.log(person1.address); // "Awka"
      
      console.log(person2.name); // "Chris"
      console.log(person2.age); // 25
      console.log(person2.address); // "Nibo"
      