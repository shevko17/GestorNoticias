export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
    textocompleto:string;
    destacada:boolean;
}

export let ListaNoticias:Array<Noticias>=[
    {   id:1,
        idCategoria:1,
        titulo:"Forza lotta vincerai",
        autor:"Paolo Maldini",
        fecha:Date().toString(),
        imagen:"imagen1.jpg",
        texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque neque purus, sed convallis nisi egestas ac. ",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:true
    },
    {   id:2,
        idCategoria:2,
        titulo:"Shadows collide with people",
        autor:"John Frusciante",
        fecha:Date().toString(),
        imagen:"imagen2.jpg",
        texto:"Vestibulum ultricies urna ut ipsum feugiat, a iaculis est molestie. Ut nec eros vehicula, volutpat tellus ut, molestie tellus.",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:true
    },
    {   id:3,
        idCategoria:3,
        titulo:"Nanimo Nagata",
        autor:"Eiichiro Oda",
        fecha:Date().toString(),
        imagen:"imagen3.jpg",
        texto:"Curabitur quis luctus sapien. Etiam et erat venenatis, imperdiet dolor eget, condimentum libero.",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:true
    },
    {   id:4,
        idCategoria:4,
        titulo:"Che gol che fa",
        autor:"Andrei Shevchenko",
        fecha:Date().toString(),
        imagen:"imagen4.jpg",
        texto:"Phasellus magna massa, pretium ac est ac, pellentesque condimentum quam. Aliquam auctor odio dui, at pharetra mauris sollicitudin ac.",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:false
    },
    {   id:5,
        idCategoria:5,
        titulo:"Black Hole Sun",
        autor:"Chris Cornell",
        fecha:Date().toString(),
        imagen:"imagen5.jpg",
        texto:"Aenean euismod enim quis enim imperdiet, euismod dignissim mauris rhoncus. Nam nibh odio, consectetur ac finibus a, porta eget.",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:false
    },
    {   id:6,
        idCategoria:6,
        titulo:"Royale with cheese",
        autor:"Quentin Tarantino",
        fecha:Date().toString(),
        imagen:"imagen6.jpg",
        texto:"In rhoncus libero id arcu gravida congue. Pellentesque fermentum lacinia lectus. Proin faucibus volutpat enim et luctus.",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:false
    },
    {   id:7,
        idCategoria:1,
        titulo:"Dazed & Confused",
        autor:"Robert Plant",
        fecha:Date().toString(),
        imagen:"imagen7.jpg",
        texto:"Vestibulum non enim auctor, sodales risus id, vehicula diam. Sed vestibulum elit semper sapien feugiat luctus.",
        textocompleto:"Etiam et posuere odio, in iaculis dolor. Integer eu diam lacus. Sed viverra urna libero, sit amet aliquet mi congue sit amet. Ut aliquam, magna in iaculis consectetur, lorem dui lacinia diam, eget commodo leo nisl at ligula. Morbi mattis risus pulvinar augue tristique imperdiet. Donec hendrerit elit ut nisl viverra imperdiet. Pellentesque eu sem id turpis venenatis ultricies et in orci. Quisque at posuere lacus. Nam tincidunt et diam ac ultrices. Fusce lacus leo, volutpat eget ipsum ut, malesuada efficitur nisl. Duis tortor ipsum, luctus nec ultrices vitae, porta vitae lacus. Etiam porttitor mauris nunc, non congue tellus elementum eu. Donec at nulla accumsan, consectetur dui eget, tempor ipsum. Pellentesque convallis lectus posuere, rhoncus nibh at, egestas lorem. Curabitur ut ornare velit, hendrerit mattis elit. Curabitur aliquet sagittis nulla non pharetra. Sed eu dui nec dolor malesuada blandit a sit amet leo. Proin ut mollis ante. Integer maximus nisi sit amet metus tempus ultrices. Fusce sapien leo, dignissim facilisis mauris sed, fringilla dapibus eros. Donec risus quam, faucibus quis justo id, pulvinar facilisis ligula. Duis venenatis libero nisi, et cursus arcu ultrices ut.",
        destacada:false
    }
]