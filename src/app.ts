class App {
    static add(input: string) {
      let result = 0;

      const delimeters = new RegExp([",", "\n", "//", ";"].join('|'), 'g')

      input.split(delimeters).map((str) => {
        const number = Number(str.trim())
        if(number < 0) {
          throw new Error(`Negative numbers not allowed: ${number}`);
        }
        result = result + number;
      })

      return result;
    }
  }
  
module.exports = App;
  