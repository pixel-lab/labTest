export const actionTypes = {
    CURRENT_BALANCE: "CURRENT_BALANCE"
}

export const currentBalance = (balance) => {
    debugger;
    return {
        type: actionTypes.CURRENT_BALANCE,
        currentBalance: balance        
      }
  };