console.clear();

//people dropping off a form(Action Creator)
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amount
    }
  };
};

//Reducers(Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amount;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (oldListOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...oldListOfPolicies, action.payload];
  } else if (action.type === "DELETE_POLICY") {
    return oldListOfPolicies.filter(
      policy => policy.name !== action.payload.name
    );
  }
  return oldListOfPolicies;
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});
const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 40));
store.dispatch(createPolicy("Alexa", 10));

store.dispatch(createClaim("Alex", 120));

store.dispatch(deletePolicy("Alexa"));
console.log(store.getState());
