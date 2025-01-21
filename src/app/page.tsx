export default async function Home() {
  // const data = await fetch('https://api.example.com/data', {
  //   cache: 'force-cache', // Garante que os dados são estáticos
  // }).then((res) => res.json());

  return (
    <main>
      <h1>Bem-vindo!</h1>
      {/* <p>Dados estáticos: {JSON.stringify(data)}</p> */}
    </main>
  );
}
