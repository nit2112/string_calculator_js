class App {
    static add(input: string) {
      let result = 0;
      
      input.split(',').map((str) => {
        const number = Number(str.trim())
        result = result + number;
      })

      return result;
    }
  }
  
module.exports = App;
  