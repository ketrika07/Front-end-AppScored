import { IonAccordionGroup, IonAccordion, IonItem, IonAvatar, IonLabel, IonNote, IonList, IonBadge, IonGrid, IonRow, IonCol } from "@ionic/react";

interface AttackProps {
    key: string;
    rang: number;
    note: string;
    tirsPM: string;
    tirsCApm: string;
    dribblesPM: string;
    fautesSubiesPM: string;
    nomEquipe: string;
    nomCompetition: string;
}

const AccordionAttack: React.FC<AttackProps> = ({
    note,
    rang,
    tirsPM,
    tirsCApm,
    dribblesPM,
    fautesSubiesPM,
    nomEquipe,
    nomCompetition,

}) =>{
    return(

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
                    <IonCol>Tirs pm : {tirsPM}</IonCol>
                  </IonRow>
                  
                  <IonRow>
                    <IonCol>Tirs CA pm : {tirsCApm}</IonCol>
                    <IonCol>Dribbles pm : {dribblesPM}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Fautes subies pm: {fautesSubiesPM}</IonCol>
                  </IonRow>

                </IonGrid>
                
              </IonList>
            </div>
            </IonAccordion>

    </IonAccordionGroup>
 
    );
};
export default AccordionAttack;
