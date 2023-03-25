import React, {useReducer} from 'react';
import reducer from './reducer';
const initialState = {
  fname:'',
  sname:'',
  email:'',
  password:'',
  phone:'',
  age:18
}

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInput = ({target:{name, value}})=>{
    const action = {name, value};
    dispatch(action);
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="text" name="fname" value={state.fname} onChange={handleInput} placeholder="fname"/>
        <input type="text" name="sname" value={state.sname} onChange={handleInput} placeholder="sname"/>
        <input type="email" name="email" value={state.email} onChange={handleInput} placeholder="email"/>
        <input type="password" name="password" value={state.password} onChange={handleInput} placeholder="password"/>
        <input type="text" name="phone" value={state.phone} onChange={handleInput} placeholder="phone"/>
        <input type="number" name="age" value={state.age} onChange={handleInput} placeholder="age"/>
        <input type="submit" value="send"/>
      </form>
    </div>
  );
}

export default SignUpForm;