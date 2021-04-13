import utilStyles from "./styles/utils.module.css";
import { people } from "./data/data";
import {PplList} from "./component/PplList";

export async function getStaticProps() {
  return {
    props: {
      people,
    },
  };
}

export default function Home({ people }) {
  return (
    <div className={utilStyles.container}>
      <h1 className={utilStyles.textCenter}>Welcome to People List App</h1>
      <ul className={utilStyles.liUndecorated}>
        {people.map((ppl) => {
          return (
            <PplList
              key={ppl.userName}
              userName={ppl.userName}
              description={ppl.description}
            >
              {ppl.name}
            </PplList>
          );
        })}
      </ul>
    </div>
  );
}
