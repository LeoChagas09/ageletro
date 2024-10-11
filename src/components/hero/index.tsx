"use client";

import { Dialog } from "primereact/dialog";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Button } from "primereact/button";

export function Hero(){
  const [showDialog, setShowDialog] = useState(false);

   // Função para abrir o WhatsApp com o número selecionado
   const openWhatsApp = (number: string) => {
    const message = "Olá, gostaria de fazer um orçamento..."; // Mensagem padrão
    const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para a URL

    const whatsappURL = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setShowDialog(false); // Fechar o dialog após escolher o número
  };


  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>Instalação e manutenção de placa solar</h1>

        <Button icon="pi pi-whatsapp" label="Faça seu orçamento" severity="success"
         onClick={() => setShowDialog(true)} className={styles.link}></Button>
      </div>

      <Dialog 
          visible={showDialog} 
          onHide={() => setShowDialog(false)} 
          header="Selecione um número"
          style={{ width: '40vw' }}
          breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        >
          <div className={styles.numberOptions}>
            <p onClick={() => openWhatsApp("5518997824367")} className={styles.dialogOption}>
              <i className="pi pi-mobile"></i> André: (18) 99782-4367
            </p>
            <p onClick={() => openWhatsApp("5518996133410")} className={styles.dialogOption}>
              <i className="pi pi-mobile"></i> Gilcimar: (18) 99613-3410
            </p>
          </div>
        </Dialog>

      <div className={styles.contentBanner}>
        <Image className={styles.banner} src="/banner.jpg" alt="Banner" priority={true} quality={100} fill={true}/>
      </div>

    </main>
    
  )
}