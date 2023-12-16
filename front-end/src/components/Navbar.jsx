import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  
  const avatarURL = isAuthenticated ? user.avatarURL : null;

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg items-center">
      <h1 className="text-2xl font-bold">
        
        <Link to={isAuthenticated ? "/posts" : "/"}>Post Manager</Link>
      </h1>
      <ul className="flex gap-x-2 items-center">
        
        {isAuthenticated ? (
          <>
            <li>
              {avatarURL && (
                <img
                  src={avatarURL}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
            </li>
            <li>Bienvenido {user.username}</li>
            <li>
              <ButtonLink to="/add-post">Agregar Post</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/posts">Todos los Post</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/">Home</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/profile">Perfil</ButtonLink>
            </li>
            <li>
              
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
              
            </li>
          </>
        ) : (
          
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
