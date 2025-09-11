import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state) => state.user.value.username);
  //const {} = useQuery(["pokeid"], () => {
  //fetch data here, const can get it as param
  //};

  return <h1>Homepage, {username}</h1>;
};

export default Home;

//useQuery can hold and handle data without states; refetch can update data with no states
