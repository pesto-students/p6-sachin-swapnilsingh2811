



// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
	
	
	
	let stack = [];

	
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			
			
			stack.push(x);
			continue;
		}


		if (stack.length == 0|| stack.length<expr/2)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	
    
    return stack.length == 0;
    
}


let expr1 = "{[([])]}";
let expr2= "{[()]";



	console.log(areBracketsBalanced(expr1));
	console.log(areBracketsBalanced(expr2));



