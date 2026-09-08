import LoginScreen from "./LoginScreen";
import {AuthProvider} from "./AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <LoginScreen/>
        </AuthProvider>
    );
}
