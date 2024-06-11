import logo from "../assets/images/logo.png";

export default function Nav() {
  return (
    <nav id="nav">
      <ul id="nav-ul">
        <li class="nav-li poppins-bold">
          <img class="nav-logo" src={logo} alt="Logo" />
        </li>
        <li class="nav-li poppins-bold">MODELS</li>
        <li class="nav-li poppins-bold">ABOUT</li>
        <li class="nav-li poppins-bold">CONTACT</li>
      </ul>
    </nav>
  );
}
