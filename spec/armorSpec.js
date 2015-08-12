/**
 * Created by jsolano on 8/5/2015.
 */

describe("A suite.", function() {
    it("contains spec with an expectation", function(){
        var a = true;
        expect(testJasmine(2)).not.toBe(5);
    });

    it("The 'toBe' matcher compares with ===", function() {
        var a = 12;
        var b = a;

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });

    it("Should work for objects", function() {
        var foo = {
            a: 12,
            b: 24
        };
        var bar = {
            a: 12,
            b: 24
        };
        expect(foo).toEqual(bar);
    });

    it("The 'toMatch' matcher is for regular expressions", function() {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against 'undefined'", function() {
        var a = {
            foo: "foo"
        }

        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });

    it("The 'toBeUnDefined' matcher compares against 'undefined'", function(){
        var a = {
            foo: "foo"
        }

        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });
});

