export default function Footer() {
  return (
    <footer className="flex absolute bottom-1 w-full h-9 border-t-2">
      <a
        href="https://goerli.etherscan.io/address/0xc60c82015950cEA90063b5Bfe4c5AEB0c05A70eA#code"
        className="border-b-2 mt-2 border-blue-500"
      >
        Click to View on Goerli Etherscan
      </a>
      <div className="ml-auto py-34 px-40">© Developed By:</div>
      <a className=" mr-auto py-34 px-40">Md Sumon</a>
    </footer>
  );
}
