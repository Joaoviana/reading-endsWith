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

    let ret_val;
    endsWith: {
        args.string = dep.toString(args.string);
        args.target = dep.baseToString(args.target);

        var length = args.string.length;

        if(args.position === undefined){
            args.position = length;
        } else {
            const step_1 = dep.toInteger(args.position);
            args.position  = dep.baseClamp(step_1, 0, length);
        };

        var end = args.position;

        args.position = args.position - args.target.length;
        
        {
            const step_1 = args.position >= 0;
            const step_2 = args.string.slice(args.position,end);
            const step_3 = step_1&& step_2;
            const step_4 = step_3 == args.target;
            ret_val = step_4;
        }; 
        
        break endsWith;
    };
};

