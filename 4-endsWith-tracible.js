var baseClamp = require('./node_modules/lodash/_baseClamp'),
    baseToString = require('./node_modules/lodash/_baseToString'),
    toInteger = require('./node_modules/lodash/toInteger'),
    toString = require('./node_modules/lodash/toString');

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position, trace) {
    let result;
    if (trace) {
        result = {};
        result.args = {
            string, 
            target, 
            position
        }
    };

    string = toString(string);
    target = baseToString(target);


    position = set_position(string, position);

    if (trace){
        result.position = position;
    }
    
    let final_result = check_ends_with(string, target, position);
   
    if (trace){
        result.result = final_result;
    } else {
        result = final_result;
    }

    return result;
}

console.log(endsWith('abcdef', 'cd', 4, true));
 
module.exports = endsWith;


function set_position (string, number) {
    let result;
    var length = string.length;

    if(number === undefined){
        number = length;
    } else {
        const step_1 = toInteger(number);
        number = baseClamp(step_1, 0, length);
    };
    result = number;
    return result;
}; 
let set_position_test_cases = [
    {input: ["abc", 2], expected: 2, message: "['abc', 3] -> { number: 2}"}
];


function check_ends_with(string, target, position){
    let result;
        const step_1 = position;
        const step_2 = (position -= target.length);
        const step_3 = step_2 >= 0;
        const step_4 = string.slice(step_2,step_1);
        const step_5 = (step_3 && step_4);
        const step_6 = step_5 == target;
    result = step_6;
    return result;
};

let check_ends_with_test_cases = [
    {input: ["abc", "c", 3], expected: true, message: "['abc','c', 3] -> { boolean: true}"}
];

