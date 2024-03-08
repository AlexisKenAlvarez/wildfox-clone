import Button from "@/components/Button";
import Container from "@/components/Container";

const Hero = () => {
  const socials = [
    {
      label: "Twitter",
      link: "",
    },
    {
      label: "Telegram",
      link: "",
    },
    {
      label: "Discord",
      link: "",
    },
  ];
  return (
    <Container className="min-h-screen w-full bg-bg">
      <div className="mx-auto max-w-screen-2xl pt-32 text-center 2xl:pt-48">
        <div className="text-5xl sm:text-7xl 2xl:text-9xl">
          <h1 className="font-primary text-shadow text-orange">WILDFOX</h1>
          <h1 className="font-primary text-shadow text-white">SQUAD</h1>
        </div>

        <Button className=" px-2 py-2 mt-5 text-sm text-black mx-auto sm:hidden block ">
          Trade $OMEGA
        </Button>
      </div>
      <p className="absolute bottom-5 left-5 hidden max-w-sm font-bold sm:block">
        A NEW WAVE OFCOLLECTIBLES IS ABOUT TO HIT THE BLOCKCHAIN.
      </p>
      <img
        src="/hero.webp"
        alt="Hero"
        className="absolute bottom-0 left-0 right-0 mx-auto w-[28rem]"
      />
      <ul className="absolute bottom-5 right-5 hidden space-y-2 text-xl font-bold sm:block">
        {socials.map((items) => (
          <li key={items.label}>
            <button>{items.label}</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Hero;
