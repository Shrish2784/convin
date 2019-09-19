class AuthService {
    static loginUser = token => localStorage.setItem('token', token);

    static signOut = () => localStorage.clear();
}

export default AuthService;