class App {
    static add(input: string) {
      let result = 0;
      if (input === "") {
        result = 0;
      } else if(input === "1") {
        result = 1;
      }
      return result;
    }
  }
  
module.exports = App;
  