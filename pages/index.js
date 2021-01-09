import axios from 'axios';

export default function Home({ data }) {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {data.map((movie) => (
          <li>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await axios.get(
    'https://whispering-garden-55921.herokuapp.com/movies'
  );
  return {
    props: {
      data: res.data,
    }, // will be passed to the page component as props
  };
}
