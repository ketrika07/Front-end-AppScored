// SegmentedPage.tsx
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
import Accordion from '../components/Accordion';
import { filter } from 'ionicons/icons';
import axios from 'axios';

interface Equipe {
    idGeneral: string;
    rang: number;
    note: string;
    buts: string;
    tirePM: string;
    jaune: string;
    rouge: string;
    possession: string;
    passesReussies: string;
    aeriensGagnes: string;
    equipe: {
      idEquipe: string;
      nomEquipe: string;
      competition: {
        idCompetition: string;
        nomCompetition: string;
      };
    };
  }
  

const SegmentedPage: React.FC = () => {
  const [equipeData, setEquipeData] = useState<Equipe[]>([]);
  const [activeTab, setActiveTab] = useState("general");

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (tab: string) => {
    const endpoint = `https://localhost:7221/api/WhoScored/Generals/${tab}`;

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
                {/* Add the back button to navigate back to the Menu */}
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/menu" />
                </IonButtons>
                    <IonTitle>General Stats</IonTitle>
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
        
        <IonContent fullscreen>
        {equipeData.map((equipe, index) => (
        <Accordion
            key={equipe.idGeneral}
            rang={index+1}
            note={equipe.note}
            buts={equipe.buts}
            tirePM={equipe.tirePM}
            jaune={equipe.jaune}
            rouge={equipe.rouge}
            possession={equipe.possession}
            passesReussies={equipe.passesReussies}
            aeriensGagnes={equipe.aeriensGagnes}
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

export default SegmentedPage;
    