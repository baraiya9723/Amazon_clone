export const userdetails = (user) => {
    return {
      type: 'USERDETAILS',
      payload:user
    };
  };
 
  export const userlogout = () => {
    return {
      type: 'USERLOGOUT',
    };
  };  
  
