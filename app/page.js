import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <h1>This is the Homepage</h1>
      <FontAwesomeIcon
          icon={faHome}
          style={{ color: 'white', fontSize: '5rem' }} />
    </>
  );
}
