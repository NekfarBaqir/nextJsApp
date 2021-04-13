import { people } from "../data/data";
import { useRouter } from "next/router";
import Image from "next/image";
import mystyle from "../styles/utils.module.css";
import Link from "next/link";

export const getStaticPaths = async () => {
  const paths = people.map((ppl) => {
    return {
      params: { id: ppl.userName },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps() {
  return {
    props: {
      people,
    },
  };
}

const Description = ({ people }) => {
  const router = useRouter();
  const id = router.query.id;
  const person = people.filter((ppl) => {
    return ppl.userName == id && ppl;
  });
  console.log(person[0], "here is the person");

  return (
    <div className={mystyle.container50}>
      <div className={mystyle.textCenter}><Image className={mystyle.imgCircle} width={200} height={200} src={"/images/"+id+".jpg" }/></div>
      <h2 className={mystyle.textCenter}>{person[0].name}</h2>
      <p>{person[0].description}</p>
      <Link href="/">
        <a>{"<-"}Go back</a>
      </Link>
    </div>
  );
};
export default Description;
