const LS_Get_Data = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    alert(err?.message);
  }
};

const LS_Set_Data = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value), LS_Get_Data);
  } catch (err) {
    alert(err?.message);
  }
};
// console.log(LS_Set_Data(key, value), );
export { LS_Get_Data, LS_Set_Data };
