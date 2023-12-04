// import React from 'react';
// import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// function Menu() {
//   return (
//     <>
//       <IonMenu contentId="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Menu Content</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">This is the menu content.</IonContent>
//       </IonMenu>
//       <IonPage id="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonMenuButton></IonMenuButton>
//             </IonButtons>
//             <IonTitle>Menu</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
//       </IonPage>
//     </>
//   );
// }
// export default Menu;

import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation


function Menu() {
  const history = useHistory();

  const handleGeneralClick = () => {
    history.push('/segmented');
  };

  const handleAttackClick = () => {
    history.push('/attack');
  };

  const handleDefenseClick = () => {
    history.push('/defense');
  };

  return (
    <>
     
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Football Stats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {/* <IonItem button>
              <IonLabel>General</IonLabel>
            </IonItem> */}
             <IonItem button onClick={handleGeneralClick}>
                <IonLabel>General</IonLabel>
            </IonItem>
            {/* <IonItem button>
              <IonLabel>Attack</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Defense</IonLabel>
            </IonItem> */}
            <IonItem button onClick={handleAttackClick}>
              <IonLabel>Attack</IonLabel>
            </IonItem>
            <IonItem button onClick={handleDefenseClick}>
              <IonLabel>Defense</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Football Stats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
}

export default Menu;                                                                                                                                                                                                        
