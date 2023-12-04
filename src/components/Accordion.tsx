import { IonAccordionGroup, IonAccordion, IonItem, IonAvatar, IonLabel, IonNote, IonList, IonBadge, IonGrid, IonRow, IonCol } from "@ionic/react";

interface AccordionProps {
  key: string;
  rang: number;
  note: string;
  buts: string;
  tirePM: string;
  jaune: string;
  rouge: string;
  possession: string;
  passesReussies: string;
  aeriensGagnes: string;
  nomEquipe: string;
  nomCompetition: string;
}

const Accordion: React.FC<AccordionProps> = ({
  note,
  rang,
  buts,
  tirePM,
  rouge,
  jaune,
  possession,
  passesReussies,
  aeriensGagnes,
  nomEquipe,
  nomCompetition,
}) => {
  return (
    <IonAccordionGroup>
            <IonAccordion value="first">
                <IonItem slot="header" color="light">

                  {/* <IonLabel>First Accordion</IonLabel> */}
                  <IonLabel>
                    <h4>{rang}.{nomEquipe}</h4>
                    <IonNote>{nomCompetition}</IonNote>
                  </IonLabel>

                  <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>

                </IonItem>
                <div className="ion-padding" slot="content">
              <IonList>
                <IonItem>
                  <IonLabel slot='start'>Note</IonLabel>
                  <IonBadge color="danger" slot='end'>{note}</IonBadge>
                </IonItem>

                <IonGrid>
                  <IonRow>
                    <IonCol>Buts : {buts}</IonCol>
                    <IonCol>Tire pm : {tirePM}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Discipline : <IonBadge color="warning">{jaune}</IonBadge>  <IonBadge color="danger">{rouge}</IonBadge></IonCol>
                    <IonCol></IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Possesion : {possession}%</IonCol>
                    <IonCol>Passes reussies : {passesReussies}%</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Aeriens gagnes : {aeriensGagnes}</IonCol>
                  </IonRow>
                </IonGrid>
                
              </IonList>
            </div>
            </IonAccordion>

    </IonAccordionGroup>
  );
};

export default Accordion;
