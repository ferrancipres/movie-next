import { getMovieByUser } from "@/lib/movie.actions";
import { setUser } from "@/lib/user.actions";
import { CardForProfile } from "@/components/card-profile/CardForProfile";
import { DataBaseMovie } from "@/components/card-profile/CardForProfile";
import ModalButton from "@/components/btn-modal/ModalButton";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";
import "./profile.css";

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
      <section>
        <article className="information__container">
          <div>
            <img src={session.user.picture} alt="profile" />
          </div>
          <div>
            <p>
              <strong>Name:</strong> {session.user.name}
            </p>
            <p>
              <strong>Email:</strong> {session.user.email}
            </p>
          </div>
        </article>
        <ModalButton user={user} />
        <article>
          <h4 className="movie__upload">Movies</h4>
          {dataBaseUser.movies.map((movie: DataBaseMovie) => (
            <CardForProfile key={movie.id} data={movie} />
          ))}
        </article>
      </section>
    );
  }
  return <p>Error</p>;
});
