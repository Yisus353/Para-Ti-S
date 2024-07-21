import { useState } from "react";
import JSConfetti from 'js-confetti'
import Carta from './Carta';
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)
  const [showCard, setShowCard] = useState(false);

  let random = [{
    id: 1,
    description: "¿Me das otra oportunidad?",
    img: "https://art.pixilart.com/bb8d5af74252e95.gif"
  },
  {
    id: 1,
    description: "Lamento lo ocurrido. ¿Podemos intentarlo de nuevo?",
    img: "https://i.pinimg.com/originals/a8/e0/87/a8e087e6a2406d2fb4f139c66b81ac48.gif"
  }
    ,
  {
    id: 2,
    description: "Perdón. Quiero hacerlo bien esta vez.",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bad3f9fe-3f60-4619-b9c4-36fe45223cbb/d88t5hv-8e72c736-7895-4b1f-ad6c-b43c16af6367.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhZDNmOWZlLTNmNjAtNDYxOS1iOWM0LTM2ZmU0NTIyM2NiYlwvZDg4dDVodi04ZTcyYzczNi03ODk1LTRiMWYtYWQ2Yy1iNDNjMTZhZjYzNjcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VAL-ITegeOmT6g0Lu-AYUtAncKcaVT05jALZU9N2P-w"
  },
  {
    id: 3,
    description: "Sé que fallé. ¿Podemos empezar de nuevo?",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bad3f9fe-3f60-4619-b9c4-36fe45223cbb/d8nia4w-bfd69e6c-0cc3-45db-81fb-bb74d3deb8e2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhZDNmOWZlLTNmNjAtNDYxOS1iOWM0LTM2ZmU0NTIyM2NiYlwvZDhuaWE0dy1iZmQ2OWU2Yy0wY2MzLTQ1ZGItODFmYi1iYjc0ZDNkZWI4ZTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CBSmoRVImjuWdUqNz8Ch3WIAHC4GY06toPfwukHkRFs"
  },
  {
    id: 4,
    description: "Prometo mejorar. ¿Me dejas intentarlo otra vez?",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b86bdb4-540f-4240-bed6-228912593dc2/dglrlap-d549ffea-4690-4137-8521-61a589ea5240.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiODZiZGI0LTU0MGYtNDI0MC1iZWQ2LTIyODkxMjU5M2RjMlwvZGdscmxhcC1kNTQ5ZmZlYS00NjkwLTQxMzctODUyMS02MWE1ODllYTUyNDAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JxAs5QDXgHTvpofI8X2H-0o3JMdQ9xR8y_9P-lilb4A"
  },
  {
    id: 5,
    description: "No quiero perderte. ¿Podemos intentarlo otra vez?",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b86bdb4-540f-4240-bed6-228912593dc2/dglrlfw-d1f2c535-6bbf-4785-92f4-5607d0d7045a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiODZiZGI0LTU0MGYtNDI0MC1iZWQ2LTIyODkxMjU5M2RjMlwvZGdscmxmdy1kMWYyYzUzNS02YmJmLTQ3ODUtOTJmNC01NjA3ZDBkNzA0NWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gRYZj4WyvGKGOfq6qHL8lzUGar3vzlQnvaEw2ARVr6w"
  },
  {
    id: 6,
    description: "¿Podemos empezar de nuevo y hacerlo mejor?",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bad3f9fe-3f60-4619-b9c4-36fe45223cbb/d8q2kx3-06744886-a51a-48df-a7e3-b354dfe3c2b2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhZDNmOWZlLTNmNjAtNDYxOS1iOWM0LTM2ZmU0NTIyM2NiYlwvZDhxMmt4My0wNjc0NDg4Ni1hNTFhLTQ4ZGYtYTdlMy1iMzU0ZGZlM2MyYjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vUbU2HJLqNGOtG5CtunWM9XWy3EkznVFlBeBDZc0g9Q"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b86bdb4-540f-4240-bed6-228912593dc2/dglrk0h-7ba9760c-7366-4e98-b11c-9f31eeb56ace.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiODZiZGI0LTU0MGYtNDI0MC1iZWQ2LTIyODkxMjU5M2RjMlwvZGdscmswaC03YmE5NzYwYy03MzY2LTRlOTgtYjExYy05ZjMxZWViNTZhY2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jIPtOJL-yphV8VExtb6Jevo7RAei2UyQLj56afOKZlQ"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejQ0enczcTd2MGhneWtlOTc5am5zMWxhc2dtdnJzNDFyc25zdmMwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xshB5aELDTtBATyz6T/giphy.webp"
  },
  {
    id: 9,
    description: "¿Me dejas intentarlo de nuevo?",
    img: "https://gifdb.com/images/high/kuromi-getting-shy-pdlhnu9yza2zw3ml.webp"
  },
  {
    id: 10,
    description: "Sano mis heridas, pero no puedo curar lo que siento por ti",
    img: "https://www.icegif.com/wp-content/uploads/2021/09/icegif-55.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * random.length);
    if (agrandar <= 500) {
      setAgrandar(agrandar + 2.5);
    }
    setRandomValor(random[index]);
  };

  const handleImageLoad = () => {
    setImagenCargada(true);
  };

  const openCard = () => {
    setShowCard(true);
  };

  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Me darias una segunda oportunidad?</h1>
            <img
              src={Object.keys(randomValor).length === 0 ?
                "https://64.media.tumblr.com/863ae947fe5727046b9dfdbfb15a7e92/1f5b844119f4e6fa-3c/s540x810/727c84a1908274a73d7b9713fea6cb174437d133.gifv" : randomValor.img}
              alt="San Valentin"
              className="mx-auto"
              width={400}
              height={400}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button
                onClick={() => {
                  setValueSi(true);
                  jsConfetti.addConfetti({
                    emojis: ['😍', '🥰', '❤️', '😽'],
                    emojiSize: 70,
                    confettiNumber: 80,
                  });
                }}
                className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`}
                style={{ height: agrandar }}
              >
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada}
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "Para Ti ❤️" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          !showCard ? (
            <div className="flex justify-center items-center flex-col space-y-10">
              <h1 className="text-4xl text-white font-bold">Prometo no volver a lastimarte, Te Amo ❤️!</h1>
              <img src="https://media1.tenor.com/m/QaPEi-tcFXQAAAAd/gato-besando-a-la-camara.gif" alt="" className="mx-auto" />
              <button
                onClick={openCard}
                className="bg-blue-500 text-white font-bold p-2 rounded-md text-xl"
              >
                Abrir Carta
              </button>
              <span hidden>{document.title = 'I Love You ❤️!'}</span>
            </div>
          ) : (
            <Carta onClose={() => setShowCard(false)} />
          )
        )
      }
    </main>
  );
}

export default App;