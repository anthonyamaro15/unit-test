const { get, fail, repair, success } = require("./enhancer");

describe('player results', () => {
   it("repairs durability", () => {
      expect(repair({
         name: "Player One",
         durability: 50,
         enhancement: 10
      })).toEqual({
         name: "Player One",
         durability: 100,
         enhancement: 10
      });
   });

   it("success", () => {
      expect(success({
         name: "Player One",
         durability: 50,
         enhancement: 10
      })).toEqual({
         name: "Player One",
         durability: 50,
         enhancement: 11
      });
   });

   it("fails if enhancenment less than 15", () => {
      expect(fail({
         name: "Player One",
         durability: 50,
         enhancement: 14
      })).toEqual({
         name: "Player One",
         durability: 45,
         enhancement: 14
      })
   })

   it("fails if enhancenment is greater or equal to 15", () => {
      expect(fail({
         name: "Player One",
         durability: 50,
         enhancement: 15
      })).toEqual({
         name: "Player One",
         durability: 40,
         enhancement: 15
      });
   });

   it("fails if enhancenment is greater than 16", () => {
      expect(fail({
         name: "Player One",
         durability: 50,
         enhancement: 19
      })).toEqual({
         name: "Player One",
         durability: 40,
         enhancement: 18
      });
   });

   it("overwrittes name method", () => {
      expect(get({
         name: "Player One",
         durability: 40,
         enhancement: 18
      })).toEqual({
         name: "[+18] Iron Sword",
         durability: 40,
         enhancement: 18
      });
   });

   it("leaves name as it is", () => {
      expect(get({
         name: "Player One",
         durability: 40,
         enhancement: 0
      })).toEqual({
         name: "Player One",
         durability: 40,
         enhancement: 0
      });
   });
})
