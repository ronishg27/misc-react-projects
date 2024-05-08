import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function Github() {
  // const [data, setData] = useState([]);
  // let { username } = useParams();
  // username = username ?? 'ronishg27';
  // console.log(username);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/ronishg27`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
      </div>
      <img
        src={data.avatar_url}
        alt={`Github avatar url for ${data.login}`}
        className="w-[300px]"
      />
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ronishg27 ');

  return response.json();
};
