import { useSelector } from "react-redux";

import { IUser } from "../../models/user";
import "./test.component.scss";

function Test() {
  const user: IUser = useSelector((state: any) => state.user.value);

  return (
    <div>
      <h1>Test Page</h1>
      <p>Firstname: {user.firstName}</p>
      <p>LastName: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Test Category: {user.testCategory}</p>
      <p>Test Difficulty: {user.testDifficulty}</p>
    </div>
  );
}

export default Test;
