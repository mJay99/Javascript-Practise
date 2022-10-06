var Mortgage = (function (){

  
  let status = "In Progress";
  
  const min_salary = 20000;
  const min_age = 21;
  const min_year_period = 5;
  const min_credit_score = 750;
  const NO_OF_DAYS = 3000

  function validSalary(salary){
     return salary >= min_salary  
  }

  function validAge(age){
    return age >= min_age  
 }

 function validPeriod(period){
  return period >= min_year_period  
}

function validCreditScore(credit_score){
    return  credit_score >= min_credit_score
}

  var internal_loan_process = function (args){
    console.log(args)
    if(args && Object.values(args).length === 5 ){
      setTimeout(()=>{
         return validSalary(args.SALARY) && validAge(args.AGE) && validPeriod(args.PERIOD)  && validCreditScore(args.CREDIT_SCORE) ?  "Approved !!" : "Not Approved!!"

      },NO_OF_DAYS)
    }
    else{
      return "Invalid number of arguments"
    }
    // return status
    
  }

  // AMOUNT,SALARY,AGE,PERIOD,CREDIT_SCORE
  return {
     applyForLoan : (USER_PROFILE) => { internal_loan_process(USER_PROFILE) 
     }
  }

})()

// console.log(Mortgage.applyForLoan({
//   'AMOUNT':100000,
//   'SALARY':21000,
//   'AGE':21,
//   'PERIOD':7
// }))


console.log(Mortgage.applyForLoan({
  'AMOUNT':100000,
  'SALARY':21000,
  'AGE':21,
  'PERIOD':7,
  'CREDIT_SCORE':800
}))