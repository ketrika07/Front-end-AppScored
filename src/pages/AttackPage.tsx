// AttackPage.tsx

import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonSearchbar,
  IonLabel,
  IonAccordionGroup
} from '@ionic/react';
import AccordionAttack from '../components/AccordionAttack';
import { filter } from 'ionicons/icons';
import axios from 'axios';


  interface Equipe {
    idAttaque: string;
    rang: number;
    note: string;
    tirsPM: string;
    tirsCApm: string;
    dribblesPM: string;
    fautesSubiesPM: string;
    nomEquipe: string;
    nomCompetition: string;
    equipe: {
      idEquipe: string;
      nomEquipe: string;
      competition: {
        idCompetition: string;
        nomCompetition: string;
      };
    };
  }


const AttackPage: React.FC = () => {
  const [equipeData, setEquipeData] = useState<Equipe[]>([]);
  const [activeTab, setActiveTab] = useState("general");

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (tab: string) => {
    const endpoint = `https://localhost:7221/api/WhoScored/Attaques/${tab}`;

    try {
      const response = await axios.get<Equipe[]>(endpoint);
      setEquipeData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/menu" />
          </IonButtons>
          <IonTitle>Attack Stats</IonTitle>
        </IonToolbar>
        {/* <IonSearchbar value="Value"></IonSearchbar> */}
        
        <IonToolbar>
            <IonSearchbar></IonSearchbar>
        </IonToolbar>


        <IonToolbar>
                {/* <IonSegment value={activeTab} onIonChange={(e) => setActiveTab(e.detail.value as string)}>
                    <IonSegmentButton value="general">
                    <IonTitle>General</IonTitle>
                    </IonSegmentButton>
                    <IonSegmentButton value="domicile">
                    <IonTitle>Domicile</IonTitle>
                    </IonSegmentButton>
                    <IonSegmentButton value="exterieur">
                    <IonTitle>Exterieur</IonTitle>
                    </IonSegmentButton>
                </IonSegment> */}
                <IonSegment value={activeTab} onIonChange={(e) => setActiveTab(e.detail.value as string)}>
                    <IonSegmentButton value="general">
                        <IonLabel>General</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="exterieur">
                        <IonLabel>Exterior</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="domicile">
                        <IonLabel>Domicile</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Your segmented page content goes here */}
        {equipeData.map((equipe, index) => (
        <AccordionAttack
            key={equipe.idAttaque}
            rang={index+1}
            note={equipe.note}
            tirsPM={equipe.tirsPM}
            tirsCApm={equipe.tirsCApm}
            dribblesPM={equipe.dribblesPM}
            fautesSubiesPM={equipe.fautesSubiesPM}
            nomEquipe={equipe.equipe.nomEquipe}
            nomCompetition={equipe.equipe.competition.nomCompetition}
            />
        ))}
        <IonAccordionGroup >
            {/* <IonAccordion value="first">
                <IonItem slot="header" color="light">
                <IonLabel>First Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                First Content
                </div>
            </IonAccordion>
            <IonAccordion value="second">
                <IonItem slot="header" color="light">
                <IonLabel>Second Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                Second Content
                </div>
            </IonAccordion>
            <IonAccordion value="third">
                <IonItem slot="header" color="light">
                <IonLabel>Third Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                Third Content
                </div>
            </IonAccordion> */}
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton>
                <IonIcon icon={filter}></IonIcon>
            </IonFabButton>
            <IonFabList side="start">
                <IonButton onClick={() => fetchData('exterieur')}>Exterieur</IonButton>
                <IonButton onClick={() => fetchData('domicile')}>Domicile</IonButton>
                <IonButton onClick={() => fetchData('general')}>General</IonButton>
            </IonFabList>
            </IonFab>

            </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default AttackPage;
