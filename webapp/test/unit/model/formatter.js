sap.ui.define([

    "stk/starterkit/model/formatter"
], function(formatter){
    "use-strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions){

        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formatted:" + sName);
    }

    QUnit.test("Should format 'Grzegorz Malczewski' to 'G. Malczewski'", function (assert){
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Jan",
            lastName: "Kowalski-Nowak",
            expected: "J. Kowalski"
        });

    });

    QUnit.test("Should format 'Wojciech Pietrzak' to 'W. Pietrzak'", function(assert){
        nameFormattingTest.call(this,{
            assert: assert,
            firstName: "Wojciech",
            lastName: "Pietrzak- Nowak",
            expected: "W. Pietrzak"
        });
    });
});