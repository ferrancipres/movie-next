import { getMovieByUser } from "@/actions/movie.actions";
import { setUser } from "@/actions/user.actions";
import { CardForProfile, DataBaseMovie } from "@/components/Card/Card";
import ModalButton from "@/components/Modal Button/ModalButton";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";

interface User {
  name: string;
  email: string;
  id: string;
  movies: DataBaseMovie[];
  picture?: string;
}

export default withPageAuthRequired(async () => {
  const session = await getSession();

  if (session && session.user) {
    const { name, email } = session.user;
    const user: User = (await setUser(name, email)) as User;
    const dataBaseUser: any = await getMovieByUser(user.email);

    return (
      <>
        <h3>user Profile</h3>
        <h4>Profile</h4>
        <p>{user.name}</p>
        <p>{email}</p>
        <div>
          <h4>Movies</h4>
          {dataBaseUser.movies.map((movie: DataBaseMovie) => (
            <CardForProfile key={movie.id} data={movie} />
          ))}
        </div>
        <ModalButton user={user} />
      </>
    );
  }
  return <p>Error</p>;
});
