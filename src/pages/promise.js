import useSWR from "swr";
const url = "https://jsonplaceholder.typicode.com/users";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  //   setTimeout(() => {
  if (isLoading) {
    return <p>...Loading</p>;
  }
  //   }, 2000);
  if (error) {
    return <p>...oh sorry error</p>;
  }
  return data.map((user) => {
    return <User key={user.id} name={user.name} email={user.email} />;
  });
};

const User = (props) => {
  const { name, email } = props;
  return (
    <div className="flex  ">
      <p className="w-64">name: {name}</p>
      <p>e-mail: {email}</p>
    </div>
  );
};

export default Page;
