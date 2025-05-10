class App {
    static add(input: string) {
      let result = 0;

      const delimeters = new RegExp([",", "\n", "//", ";"].join('|'), 'g')

      const negatives: number[] = [];

      input.split(delimeters).map((str) => {
        const number = Number(str.trim())
        if(number < 0) {
          negatives.push(number);
        } else {
          result = result + number;
        }
      })

      if(negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives}`);
      }

      return result;
    }
  }
  
module.exports = App;
  