'use client'
import Link from "next/link";
import Image from "next/image";
import altisonoLogo from './static/Altisono_logo.jpg'
import ArticleFacade from "./ui/ArticleFacade";
import { FacebookIcon, InstagramIcon } from "next-share";

class Article {
  id: number = 0;
  title: string = "";
  type: string = "";
  brief: string = "";
  thumbURL: string ="";
}

export default function Home() {
  const articleList: Array<Article> = [
    {
      id: 1,
      title: "Frente Cumbiero - Cera Perdida",
      type: "Reseña",
      brief: "Cumbia bogotana con tintes electrónicos y demás fusiones, el nuevo álbum de Frente Cumbiero tiene nuevas propuestas pero el mismo sabor.",
      thumbURL: "https://www.altisono.mx/Reviews/CeraPerdida.jpg"
    },
    {
      id: 2,
      title: "Galaxia Cero EP - Galaxia Cero",
      type: "Entrevista",
      brief: "EP homonimo del colectivo Galaxia Cero, conformado por Max Chinasky, Guzman Uve, LngSht, Dj1sak, y Demian Crate. Proyecto con canciones frescas y una reversión de un éxito conocido.",
      thumbURL: "https://www.altisono.mx/Reviews/GalaxiaCero.jpeg"
    },
    {
      id: 3,
      title: "El Soundtrack de la Revolución",
      type: "Evento",
      brief: "¿Qué música de fondo tendrá la revolución?",
      thumbURL: "https://www.altisono.mx/Reviews/BLM.jpg"

    },
    {
      id: 4,
      title: "The New Abnormal - The Strokes",
      type:"Reseña",
      brief: "Nostalgia, alivio, un pie moviéndose al ritmo de la batería y ganas de bailar al ritmo ya familiar de The Strokes, con su más reciente álbum a casi 7 años de su último LP.",
      thumbURL: "https://www.altisono.mx/Reviews/NewAbnormal.png"
    },
    {
      id: 5,
      title: "Everlasting - Los Retros",
      type: "Entrevista",
      brief: "Funk perfectamente bien ejecutado con influencias del rock setentero latinoamericano.",
      thumbURL: "https://www.altisono.mx/Reviews/Everlasting.jpg"
    },
    {
      id: 6,
      title: "Invisible People - Chicano Batman",
      type: "Evento",
      brief: "El resultado de experimentar con sonidos nuevos, dedicarles tiempo y esfuerzo.",
      thumbURL: "https://www.altisono.mx/Reviews/ChicanoInvisible.jpg"
    },
    {
      id: 7,
      title: "Un Canto Por México, Vol. 1 - Natalia Lafourcade",
      type: "Reseña",
      brief: "Una oda la naturaleza, la vida, y la belleza del Son Jarocho y el estado de Veracruz",
      thumbURL: "https://www.altisono.mx/Reviews/NataliaPorMexico.jpg"
    },
    {
      id: 8,
      title: "Puro Teatro - Daniela Spalla",
      type: "Entrevista",
      brief: "Un álbum con canciones para reír, llorar, cantar y bailar. Un disco que nos recuerda que no es malo sentir.",
      thumbURL: "https://www.altisono.mx/Reviews/DanielaTeatro.jpg"
    }, 
  ]

    return (
    <>
    <header className="bg-black">
      <Link href="/" ><Image className="px-20 min-w-80" 
        src={altisonoLogo}
        //src={altisonoLogo}
        alt="Altisono branding letters."
        width="500" height="500"
        unoptimized/>
      </Link>
    </header>
    <main className="bg-black flex flex-col items-center">
      <ul className="w-2/3">
        {articleList.map(
          (art)=>{
            return(
              <li key={art.id}>
                <ArticleFacade {...art}></ArticleFacade>
              </li>
              )
            }
          )
        } 
      </ul>
    </main>
    <footer className="text-center pb-8">
      <h2 className="text-4xl">Contacto</h2>
      <p className="p-9 text-3xl">altisonomx@gmail.com</p>
      <ul className="flex flex-row justify-evenly">
        <li>
          <a href="https://www.facebook.com/AltisonoMX/"><FacebookIcon size={50} round /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/altisonomx/"><InstagramIcon size={50} round /></a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCNtgNLpeWra-ZWekWDYI4fA">Youtube</a>
        </li>
      </ul>
    </footer>
    </> 
  );
}
