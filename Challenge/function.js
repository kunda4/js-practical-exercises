// Guess the output of the followings codes

function func([x = 1, y = 2] = []){
    console.log(x +y)
}

func([], [2,3])

// the output of the following codes
//3

// it will use the default parameter x=1, y=2 because by calling function they passed two parameter while function accept one parameter