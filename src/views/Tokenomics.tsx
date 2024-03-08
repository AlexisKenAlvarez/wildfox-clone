import Container from "@/components/Container";
import Header from "@/components/Typography/Header";

const Tokenomics = () => {
  const token = [
    {
      label: "Lorem Ipsum",
      value: "10%",
    },

    {
      label: "Total Lorem Ipsum",
      value: "100+",
    },
    {
      label: "Community Lorem Ipsum",
      value: "100M",
    },
  ];

  return (
    <Container className="h-auto pb-28">
      <div className="mx-auto max-w-screen-2xl pt-24 text-center">
        <h1 className="text-2xl">TOKENOMICS</h1>
        <div className=" flex items-center justify-center md:gap-5 md:flex-row flex-col">
          <Header className="">LOREM</Header>
          <Header className="text-shadow !text-orange">IPSUM</Header>
        </div>
        <div className="relative mx-auto mt-5 max-w-prose">
          <p className="">
            Welcome to our Wild Fox Squad! Meet our collection of 10k unique
            Wild Foxes. Support and join our community, crazy adventures and
            fantastic prizes are waiting for you.
          </p>
        </div>

        <ul className="mt-20 flex w-full justify-center gap-5 max-w-screen-xl mx-auto md:flex-row flex-col">
          {token.map((item, index) => (
            <li className="w-full bg-cream border-2 rounded-lg py-8 border-black/10 " key={index}>
              <h1 className="font-primary text-5xl text-orange text-shadow">{item.value}</h1>
              <p className="">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Tokenomics;
