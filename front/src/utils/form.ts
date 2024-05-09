export const isValidString = (value: string) => {
    return value !== '' && value !== null && value !== undefined;
  };

  export const isValidAge = (value: string) => {
    const age = parseInt(value)
    console.log(value);
    return age > 0;
  };