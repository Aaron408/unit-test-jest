const hash = require('../test/testindex').hash;

test("Verificar hash", () => {
    const message = "contraseña";
    const hashtest = hash(message);
    expect(hashtest).toEqual("edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5");
});