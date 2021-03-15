describe("Maior e Menor", function() {

    it("deve entender array com um elemento", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([9]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(9);
});

});

