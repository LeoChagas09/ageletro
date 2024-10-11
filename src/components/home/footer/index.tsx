"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function Footer(){
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
    <footer id='contatos' className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>

          <div className={styles.item}>
            <i className="pi pi-envelope" style={{ fontSize: '2rem' }}></i>
            <div>
              <strong>Email André</strong>
              <p>teste@hotmail.com</p>
            </div>
          </div>

          <div className={styles.item}>
            <i className="pi pi-envelope" style={{ fontSize: '2rem' }}></i>
            <div>
              <strong>Email Gilcimar</strong>
              <p>teste@hotmail.com</p>
            </div>
          </div>

          <div className={styles.item}>
            <i className="pi pi-phone" style={{ fontSize: '2rem' }}></i>
            <div>
              <strong>Telefone André</strong>
              <p>(18) 99742-6985</p>
            </div>
          </div>

          <div className={styles.item}>
            <i className="pi pi-phone" style={{ fontSize: '2rem' }}></i>
            <div>
              <strong>Telefone Gilcimar</strong>
              <p>(18) 99725-6646</p>
            </div>
          </div>
        </div>
      </section>

      <Button icon="pi pi-whatsapp" label="Faça seu orçamento" 
      severity="success" onClick={() => setShowDialog(true)} className={styles.link}>
      </Button>

      <Dialog 
          visible={showDialog} 
          onHide={() => setShowDialog(false)} 
          header="Selecione um número"
          style={{ width: '40vw' }}
          breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        >
          <div className={styles.numberOptions}>
            <p onClick={() => openWhatsApp("5518997426985")} className={styles.dialogOption}>
              <i className="pi pi-mobile"></i> André: (18) 99742-6985
            </p>
            <p onClick={() => openWhatsApp("5518997256646")} className={styles.dialogOption}>
            <i className="pi pi-mobile"></i> Gilcimar: (18) 99725-6646
            </p>
          </div>
        </Dialog>

      <p className={styles.copyText}>Copyright {` \u00A9`} {`${new Date().getFullYear()}`} - Powered by Leonardo Chagas</p>
    </footer>
  )
}