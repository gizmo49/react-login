import SignIn from "./components/auth/SignIn/SignIn";
import { InfoProvider } from "./components/auth/SignIn/hooks/InfoContext";
import { PasswordRulesProvider } from "./components/auth/SignIn/hooks/PasswordRules";
import "./assest/scss/_index.scss";

function App() {
  return (
    <>
      <PasswordRulesProvider>
        <InfoProvider>
          <SignIn />
        </InfoProvider>
      </PasswordRulesProvider>
    </>
  );
}

export default App;
