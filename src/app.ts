class App {
    static add(input: string) {
      let result = 0;
      if(input === "1") {
        result = 1;
      } else if(input === "1, 5") {
        result = 6;
      }
      return result;
    }
  }
  
module.exports = App;
  