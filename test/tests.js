const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
chai.use(chaiHttp);
chai.should();
const { server } = require("../src/server");
const ingredientsAction = require("../services/db/ingredients/ingredientsAction");

const app = server();

let oneIngredient = null;
let severalIngredients = null;
describe("Legend of Zelda API", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app).keepOpen();
    oneIngredient = {
      id: 10,
      item_name: "Rock Salt",
      type: "11",
      hearts: "0.00",
      effect: 1,
      potency: "1",
      duration: 3600,
      resale_value: 2
    };
    severalIngredients = [
      {
        id: 1,
        item_name: "Dinraal’s Scale",
        type: "3",
        hearts: "0.63",
        effect: 1,
        potency: "1",
        duration: 7200,
        resale_value: 1
      },
      {
        id: 2,
        item_name: "Naydra’s Scale",
        type: "3",
        hearts: "0.63",
        effect: 1,
        potency: "1",
        duration: 7200,
        resale_value: 1
      },
      {
        id: 3,
        item_name: "Dinraal’s Claw",
        type: "3",
        hearts: "1.00",
        effect: 1,
        potency: "1",
        duration: 14400,
        resale_value: 1
      }
    ];
  });
  afterEach(() => {
    request.close();
  });

  describe("Ingredients", () => {
    describe("GET /api/ingredients - return ingredients data", () => {
      it("should return one ingredients", async () => {
        // setup
        const fr = sinon.stub(ingredientsAction, "get").returns(
          new Promise((resolver, rejector) => {
            resolver([oneIngredient]);
          })
        );

        // exercise
        const res = await request.get("/api/ingredients/10");

        // assert
        res.should.be.json;
        res.body.should.deep.equal(oneIngredient);

        // teardown
        fr.restore();
      });

      it("should return all ingredients", async () => {
        // setup
        const fr = sinon.stub(ingredientsAction, "get").returns(
          new Promise((resolver, rejector) => {
            resolver(severalIngredients);
          })
        );

        // exercise
        const res = await request.get("/api/ingredients/");

        // assert
        res.should.be.json;
        res.body.should.deep.equal(severalIngredients);

        // teardown
        fr.restore();
      });
    });

    describe("POST /api/ingredients - return posted ingredient", () => {
      it("should return ingredients that was posted", async () => {
        // setup
        const fr = sinon.stub(ingredientsAction, "post").returns(
          new Promise((resolver, rejector) => {
            resolver(oneIngredient);
          })
        );

        // exercise
        const res = await request.get("/api/ingredients/10");

        // assert
        res.should.be.json;
        res.body.should.deep.equal(oneIngredient);

        // teardown
        fr.restore();
      });
    });

    describe("DELETE /api/ingredients - return posted ingredient", () => {
      it("should return deleted ingredient", async () => {
        // setup
        const fr = sinon.stub(ingredientsAction, "del").returns(
          new Promise((resolver, rejector) => {
            resolver("Item was deleted");
          })
        );

        // exercise
        const res = await request.delete("/api/ingredients/10");

        // assert
        res.text.should.equal("Item was deleted");

        // teardown
        fr.restore();
      });
    });

    describe("PATCH /api/ingredients - return posted ingredient", () => {
      it("should return patched ingredient", async () => {
        // setup
        const fr = sinon.stub(ingredientsAction, "patch").returns(
          new Promise((resolver, rejector) => {
            resolver(oneIngredient);
          })
        );

        // exercise
        const res = await request.patch("/api/ingredients/10");

        // assert
        res.body.should.deep.equal(oneIngredient);

        // teardown
        fr.restore();
      });
    });
  });
});
