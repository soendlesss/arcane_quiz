// questions.js

const questions = [
    // 🎭 Questions sur les personnages
    {
      type: "text",
      question: "Quel est le vrai prénom de Jinx avant sa transformation ?",
      answers: ["Powder", "Vi", "Caitlyn", "Sevika"],
      correct: 0,
      image: "assets/img/powder.jpg"
    },
    {
      type: "text",
      question: "Comment s’appelle la sœur de Vi ?",
      answers: ["Jinx", "Caitlyn", "Sevika", "Grayson"],
      correct: 0,
      image: "assets/img/vi.jpg"
    },
    {
      type: "text",
      question: "Quel scientifique a sauvé Viktor d’une maladie mortelle ?",
      answers: ["Jayce", "Silco", "Singed", "Heimerdinger"],
      correct: 2,
      image: "assets/img/singed.jpg"
    },
    {
      type: "text",
      question: "Comment s’appelle le leader du gang ennemi de Vander ?",
      answers: ["Silco", "Finn", "Ekko", "Marcus"],
      correct: 0,
      image: "assets/img/silco.jpg"
    },
    {
      type: "text",
      question: "Quel personnage devient conseiller du Piltover Council grâce à ses recherches sur l’Hextech ?",
      answers: ["Viktor", "Jayce", "Silco", "Mel Medarda"],
      correct: 1,
      image: "assets/img/jayce.jpg"
    },
    {
      type: "text",
      question: "Qui est Mel Medarda ?",
      answers: ["Une scientifique", "Une criminelle", "Une conseillère du Conseil de Piltover", "Une sœur de Jinx"],
      correct: 2,
      image: "assets/img/mel.jpg"
    },
    {
      type: "text",
      question: "Comment Silco considère Jinx ?",
      answers: ["Sa meuf", "Son arme", "Sa fille", "Son soldat"],
      correct: 2,
      image: "assets/img/silco-jinx.jpg"
    },
  
    // 🧪 Questions sur les événements
    {
      type: "text",
      question: "Que découvre Jayce au tout début de la série, déclenchant toute l'intrigue scientifique ?",
      answers: ["L'Hexcore", "Un passage secret pour Zaun", "L'Hextech", "La trahison de Silco"],
      correct: 2,
      image: "assets/img/hextech.jpg"
    },
    {
      type: "text",
      question: "Lors de la toute première mission de Powder, que vole-t-elle accidentellement ?",
      answers: ["Une arme", "Des cristaux", "Un journal secret", "Une potion"],
      correct: 1,
      image: "assets/img/cristaux.jpg"
    },
    {
      type: "text",
      question: "Quel événement déclenche la transformation mentale de Powder en Jinx ?",
      answers: ["La perte de Vander", "La trahison de Vi", "La mort accidentelle de ses amis dans l'explosion", "La blessure de Silco"],
      correct: 2,
      image: "assets/img/explosion.jpg"
    },
    {
      type: "text",
      question: "Qui trahit Vander et mène à sa capture ?",
      answers: ["Marcus", "Silco", "Sevika", "Mylo"],
      correct: 0,
      image: "assets/img/vander.jpg"
    },
    {
        type: "text",
        question: "Comment s'appelle la mère de Caitlyn ?",
        answers: ["Mathilda", "Amber", "Cassandra", "Shoola"],
        correct: 2,
        image: "assets/img/cassandra.jpg"
      },
      {
        type: "text",
        question: "Qui sauve Jayce et sa mère lorsqu'ils sont perdus dans la neige ?",
        answers: ["Heimerdinger", "Un mage", "Silco", "Vander"],
        correct: 1,
        image: "assets/img/jayce-child.jpg"
      },
      {
        type: "text",
        question: "Pourquoi Jayce est-il expulsé de l'Académie ?",
        answers: ["Pour tricherie", "Pour expérimenter la magie", "Pour trahison", "Pour vol"],
        correct: 1,
        image: "assets/img/academy.jpg"
      },
     
      
  
    // 🌆 Questions sur les lieux
    {
      type: "text",
      question: "Comment s’appelle la ville souterraine sous Piltover ?",
      answers: ["Undercity", "Zaun", "Dark City", "Piltover"],
      correct: 1,
      image: "assets/img/zaun.jpg"
    },
    {
      type: "text",
      question: "Comment se nomme l'invention de Viktor censée sauver Zaun de la pauvreté et des maladies ?",
      answers: ["Hexcore", "Hextech Drive", "Piltover Core", "Zaun Engine"],
      correct: 0,
      image: "assets/img/hexcore.jpg"
    },
  
    // 🎨 Questions "Qui est-ce ?" (images uniquement)
    {
      type: "image",
      question: "Qui est Vi ?",
      answers: [
        { image: "assets/img/jinx.jpg", label: "Jinx" },
        { image: "assets/img/vi.jpg", label: "Vi" },
        { image: "assets/img/caitlyn.jpg", label: "Caitlyn" },
        { image: "assets/img/sevika.jpg", label: "Sevika" },
      ],
      correct: 1
    },
    {
      type: "image",
      question: "Qui est Jayce ?",
      answers: [
        { image: "assets/img/ekko.jpg", label: "Ekko" },
        { image: "assets/img/viktor.jpg", label: "Viktor" },
        { image: "assets/img/finn.jpg", label: "Finn" },
        { image: "assets/img/jayce.jpg", label: "Jayce" }
      ],
      correct: 3
    },
    {
      type: "image",
      question: "Qui est Finn ?",
      answers: [
        { image: "assets/img/jayce.jpg", label: "Jayce" },
        { image: "assets/img/heimerdinger.jpg", label: "Heimerdinger" },
        { image: "assets/img/viktor.jpg", label: "Viktor" },
        { image: "assets/img/finn.jpg", label: "Finn" }
      ],
      correct: 3
    },
    {
      type: "image",
      question: "Qui est Silco ?",
      answers: [
        { image: "assets/img/silco.jpg", label: "Silco" },
        { image: "assets/img/finn.jpg", label: "Finn" },
        { image: "assets/img/sevika.jpg", label: "Sevika" },
        { image: "assets/img/marcus.jpg", label: "Marcus" }
      ],
      correct: 0
    },
    {
      type: "image",
      question: "Qui est Mel Medarda ?",
      answers: [
        { image: "assets/img/mel.jpg", label: "Mel Medarda" },
        { image: "assets/img/caitlyn.jpg", label: "Caitlyn" },
        { image: "assets/img/vi.jpg", label: "Vi" },
        { image: "assets/img/cassandra.jpg", label: "Cassandra" },
      ],
      correct: 0
    },
    {
      type: "image",
      question: "Qui est Singed ?",
      answers: [
        { image: "assets/img/mylo.jpg", label: "Mylo" },
        { image: "assets/img/singed.jpg", label: "Singed" },
        { image: "assets/img/finn.jpg", label: "Finn" },
        { image: "assets/img/claggor.jpg", label: "Claggor" }
      ],
      correct: 1
    },
    {
      type: "image",
      question: "Qui est Ekko ?",
      answers: [
        { image: "assets/img/ekko.jpg", label: "Ekko" },
        { image: "assets/img/jayce.jpg", label: "Jayce" },
        { image: "assets/img/vander.jpg", label: "Vander" },
        { image: "assets/img/marcus.jpg", label: "Marcus" }
      ],
      correct: 0
    },
    {
      type: "image",
      question: "Qui est Sevika ?",
      answers: [
        { image: "assets/img/jinx.jpg", label: "Jinx" },
        { image: "assets/img/vi.jpg", label: "Vi" },
        { image: "assets/img/sevika.jpg", label: "Sevika" },
        { image: "assets/img/grayson.jpg", label: "Grayson" }
      ],
      correct: 2
    },
  
    // 🧩 Bonus Vrai ou Faux
    {
      type: "text",
      question: "Vrai ou Faux : Jayce trahit Viktor pour rejoindre Silco.",
      answers: ["Vrai", "Faux"],
      correct: 1,
      image: "assets/img/jayce.jpg"
    },
    {
      type: "text",
      question: "Vrai ou Faux : Jinx est responsable de la destruction du laboratoire Hextech.",
      answers: ["Vrai", "Faux"],
      correct: 0,
      image: "assets/img/jinx.jpg"
    },
    {
      type: "text",
      question: "Vrai ou Faux : Vi et Caitlyn deviennent alliées au cours de la saison 1.",
      answers: ["Vrai", "Faux"],
      correct: 0,
      image: "assets/img/vi-caitlyn.jpg"
    },
    {
        type: "text",
        question: "Vrai ou Faux : Vander est le père biologique de Vi.",
        answers: ["Vrai", "Faux"],
        correct: 1,
        image: "assets/img/vander.jpg"
      },
      {
        type: "text",
        question: "Vrai ou Faux : Singed travaille secrètement pour le Conseil de Piltover.",
        answers: ["Vrai", "Faux"],
        correct: 1,
        image: "assets/img/singed.jpg"
      },
      {
        type: "text",
        question: "Vrai ou Faux : Silco a été blessé à l'œil par Vander dans leur jeunesse.",
        answers: ["Vrai", "Faux"],
        correct: 0,
        image: "assets/img/silco.jpg"
      }
  ];
  