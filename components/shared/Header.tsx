import Wrapper from "@/components/shared/Wrapper";

function Header() {
  return (
    <header className="bg-black fixed top-0 w-full z-50 py-5">
      <Wrapper className="mx-auto">
        <div className="text-white">logo</div>
      </Wrapper>
    </header>
  );
}

export default Header;
