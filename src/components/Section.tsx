import CardGrid from "./CardGrid";
import  CardGroup, { Card }  from "./CardGroup";
import CardSocialMedia from "./CardSocialMedia";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

interface SectionProps {
}

export default function Section(props: SectionProps) {
    const meusCards: Card[] = [
        { titulo: 'Projeto 1', conteudo: <p>Meu objetivo é reduzir as filas e
            garantir que todos tenham acesso rápido aos procedimentos cirúrgicos e
            tratamentos essenciais.
            </p>, header: 'Facilitação de cirurgias e tratamentos médicos'},
        //{ titulo: 'Card 2', conteudo: <img src="/image.jpeg" alt="Imagem 2" width={1000} /> },
        { titulo: 'Projeto 2', conteudo: <p> Quero ampliar e melhorar os serviços
            de atendimento básico, com um foco especial na prevenção e no atendimento
            humanizado.
            </p>, header: 'Melhorias no atendimento à saúde primária'},
        { titulo: 'Projeto 3', conteudo: <p>  Vou trabalhar para criar programas de suporte que
            garantam assistência e cuidados domiciliares para idosos e pessoas em condições
            de vulnerabilidade.
            </p>, header: 'Apoio às famílias e idosos'},
      ];

    let title = "SOBRE MIM";
    let describe = "Com mais de 30 anos de experiência como técnica de enfermagem, dediquei minha vida a cuidar da saúde e bem-estar da nossa comunidade. Agora, estou pronta para levar esse compromisso ao próximo nível como candidata a Vereadora por Atalaia."

            
    return (
        <section className="">
            <div id="sobre">
                <InfoCard title={title} describe={[describe]}/>
            </div>

            <div className="p-4 flex justify-center" id='projetos'>
              <CardGroup cards={meusCards} />
            </div>
            {/*
            <InfoCard 
                title="UM TITULO AQUI "
                describe={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}
                color="bg-white" 
                textColor="text-black"/>
            */}

            <div className="flex justify-center">
                <ImageCard path_image="/motivos.jpg"  />
            </div>

            

            <div>
                <InfoCard 
                    title="06/10 É 15666!"
                    describe={["No dia 06 de outubro, vote: Mércia da Saúde - 15666",
                                "Juntos podemos continuar com a mudança de Atalaia!",
                                "Razão social: Dirlene Mércia Cavalcante da Silva",
                                "CNPJ: 56.473.096/0001-60",
                                "Partido: MBD e PP",
                                "Coligação: Coração Do Povo"]}
                />
            </div>

            <div className="card-container flex-col-reverse lg:flex-row lg:justify-between">
                <CardSocialMedia name="Experiência comprovada em saúde" link='#' icon='Hospital' />
                <CardSocialMedia name=" Compromisso com o cuidado" link='#' icon='ApertoMaos' />
                <CardSocialMedia name="Continuar o progresso" link='#' icon='Foguete' />
                <CardSocialMedia name="Portas abertas sempre" link='#' icon='Chave' />
            </div>

            <div id="contato">
                <InfoCard 
                    title="CONTATO" 
                    describe={["Siga nosso Instagram: @merciadasaude","Nosso e-mail: contato@marciadasaude.com.br"]}
                    textColor="text-white"/>
            </div>

        </section>
    )
}