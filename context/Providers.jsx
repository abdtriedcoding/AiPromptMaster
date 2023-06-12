import UserAuthProvider from "./userAuthContext";

export default function Providers({ children }) {
    return (
        <UserAuthProvider>
                {children}
        </UserAuthProvider>
    )
}