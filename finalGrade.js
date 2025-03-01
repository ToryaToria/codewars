function finalGrade (exam, projects) {
  let grade;
    
    if ( exam > 90 || projects > 10) {
      grade = 100;
    } else if ( exam > 75 && projects >= 5) {
      grade = 90;
    } else if ( exam > 50 && projects >= 2) {
      grade = 75;
    } else {
          grade = 0;
  
    }
   return     grade ;
  
  }

  // console.log(finalGrade(0, 2))
  


  function typeOfSum(a, b) {
    console.log(`${a}+${b}`)

    console.log(a+b)
    console.log(typeof(a+b))
    console.log('-------------------');
    console.log('')


    return typeof(a+b);
    }

    typeOfSum(1, '1')
    typeOfSum('1', 1)

    typeOfSum(1, true)
    typeOfSum(true, 1)
    typeOfSum('1', true)
    typeOfSum(true, '1')
    typeOfSum(true, true)

    typeOfSum(1, null)
    typeOfSum(null, 1)
    typeOfSum('1', null)
    typeOfSum(null, '1')
    typeOfSum(true, null)
    typeOfSum(null, true)
    typeOfSum(null, null)

    typeOfSum(1, undefined)
    typeOfSum(undefined, 1)
    typeOfSum('1', undefined)
    typeOfSum(undefined, '1')
    typeOfSum(undefined, true)
    typeOfSum(true, undefined)
    typeOfSum(undefined, undefined)

    