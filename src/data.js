import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Indie Select",
            artist: "IndieSelect",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://indieselect.stream.laut.fm/indieselect",
            active: true,
        },
        {
            name:"Indie Experience",
            artist: "fIndieExperience",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://indieexperience.stream.laut.fm/indie_experience",
            active: false,
        },
        {
            name:"Delta radio INDIE",
            artist: "deltaradioINDIE",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://streams.deltaradio.de/delta-indie/mp3-128/onlineradiobox/",
            active: false,
        },
        {
            name:"Indie and More",
            artist: "IndieandMore",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://indieandmore.stream.laut.fm/indieandmore",
            active: false,
        },
        {
            name:"Mein Radio Indie",
            artist: "MeinRadioIndie",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://alternative-radio.stream.laut.fm/alternative-radio",
            active: false,
        },
        {
            name:"Indie goes to Hollywoodd",
            artist: "IndiegoestoHollywoodd",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://indiegoestohollywood.stream.laut.fm/indiegoestohollywood",
            active: false,
        },
        {
            name:"Caroline Now",
            artist: "CarolineNow",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://carolinenow.stream.laut.fm/caroline_now",
            active: false,
        },
        {
            name:"Alternative World",
            artist: "AlternativeWorld",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://alternativeworld.stream.laut.fm/alternativeworld",
            active: false,
        },
        {
            name:"IndieXL",
            artist: "IndieXL",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://server-23.stream-server.nl:18438/;listen.pls_",
            active: false,
        },
    ];
}

export default chillHop;


