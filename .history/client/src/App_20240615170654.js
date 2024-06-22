import Messanger from "./components/Messanger";
import AccountProvider from "./components/Context/AccountProvider"

//import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

 // const clientId='323892853590-jsb3e1ldvf31m4cav69lhrrh8h5ibb0n.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
     <Messanger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
