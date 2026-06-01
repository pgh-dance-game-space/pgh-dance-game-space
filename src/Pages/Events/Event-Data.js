  // an event can have the following keys:
  //    name: string, to be prominently displayed in large bold text
  //    date: string, to be display just under the event name
  //    desc: array of strings, each string will be a distinct paragraph
  //          collectively they should descibe the event.  strings can contain html
  //    logo: string, filename for a full-width image representing a future event
  //          for example, when LEFTS hadn't occured yet, the LEFTS logo was pathed at
  //          ./public/img/events/L.E.F.T.S/lefts-logo.jpg
  //          and the `logo` key was `lefts-logo.jpg`
  //  thumbs: array of strings, each string is a filename to a thumbnail in ./thumbs/
  //          corresponding full-size images should have the same file name in ../full/

export default {
  upcoming: [],

  past: [
    {
      name: "Stamina Jawn 2",
      date: "May 15 – May 17, 2026",
      desc: [
        `Stamina Jawn 2 was an in-person event focused on teams meeting
         to complete sets for
         <a target="_blank" href="https://ecs145.groovestats.com/">ECS 14.5</a>.`,
        `<blockquote>"Come for a weekend of
         team stamina, stay for the good company and vibes."</blockquote>`
      ],
      thumbs: [
      	"sj2-1.jpg", "sj2-2.jpg", "sj2-3.jpg", "sj2-4.jpg", "sj2-5.jpg",
        "sj2-6.jpg", "sj2-7.jpg", "sj2-8.jpg", "sj2-9.jpg"
      ]

    },
    {
      name: "L.E.F.T.S",
      date: "Jan 17 – Jan 18, 2026",
      desc: [`LEFTS is a casual, inclusive event that maximizes everyone's
        participation regardless of skill level.   Check the
        <a target="_blank" href="https://lefts.groovestats.com/">event website</a>
        for more details.`],
      thumbs: [
        "lefts-1.jpg", "lefts-2.jpg", "lefts-3.jpg",
        "lefts-4.jpg", "lefts-5.jpg", "lefts-6.jpg",
        "lefts-7.jpg", "lefts-8.jpg", "lefts-9.jpg"
      ]
    },
    {
      name: "Stamina Con 2",
      date: "Oct 31 – Nov 2, 2025",
      desc: [`Stamina Nation gathered on Halloween weekend for a <a target="_blank" href="https://staminacon2.groovestats.com/">stamina event</a>
        that included a costume contest, pumpkin search, and a rave!`],
      thumbs: [
      	"sc2-1.jpg", "sc2-2.jpg", "sc2-3.jpg", "sc2-4.jpg", "sc2-5.jpg", "sc2-6.jpg", "sc2-7.jpg", "sc2-8.jpg", "sc2-9.jpg"
      ]
    },
    {
      name: "Girlpocalypse 2025 Retreat",
      date: "June 28–29, 2025",
      desc: [`The retreat was an in-person gathering that brought together competitors
            and friends of those who participated in
            <a href="https://www.girlpocalypse.dance/">Girlpocalypse</a> —
            a remote ITG & SMX tournament designed to celebrate and promote competition
            among women and nonbinary dance game players.`],
      thumbs: [
        "2025gp1.jpg", "2025gp2.jpg"
      ]
    },
    {
      name: "Stamina Jawn",
      date: "May 30 – June 1, 2025",
      desc: ["Stamina Nation returned with its first in-person event in over 5 years!"],
      thumbs: [
        "sj1.jpg", "sj2.jpg", "sj3.jpg", "sj4.jpg", "sj5.jpg", "sj6.jpg", "sj7.jpg", "sj8.jpg", "sj9.jpg"
      ]
    },
    {
      name: "Trans Rights SuperNOVA",
      date: "May 17, 2025",
      desc: [`LFK ran a local SuperNOVA 2 tournament to raise money for
            <a href="https://translifeline.org/">Trans Lifeline</a>.`,
            `All competitors were required to play with "Right" turn mod enabled.
            Most competitors chose to play with "Fish" noteskin.`],
      thumbs: [
        "trsn1.jpg", "trsn2.jpg", "trsn3.jpg", "trsn4.jpg", "trsn5.jpg",
      ]
    },
    {
      name: "We Have DDR At Home",
      date: "December 7, 2024",
      desc: ["Bogo ran a fun local DDR tournament using DDR console games."],
      thumbs: [
        "whdah1.jpg", "whdah2.png"
      ]
    },
    {
      name: "DDRbeque 2024",
      date: "July 4, 2024",
      desc: ["We gathered in Pittsburgh's Schenley Park on the 4th of July for food, friends, and dance games."],
      thumbs: [
        "ddrbeque1.jpg", "ddrbeque2.jpg", "ddrbeque3.jpg", "ddrbeque4.jpg", "ddrbeque5.jpg", "ddrbeque6.jpg"
      ]
    },
  ]
}
