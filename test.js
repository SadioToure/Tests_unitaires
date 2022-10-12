function somme(nombre1, nombre2) {
    return nombre1 + nombre2 ;
}

var assert = require('assert');
  describe('#indexOf()', function () {
    it('Le résultat est correct, il vaut bien 7.', function () {
      assert.equal(somme(3, 4), 7, 'erreur, le resultat est faux');
    });
});
