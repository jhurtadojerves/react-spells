import React from "react";

import { Section } from "./styles";
import { Spell } from "../Spell";

const data = {
  count: 169,
  next: "http://hechizos.ordendelfenix.xyz/api/spells/?page=2",
  previous: null,
  results: [
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/absorvere/",
      id: 80,
      name: "Absorvere",
      description:
        "Afecta a 2 rivales. Rompe violentamente un hueso o grupo de huesos pequeños, que provoca una enfermedad rarísima, similar a la gangrena. No afecta a huesos de la columna vertebral, o de la cabeza. La rotura provoca un daño grave en el primer turno y la gangrena otro daño leve en el segundo.",
      range: [
        {
          name: "Nigromante"
        }
      ],
      type: "Efecto",
      method: "Verbal",
      object: "Con Varita",
      battles: true
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/accio/",
      id: 1,
      name: "Accio",
      description:
        "Encantamiento invocador que es usado para hacer volar objetos hacia las manos del mago. Solo es necesario agregar al final de la frase Accio, el objeto que se desea hacer llegar a las manos. Los objetos pueden estar fuera de la vista de los duelistas al ser invocados, pero tiene que haber sido descrito, estar presente en el lugar del duelo y tener una idea de su ubicación.",
      range: [
        {
          name: "Aprendiz"
        }
      ],
      type: "Invocación - Efecto",
      method: "Verbal",
      object: "Con Varita",
      battles: true
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/aguamenti/",
      id: 2,
      name: "Aguamenti",
      description:
        "Sale un chorro de agua de la varita. Es dirigida a corta distancia y a donde se apunte con la varita. El agua dejará de salir en el momento que se deje de apuntar o se lance el siguiente hechizo. La distancia que alcanza el chorro de agua es de hasta 2 metros.",
      range: [
        {
          name: "Aprendiz"
        }
      ],
      type: "Invocación - Efecto",
      method: "No Verbal",
      object: "Con Varita",
      battles: true
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/alohomora/",
      id: 3,
      name: "Alohomora",
      description: "Este hechizo abre mágicamente cerraduras cerradas.",
      range: [
        {
          name: "Aprendiz"
        }
      ],
      type: "Rayo",
      method: "Verbal",
      object: "Con Varita",
      battles: true
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/amuleto-caudex/",
      id: 190,
      name: "Amuleto Caudex",
      description:
        "El amuleto tiene el mismo efecto que un Caudex. Usado en rol, este amuleto es capaz de convertir en squib hasta al mago más poderoso, dejándolo sin una chispa de magia durante un periodo de tiempo que depende del poder mágico del afectado y va desde un día entero para un aprendiz hasta 1 hora para un Orden de Merlín. Es un ópalo que irradia una luminiscencia particular en cada mago o bruja y está hecho de un poderoso material, de apariencia versátil en cada persona, que actúa como un imán y se adhiere a cualquier superficie, por lo que puede portarse en un bolsillo o llevarse como broche de la capa o como un colgante. Para utilizarlo, debes pasarlo dos veces sobre el corazón del mago o bruja a quien quieres dejar sin magia. El amuleto provocará una gran palidez en el rostro de la persona afectada y una sutil marca blanca en la frente, que es un bloqueador de la magia e impedirá que el mago pueda utilizar su varita o realizar magia de ningún tipo.",
      range: [
        {
          name: "Merlín"
        }
      ],
      type: "Rolistico",
      method: "Rolistico",
      object: "Objeto",
      battles: false
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/amuleto-dragon/",
      id: 188,
      name: "Amuleto Dragón",
      description:
        "Colgante con forma de dragón de oro que permite a quien lo porta controlar dragones y comunicarse con ellos. Podrás volar sobre un dragón o, incluso, si tienes el poder de criaturas y un dragón de tu propiedad, usarlo igual que si tuvieras un rango social que pudiera controlarlo. Podrás adquirir dragones en el Magic Mall y no tendrás que llevarlos a la Reserva. Deberás portar el amuleto al cuello o, de lo contrario, perderías el control sobre los dragones, mientras no tengas el rango social adecuado.",
      range: [
        {
          name: "Hermes Trimegisto"
        }
      ],
      type: "Rolistico",
      method: "Rolistico",
      object: "Objeto",
      battles: false
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/amuleto-volador/",
      id: 166,
      name: "Amuleto Volador",
      description:
        "Es un colgante con forma de alas de plata que permite planear pequeñas distancias y caer lentamente desde grandes alturas.",
      range: [
        {
          name: "Aprendiz de Brujo"
        }
      ],
      type: "Rolistico",
      method: "Rolistico",
      object: "Objeto",
      battles: false
    },
    {
      url: "http://hechizos.ordendelfenix.xyz/api/spells/amuleto-anti-robo/",
      id: 186,
      name: "Amuleto anti robo",
      description:
        "Tiene la forma de una porcelana que representa al dios griego Hermes con su casco alado. Impide que puedan robar en los lugares en donde se encuentra colocado. Puede proteger una mansión o negocio. Asimismo, sirve para proteger las bóvedas trastero.",
      range: [
        {
          name: "Ancestros"
        }
      ],
      type: "Rolistico",
      method: "Rolistico",
      object: "Objeto",
      battles: false
    },
    {
      url:
        "http://hechizos.ordendelfenix.xyz/api/spells/amuleto-contra-defensas-carcelarias/",
      id: 182,
      name: "Amuleto contra defensas carcelarias",
      description:
        "Este amuleto proporciona inmunidad contra cualquier tipo de defensa carcelaria (incluidas las cárceles de bandos que puedan existir en un momento dado, Azkaban o cualquier otra prisión rolística), por lo que quien lo posea podrá escapar de cualquier cárcel o prisión. Su uso consume mucha energía, por lo que no es fácil de reponer su poder mágico. Una vez usado, se debe esperar una luna completa (hasta el mismo día del mes siguiente) antes de que pueda volver a ser usado. Consiste en un colgante con forma de aro dorado, de apariencia tan anodina que resulta indetectable. Debe llevarse puesto en el momento en que uno es capturado.",
      range: [
        {
          name: "Druida"
        }
      ],
      type: "Rolistico",
      method: "Rolistico",
      object: "Objeto",
      battles: false
    },
    {
      url:
        "http://hechizos.ordendelfenix.xyz/api/spells/amuleto-de-la-curacion/",
      id: 170,
      name: "Amuleto de la Curación",
      description:
        "Combinado con conocimientos de sanación (primeros auxilios), este amuleto permite curar a otra persona con una simple imposición de manos. La curación es total e instantánea siempre que el mago, bruja o muggle no esté muerto. Consiste en un colgante con forma de topacio amarillo que refleja la luz del sol en destellos de colores. Debe portarse al cuello para poder realizar la curación.",
      range: [
        {
          name: "Fortaleza"
        }
      ],
      type: "Rolistico",
      method: "Rolistico",
      object: "Objeto",
      battles: false
    }
  ]
};

export const ListOfSpells = () => (
  <Section>
    {data.results.map(spell => (
      <Spell key={spell.id} {...spell} />
    ))}
  </Section>
);
