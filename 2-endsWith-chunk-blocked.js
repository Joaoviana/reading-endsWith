let check_ends_with;
{
    let args = {
        string: undefined,
        target: undefined,
        position: undefined
    };

    let dep = {
        baseClamp: {
            args: {
                number: "The number to clamp",
                lower: "The lower bound",
                upper: "the upper bound"
            },
            returns: {
                clamped_number: "returns the clamped number"
            },
            behavior: "Clamps number within the inclusive lower and upper bounds."
        },
        baseToString: {
            args: {
                value: "The value to process"
            },
            returns: {
                string: "Returns the string"
            },
            behavior: " The base implementation of `_.toString` which doesn't convert nullish values to empty strings."
        },
        toInteger: {
			args: {
				anything: "the value to convert"
			},
			returns: {
				number: "the converted integer"
			},
			behavior: "Converts `value` to an integer."
		},
		toString: {
			args: {
				anything: "the value to convert"
			},
			returns: {
				string: "the converted string"
			},
			behavior: "Converts `value` to a string. An empty string is returned for `null` and `undefined` values. The sign of `-0` is preserved."
		}
    };
    let closure = {
        set_position: function (string, number) {
            let result;
            var length = string.length;

            if(number === undefined){
                number = length;
            } else {
                const step_1 = dep.toInteger(number);
                number = dep.baseClamp(step_1, 0, length);
            };
            result = number;
            return result;
        }, 
        check_ends_with: function(string, position, target){
            let result;
            const step_1 = args.position;
            const step_2 = position -= target.length;
            const step_3 = step_2 >= 0;
            const step_4 = string.slice(position,step_1+string.length);
            const step_5 = step_3&& step_4;
            const step_6 = step_5 == target;
            result = step_6;
            return result;
        }
    };

    let ret_val;
    endsWith: {
        args.string = dep.toString(args.string);
        args.target = dep.baseToString(args.target);

        args.position = set_position(args.string, args.position);

        ret_val = check_ends_with(args.string, args.position, args.target);
        
        break endsWith;
    };
};
