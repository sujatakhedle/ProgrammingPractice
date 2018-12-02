/* Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.
if visit = 0, -  Welcome! Is this your first time? */


var customerData = {
  'Joe': {
    visits: 1 // Welcome back,  firstName  We're glad you liked us the first time!
  },
  'Carol': {
    visits: 2 // Welcome back, ' + firstName! So glad to see you again!
  },
  'Howard': {
    visits: 3 // Welcome back,  firstName! So glad to see you again!
  },
  'Carrie': {
    visits: 4 // Welcome back,  firstName! So glad to see you again!
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  // your code here
  switch(true) {
    case (customerData[firstName] === undefined): 
      greeting = 'Welcome! Is this your first time?';
     break;

    case (customerData[firstName].visits === 1): 
      greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
    break;
    
    case (customerData[firstName].visits > 1): 
      greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
    break;
  }
  return greeting;
}


//OR



function greetCustomer(firstName) {
  var greeting = '';

  if (customerData[firstName] === undefined) {
    greeting = 'Welcome! Is this your first time?';
  }
  if (customerData[firstName] && customerData[firstName].visits === 1) {
    greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  }
  if (customerData[firstName] && customerData[firstName].visits > 1) {
    greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
  }
  return greeting;
}
greetCustomer('Joe');
greetCustomer('Carol');
greetCustomer('Howard');
greetCustomer('Dolly');
greetCustomer('Carrie');
