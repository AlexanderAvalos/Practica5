const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);

test("Marcar Entregado", async () => {
  await api
    .put("/cliente/marcarEntregado/1")
    .set({
      "Content-Type": "application/json",
    })
    .send({})
    .expect(200);
});

module.exports = {
  // Otras configuraciones de Jest...
  coverageReporters: ["json", "lcov", "cobertura"],
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["../__test__/cliente.test.js"],
  coverageThreshold: {
    global: {
      lines: 80, // Porcentaje mínimo de cobertura de líneas requerido
    },
  },
};
