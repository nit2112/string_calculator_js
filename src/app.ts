class App {
    static add(input: string) {
      let result = 0;

      const delimeters = new RegExp([",", "\n", "//", ";"].join('|'), 'g')

      input.split(delimeters).map((str) => {
        const number = Number(str.trim())
        result = result + number;
      })

      return result;
    }
  }
  
module.exports = App;
  