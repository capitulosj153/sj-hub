function getDataById(id) {
    // Como não temos acesso ao filesystem no navegador,
    // vamos usar dados mockados ou carregar de uma API
    const mockData = {
        2026.2: {
            gestao: '2026.1',
            mestreConselheiro: 'Augusto de Aguiar Cordoni',
            idadeAssumida: '17 anos',
            frase: 'Enrolo o quanto posso',
            imagem: 'images/mcs/26-1.jpg',
            texto: `Decepção.`
        },
        2026.1: {
            gestao: '2026.1',
            mestreConselheiro: 'Bruno Eduardo Vieira',
            idadeAssumida: '17 anos',
            frase: 'Façam tudo por mim',
            imagem: 'images/mcs/26-1.jpg',
            texto: `Fiz o evento por conta dos meus pais.`
        },
        2025.2: {
            gestao: '2025.2',
            mestreConselheiro: 'Otávio Borges Leipniz',
            idadeAssumida: '20 anos quando assumiu',
            frase: `O tempo voa... quando se vê... já é domingo, quando se vê... já são seis horas, quando se vê, já é
Natal...  apenas façam, pois só falha e erra, quem tenta.`,
            imagem: '../style/images/mcs/Otávio Borges Leipnitz.jpg',
            texto: `Sou apenas o que sou porque busquei ser. Ter sido Mestre Conselheiro foi uma experiência única, singular e inesquecível! Dedique-se ao máximo para aproveitar cada segundo dessa jornada, pois, no fim das contas, a ordem demolay não se mede pelos anos que você vive, mas pelo impacto do que você faz com o seu tempo, não importa quantos colares você utiliza, mas sim quantas vidas você consegue mudar. Um verdadeiro líder lidera pelo exemplo: ele serve com renúncia de si mesmo em prol do próximo. Sozinho você pode até chegar mais rápido, mas é juntos que caminhamos mais longe. Lembre sempre e valorize seus irmãos, o tempo não volta. Um por todos, todos por um. Uma vez DeMolay, sempre DeMolay!`
        },
        2025.1: {
            gestao: '2025.1',
            mestreConselheiro: 'Francisco Malischeski Schaurich',
            idadeAssumida: '17 anos',
            frase: 'Honrar o legado, viver o presente e dedicar-se ao futuro.',
            imagem: 'images/mcs/25-1.jpg'
        },
        2024.2: {
            gestao: '2024.2',
            mestreConselheiro: 'Lucas Rezende Leal',
            idadeAssumida: '20 anos quando assumiu',
            frase: 'Envio o texto ao irmão André Pinho Hillesheim - responsável por minha indicação. Não fosse pela confiança depositada em mim para que eu me tornasse membro da Ordem, eu não teria todas as experiências de vida que eu tive durante esses 8 anos de caminhada. Também é e sempre foi um irmão extremamente dedicado com a causa, que se preocupa com as condições dos meninos e que nunca fugiu da luta, sempre ajudou quando necessário',
            imagem: '../style/images/mcs/Lucas Rezende Leal.jpeg',
            texto: 'Foi uma responsabilidade que eu, há algum tempo antes de colocar o colar no pescoço, não queria assumir. Mas, com o passar do tempo, fui mudando um pouco a minha percepção quanto a isso, principalmente por se tratar de uma experiência de vida única e que não iria se repetir. Sobre a gestão em si, fiquei muito satisfeito de ajudar a colocar o capitulo em uma posição de conclusão de diversas campanhas nacionais e estaduais, além de conseguir implementar algumas atividades extras que haviam sido feitas poucas vezes - a exemplo da palestra do tio Paulo Lukoff, que julgo ser uma das melhores sessões daquela gestão. Também teve o desafio de liderar uma vasta gama de meninos, o que foi desafiador, mas que me trouxe muitos aprendizados. Por fim, me recuso a não mencionar o intrínseco apoio que recebi, principalmente, de minha mãe - a qual foi um dos principais sustentáculos da gestão - e do conselho consultivo, que sempre me ajudou em tudo o que eu precisava.',
        },
        2024.1: {
            gestao: '2024.1',
            mestreConselheiro: 'Prada',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: '',
            texto: 'Detalhes sobre a gestão 2024.1.'
        },
        2023.2: {
            gestao: '2023.2',
            mestreConselheiro: 'Rafael Teodoro de Moraes',
            idadeAssumida: '20 anos quando assumiu',
            frase: 'Faça planos como um adulto e acredite neles como uma criança.',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2023.2.'
        },
        2023.1: {
            gestao: '2023.1',
            mestreConselheiro: 'Cauã Vargas Furtoso',
            idadeAssumida: '17 anos quando assumiu',
            frase: 'Não tenha medo de fazer o que quer por receio dos outros, expresse vontade! ',
            imagem: '../style/images/mcs/Cauã Vargas Furtoso.jpeg',
            texto: `Foi uma gestão que eu pude de verdade o que o DeMolay pode fazer na vida de cada jovem, e o mais importante para que um capitulo se mantenha forte, é a irmandade estar forte, quando os irmaos estao unidos tudo funciona! Foi a gestao que eu mais vi os irmãos unidos e trabalhando para fazer as coisas certas!`
        },
        2022.2: {
            gestao: '2022.2',
            mestreConselheiro: 'André Pinho Hillesheim',
            idadeAssumida: '18 anos quando assumiu',
            frase: 'Que o poder e a ambição jamais se sobreponham aos nossos princípios; pois, dentro da Ordem, não são os cargos ou comendas que nos engrandecem, mas os valores que escolhemos honrar',
            imagem: "../style/images/mcs/André Pinho Hillesheim.jpeg",
            // texto: 'Detalhes sobre a gestão 2022.2.'
        },
        2022.1: {
            gestao: '2022.1',
            mestreConselheiro: 'Arthur Correia',
            idadeAssumida: '17 anos quando assumiu',
            frase: 'Ser pequeno não serve ao mundo, não tem nada de sábio em se encolher para que as outras pessoas não se sintam inseguras ao seu redor, todos fomos feitos para irradiar.',
            imagem: null,
            texto: 'credito que o que mudou em mim foi a responsabilidade, criei vínculos e relações com muita gente e me aproximei muito de todo mundo que frequentava. Me entreguei de coração pra fazer algo legal e acho que todo mundo percebeu isso, e acabou se entregando tbm pra parada, algo assim.'
        },
        2021.2: {
            gestao: '2021.2',
            mestreConselheiro: 'Mestre Conselheiro 2021.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2021.2.'
        },
        2021.1: {
            gestao: '2021.1',
            mestreConselheiro: 'Mestre Conselheiro 2021.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2021.1.'
        },
        2020.2: {
            gestao: '2020.2',
            mestreConselheiro: 'Mestre Conselheiro 2020.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2020.2.'
        },
        2020.1: {
            gestao: '2020.1',
            mestreConselheiro: 'Mestre Conselheiro 2020.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2020.1.'
        },
        2019.2: {
            gestao: '2019.2',
            mestreConselheiro: 'Mestre Conselheiro 2019.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2019.2.'
        },
        2019.1: {
            gestao: '2019.1',
            mestreConselheiro: 'Mestre Conselheiro 2019.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2019.1.'
        },
        2018.2: {
            gestao: '2018.2',
            mestreConselheiro: 'Vinicius Ross Adriano',
            idadeAssumida: '17 anos quando assumiu',
            frase: 'O que é certo é certo, mesmo que todo mundo esteja fazendo errado.',
            imagem: '../style/images/mcs/Vinicius Ross Adriano.jpeg',
            texto: 'Minha gestão foi marcada por algumas mudanças, foi pouco antes de unificação do supremo e pouco depois da migração do Capítulo ao RFB. Tínhamos uma grande interação com os capítulos e praticamente direcionávamos os trabalhos da região. Tivemos algumas “primeiras vezes” nessa gestão, como o evento ser realizado em um sábado a noite, prêmio nacional do Projeto Fazer, primeira participação em um desfile de 7 de setembro, várias coisas. Na gestão eu entendi que planejar é mais importante que executar, a execução sem planejamento é o que destrói uma organização. Antes de sabermos o que fazer pensamos pensar em como fazer. Isso moldou minha visão de mundo, para praticamente tudo.'
        },
        2018.1: {
            gestao: '2018.1',
            mestreConselheiro: 'Gabriel Vinicius Malischeski',
            idadeAssumida: '19 anos quando assumiu',
            frase: 'A Ordem DeMolay vai estar para você, na medida em que você estiver para ela. Dediquem-se, a causa é nobre. Sejam respeitosos com os mais velhos, eles viveram mais do que você. Busquem fazer sempre o seu melhor, a Ordem precisa, e você aprenderá lições eternas.',
            imagem: '../style/images/mcs/Gabriel Vinicius Malischeski.jpeg',
            texto: `A gestão 2018/A foi marcante, pois no semestre anterior um querido irmão havia partido para encontrar o Pai Celestial. Naquele momento precisávamos de união, e toda a gestão foi montada, planejada e executada em torno de unir o Capítulo, fortalecer vínculos, e fazer com que ali fosse um ambiente acolhedor e fraterno. Foi uma missão difícil, porém com a ajuda dos irmãos se tornou um fardo leve e prazeroso. 

Tive inúmeros aprendizados enquanto Mestre Conselheiro, porém não posso deixar de destacar que aprendi MUITO com o conselho consultivo.
Quando eu assumi o cargo, tinha 19 anos. Acreditava que sabia de tudo, e que tinha conhecimento do que era melhor para o Capítulo. Eu tinha realmente muita vontade, ânimo e ansiedade para fazer as coisas acontecerem; porém, por muitas vezes de maneira irresponsável. Aprendi com o Conselho a resiliência de ouvir não; a capacidade de ouvir com atenção e zelo, e principalmente ordenar as minhas metas e meus objetivos. Não foram poucas as vezes que tivemos embates, e o Conselho podou algumas ideias. Porém, com o passar da gestão eu só pude agradecer, pois tudo que aconteceu foi para o meu bem enquanto Mestre Conselheiro, e para o bem do Capítulo. Por isso digo, respeitem os mais velhos. No auge dos meus 19 anos acreditava que sabia de tudo, e foi a experiência de ser Mestre Conselheiro, com a ajuda dos Tios e dos Irmãos, que eu pude perceber que sabia de muito pouco, porém tinha a oportunidade de aprender muito. Além disso, o conselho sempre foi um grande apoiador de boas ideias. Não teve uma única ideia boa que eu trouxe que não foi amparada, incentivada e ajudada pelo conselho. Porém percebi isso apenas um tempo depois.
<br><br>
Foi uma gestão complexa. Às vésperas do evento semestral (feijoada) ocorreu aquela greve dos caminhoneiros. Faltou comida, faltou gasolina, as filas eram quilométricas e tudo estava encaminhando para dar errado. Lembro de atender ligações no meio do meu trabalho de pessoas falando que teríamos que cancelar o evento. Porém, decidimos manter mesmo com toda a dificuldade. No dia anterior do evento recebemos a notícia de que além da greve dos caminhoneiros, haveria uma prova do Iron Man no sul da ilha, comprometendo severamente a mobilidade urbana para o deslocamento até o local do evento. Mais um momento de tensão.
<br><br>
Era 12h e não havia absolutamente NENHUM convidado no evento. Os tios já estavam se preparando para custear os prejuízos, quando repentinamente começou a chegar gente e lotar o salão. Foi o maior lucro registrado até então. Sentíamos verdadeiramente o espírito de união e parceria que o Capítulo havia formado. Iniciamos 11 (onze) novos membros. E não foi qualquer iniciação, pois nos anos subsequentes, fizemos levantamento de que mais de 80% dos iniciados permaneceram no Capítulo, e dentre esses 11, 4 foram Mestres Conselheiros. Atribuo isso ao espírito de irmandade que cultivamos no decorrer do semestre.
<br><br>
Percebi que tive um enorme amadurecimento durante o período de Mestre Conselheiro. Além disso, vi que os irmãos estavam mais unidos, fazendo coisas fora do Capítulo, se encontrando e sendo verdadeiramente amigos. Tenho certeza que os sucessos da gestão ocorreram justamente por esse senso de pertencimento, amizade e irmandade que cultivávamos. Sem a ajuda de todos os irmãos e tios, nada seria possível.
<br><br>
Durante o período em que fui MC, percebi que não sabia muita coisa, e tinha muito a aprender. Mas também aprendi a ser mais organizado, a ser mais humano, mais empático e pensar de maneira coletiva. Tais aprendizados dificilmente encontramos fora da Ordem DeMolay. 
<br><br>
Viva a Ordem DeMolay, viva o Capítulo São José!`
        },
        2017.2: {
            gestao: '2017.2',
            mestreConselheiro: 'Lucas da Silva Souza Ferreira',
            idadeAssumida: '17 anos quando assumiu',
            // frase: 'Detalhes indisponíveis',
            imagem: '../style/images/mcs/Lucas da Silva Souza Ferreira.jpeg',
            texto: 'Na minha opinião, foi uma gestão de muito engajamento e grandes mudanças dentro do capítulo! A galera chegava cedo e todooo mundo ficava junto, trocando ideia, brincando, conversando… Todo mundo muito unido! Participamos de TODAS as campanhas estaduais que foram realizadas, inclusive ganhando alguns prêmios, participamos do congresso estadual, as filantropias sempre com bastante gente participando e sempre com MUITAS doações! Criamos o regimento interno, compramos as fantasias para a sessão de elevação, trouxemos as tias pra perto, mudamos muita coisa em termos de ritualística, aliás, chegamos ao final da gestão com irmãos fazendo a sessão sem nem estar com o ritual nas mãos! Pra mim, foi uma gestão sensacional e eu acredito que tenha marcado MUITA gente, desde os tios, irmãos e tias! No final do ano, fizemos uma confraternização no sítio do Tio Dirceu, aonde foram TODOS os membros! Sou suspeito, mas pra mim, a melhor gestão rsrsrsrs!'
        },
        2017.1: {
            gestao: '2017.1',
            mestreConselheiro: 'Jonathan Christopher Machado',
            idadeAssumida: '18 anos quando assumiu',
            // frase: 'Detalhes indisponíveis',
            imagem: '../style/images/mcs/Jonathan Christopher Machado.jpeg',
            texto: `Uma coisa que me marcou muito na Ordem foi a palavra do Irmão André Carvalho. Não lembro exatamente o que ele disse, nem se foi na minha posse ou desposse como Mestre Conselheiro, mas lembro que aquilo já mexeu comigo naquele dia e ganhou ainda mais significado quando, infelizmente, ele veio a falecer.
<br><br>Quando iniciei no DeMolay, ele foi um dos irmãos que mais me integrou. Me buscava em casa para vender convites, conversava comigo, me incluía nas atividades e ajudou muito a manter acesa em mim aquela chama de continuar frequentando e participando da Ordem.
<br><br>Com o tempo acabamos não sendo tão próximos, até pela diferença de idade, mas quando ele faleceu foi um baque muito grande e me fez perceber o quanto aquelas pequenas atitudes tinham sido importantes para mim. 
<br><br>Um grande resumo da minha gestão seria a própria palavra gestão. Ser Mestre Conselheiro me ensinou que não basta apenas fazer, é preciso saber liderar, ouvir, delegar e lidar com pessoas.
Foi um aprendizado que levei para a vida e sou muito grato aos meus conselheiros, Matheus Ferreira e Lucas Ferreira, e principalmente ao Irmão Marcelo Boss, hospitaleiro na época, que fez um trabalho espetacular e foi fundamental naquela gestão.`
        },
        2016.2: {
            gestao: '2016.2',
            mestreConselheiro: 'Mestre Conselheiro 2016.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2016.2.'
        },
        2016.1: {
            gestao: '2016.1',
            mestreConselheiro: 'Mestre Conselheiro 2016.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2016.1.'
        },
        2015.2: {
            gestao: '2015.2',
            mestreConselheiro: 'Mestre Conselheiro 2015.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2015.2.'
        },
        2015.1: {
            gestao: '2015.1',
            mestreConselheiro: 'Mestre Conselheiro 2015.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2015.1.'
        },
        2014.2: {
            gestao: '2014.2',
            mestreConselheiro: 'Mestre Conselheiro 2014.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2014.2.'
        },
        2014.1: {
            gestao: '2014.1',
            mestreConselheiro: 'Mestre Conselheiro 2014.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2014.1.'
        },
        2013.2: {
            gestao: '2013.2',
            mestreConselheiro: 'Mestre Conselheiro 2013.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2013.2.'
        },
        2013.1: {
            gestao: '2013.1',
            mestreConselheiro: 'Mestre Conselheiro 2013.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2013.1.'
        },
        2012.2: {
            gestao: '2012.2',
            mestreConselheiro: 'Mestre Conselheiro 2012.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2012.2.'
        },
        2012.1: {
            gestao: '2012.1',
            mestreConselheiro: 'Mestre Conselheiro 2012.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2012.1.'
        },
        2011.2: {
            gestao: '2011.2',
            mestreConselheiro: 'Mestre Conselheiro 2011.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2011.2.'
        },
        2011.1: {
            gestao: '2011.1',
            mestreConselheiro: 'Mestre Conselheiro 2011.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2011.1.'
        },
        2010.2: {
            gestao: '2010.2',
            mestreConselheiro: 'Mestre Conselheiro 2010.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2010.2.'
        },
        2010.1: {
            gestao: '2010.1',
            mestreConselheiro: 'Mestre Conselheiro 2010.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2010.1.'
        },
        2009.2: {
            gestao: '2009.2',
            mestreConselheiro: 'Mestre Conselheiro 2009.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2009.2.'
        },
        2009.1: {
            gestao: '2009.1',
            mestreConselheiro: 'Mestre Conselheiro 2009.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2009.1.'
        },
        2008.2: {
            gestao: '2008.2',
            mestreConselheiro: 'Mestre Conselheiro 2008.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2008.2.'
        },
        2008.1: {
            gestao: '2008.1',
            mestreConselheiro: 'Mestre Conselheiro 2008.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2008.1.'
        },
        2007.2: {
            gestao: '2007.2',
            mestreConselheiro: 'Mestre Conselheiro 2007.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2007.2.'
        },
        2007.1: {
            gestao: '2007.1',
            mestreConselheiro: 'Mestre Conselheiro 2007.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2007.1.'
        },
        2006.2: {
            gestao: '2006.2',
            mestreConselheiro: 'Eduardo Roberto Rosa Junior',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: '../style/images/mcs/Eduardo Roberto Rosa Junior.jpeg',
            texto: 'Detalhes sobre a gestão 2006.2.'
        },
        2006.1: {
            gestao: '2006.1',
            mestreConselheiro: 'Eduardo Roberto Rosa Junior',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: '../style/images/mcs/Eduardo Roberto Rosa Junior.jpeg',
            texto: 'Detalhes sobre a gestão 2006.1.'
        },
        2005.2: {
            gestao: '2005.2',
            mestreConselheiro: 'Mestre Conselheiro 2005.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2005.2.'
        },
        2005.1: {
            gestao: '2005.1',
            mestreConselheiro: 'Mestre Conselheiro 2005.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2005.1.'
        },
        2004.2: {
            gestao: '2004.2',
            mestreConselheiro: 'Mestre Conselheiro 2004.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2004.2.'
        },
        2004.1: {
            gestao: '2004.1',
            mestreConselheiro: 'Ney Müller',
            idadeAssumida: '19 anos quando assumiu',
            frase: 'Se você seguir as 7 virtudes cardeais, vai longe.',
            imagem: '../style/images/mcs/Ney Müller.jpeg',
            texto: 'Lidar com outras pessoas é desafiador demais, mas é o que nos faz crescer.'
        },
        2003.2: {
            gestao: '2003.2',
            mestreConselheiro: 'Mestre Conselheiro 2003.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2003.2.'
        },
        2003.1: {
            gestao: '2003.1',
            mestreConselheiro: 'Mestre Conselheiro 2003.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2003.1.'
        },
        2002.2: {
            gestao: '2002.2',
            mestreConselheiro: 'Mestre Conselheiro 2002.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2002.2.'
        },
        2002.1: {
            gestao: '2002.1',
            mestreConselheiro: 'Mestre Conselheiro 2002.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2002.1.'
        },
        2001.2: {
            gestao: '2001.2',
            mestreConselheiro: 'Mestre Conselheiro 2001.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2001.2.'
        },
        2001.1: {
            gestao: '2001.1',
            mestreConselheiro: 'Mestre Conselheiro 2001.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2001.1.'
        },
        2000.2: {
            gestao: '2000.2',
            mestreConselheiro: 'Mestre Conselheiro 2000.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2000.2.'
        },
        2000.1: {
            gestao: '2000.1',
            mestreConselheiro: 'Mestre Conselheiro 2000.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 2000.1.'
        },
        1999.2: {
            gestao: '1999.2',
            mestreConselheiro: 'Mestre Conselheiro 1999.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1999.2.'
        },
        1999.1: {
            gestao: '1999.1',
            mestreConselheiro: 'Mestre Conselheiro 1999.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1999.1.'
        },
        1998.2: {
            gestao: '1998.2',
            mestreConselheiro: 'Mestre Conselheiro 1998.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1998.2.'
        },
        1998.1: {
            gestao: '1998.1',
            mestreConselheiro: 'Mestre Conselheiro 1998.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1998.1.'
        },
        1997.2: {
            gestao: '1997.2',
            mestreConselheiro: 'Mestre Conselheiro 1997.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1997.2.'
        },
        1997.1: {
            gestao: '1997.1',
            mestreConselheiro: 'Mestre Conselheiro 1997.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1997.1.'
        },
        1996.2: {
            gestao: '1996.2',
            mestreConselheiro: 'Mestre Conselheiro 1996.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1996.2.'
        },
        1996.1: {
            gestao: '1996.1',
            mestreConselheiro: 'Mestre Conselheiro 1996.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1996.1.'
        },
        1995.2: {
            gestao: '1995.2',
            mestreConselheiro: 'Mestre Conselheiro 1995.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1995.2.'
        },
        1995.1: {
            gestao: '1995.1',
            mestreConselheiro: 'Mestre Conselheiro 1995.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1995.1.'
        },
        1994.2: {
            gestao: '1994.2',
            mestreConselheiro: 'Mestre Conselheiro 1994.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1994.2.'
        },
        1994.1: {
            gestao: '1994.1',
            mestreConselheiro: 'Mestre Conselheiro 1994.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1994.1.'
        },
        1993.2: {
            gestao: '1993.2',
            mestreConselheiro: 'Mestre Conselheiro 1993.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1993.2.'
        },
        1993.1: {
            gestao: '1993.1',
            mestreConselheiro: 'Mestre Conselheiro 1993.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1993.1.'
        },
        1992.2: {
            gestao: '1992.2',
            mestreConselheiro: 'Mestre Conselheiro 1992.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1992.2.'
        },
        1992.1: {
            gestao: '1992.1',
            mestreConselheiro: 'Mestre Conselheiro 1992.1',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1992.1.'
        },
        1991.2: {
            gestao: '1991.2',
            mestreConselheiro: 'Mestre Conselheiro 1991.2',
            idadeAssumida: 'Idade desconhecida',
            frase: 'Detalhes indisponíveis',
            imagem: null,
            texto: 'Detalhes sobre a gestão 1991.2.'
        }
    };

    return mockData[id] || null;
}

