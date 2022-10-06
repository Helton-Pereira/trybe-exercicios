const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

it('Testa se ao passar "gUGu" como paramêtro, retorna "GUGU"', (done) => {
    uppercase('gUGu', (str) => {
        try {
            expect(str).toBe('GUGU');
            done();
        } catch (error) {
            done(error);
        }
    });
});
