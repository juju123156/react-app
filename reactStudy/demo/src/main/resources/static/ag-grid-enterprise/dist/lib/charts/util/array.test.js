// ag-grid-enterprise v21.2.2
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = require("./array");
test('extent', function () {
    {
        var result = array_1.extent([3, 7, 1, 2, 9, -2]);
        expect(result[0]).toBe(-2);
        expect(result[1]).toBe(9);
    }
    {
        var result = array_1.extent([NaN, null, undefined]);
        expect(result[0]).toBe(undefined);
        expect(result[1]).toBe(undefined);
    }
    {
        var result = array_1.extent([]);
        expect(result[0]).toBe(undefined);
        expect(result[1]).toBe(undefined);
    }
    {
        var result = array_1.extent([5]);
        expect(result[0]).toBe(5);
        expect(result[1]).toBe(5);
    }
    {
        var result = array_1.extent([undefined, 4, 3, 7, null, {}, 1, 5]);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(7);
    }
    {
        var result = array_1.extent([new Date(), new Date('03/03/1970'), new Date('05/05/1985')]);
        expect(result[0].getFullYear()).toBe(1970);
        expect(result[1].getFullYear()).toBe(2019);
    }
    {
        var result = array_1.extent(['A']);
        expect(result[0]).toBe('A');
        expect(result[1]).toBe('A');
    }
    {
        var result = array_1.extent(['X', 'A', 'Y', 'Z', 'C', 'B']);
        expect(result[0]).toBe('A');
        expect(result[1]).toBe('Z');
    }
});
test('numericExtent', function () {
    {
        var result = array_1.numericExtent([3, 7, 1, 2, 9, -2]);
        expect(result[0]).toBe(-2);
        expect(result[1]).toBe(9);
    }
    {
        var result = array_1.numericExtent([NaN, null, undefined]);
        expect(result).toBe(undefined);
    }
    {
        var result = array_1.numericExtent([]);
        expect(result).toBe(undefined);
    }
    {
        var result = array_1.numericExtent([5]);
        expect(result[0]).toBe(5);
        expect(result[1]).toBe(5);
    }
    {
        var result = array_1.numericExtent([undefined, 4, 3, 7, null, {}, 1, 5]);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(7);
    }
});