function mySpan(id) {
    const dados = getDataById(id);

    if (!dados) {
        console.warn(`ID "${id}" não encontrado`);
        dados = {
            gestao: 'Gestão XXXX.Y',
            mestreConselheiro: 'Mestre Conselheiro desconhecido',
            idadeAssumida: 'Idade desconhecida',
            texto: 'Detalhes indisponíveis.',
            imagem: 'null'
        };
    }

    const existente = document.querySelector('.popup-overlay');
    if (existente) existente.remove();

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const modal = document.createElement('div');
    modal.className = 'popup-modal';

    modal.innerHTML = `
    <div class="mySpan" style="">
        <button class="popup-close" aria-label="Fechar">&times;</button>

        <div class="popup-header">
        ${dados.imagem ? `<img src="${dados.imagem}" alt="" class="popup-image">` : ''}
        <h3 class="popup-title">Gestão  ${dados.gestao}</h3>
        </div>
        <br>
        <div class="popup-content">
            <p><strong>Mestre Conselheiro:</strong> ${dados.mestreConselheiro || 'N/A'}</p>
            <p><strong>Idade:</strong> ${dados.idadeAssumida || 'N/A'}</p>
            <p><em>${dados.frase || ''}</em></p>
            ${dados.texto ? `<p>${dados.texto}</p>` : ''}
        </div>
    </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const closeBtn = modal.querySelector('.popup-close');

    function fechar() {
        overlay.remove();
        document.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
        if (e.key === 'Escape') fechar();
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) fechar();
    });

    closeBtn.addEventListener('click', fechar);
    document.addEventListener('keydown', onKey);
}