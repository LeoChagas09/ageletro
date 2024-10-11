"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  types: string[]; // Lista de tipos de serviço
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [visible, setVisible] = useState(false);

  // Simulando uma chamada para buscar os serviços
  useEffect(() => {
    const servicesData: Service[] = [
      { id: 1, title: "Painel Solar", description: "Instalação e manutenção de painéis solares.", image: "/service-solar.jpg", types: ["Instalação", "Manutenção", "Consultoria"] },
      { id: 2, title: "Eletricista", description: "Serviços de eletricista geral.", image: "/service-eletricista.jpg", types: ["Instalação elétrica", "Reparo", "Consultoria"] },
      { id: 3, title: "Refrigeração e Climatização", description: "Serviços de refrigeração e climatização.", image: "/service-clima.jpg", types: ["Instalação de ar-condicionado", "Manutenção", "Reparos"] },
    ];
    setServices(servicesData);
  }, []);

  // Função para abrir o diálogo e definir o serviço selecionado
  const openDialog = (service: Service) => {
    setSelectedService(service);
    setVisible(true);
  };

  // Função para fechar o diálogo
  const closeDialog = () => {
    setSelectedService(null);
    setVisible(false);
  };

  return (
    <>
      <Card className={styles.card}>
        <section className={styles.containerAbout} id="servicos">
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>Sobre</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              excepturi sequi pariatur. Corrupti commodi expedita eum iste
              mollitia? Iste molestiae corporis totam architecto repudiandae
              assumenda, praesentium dicta quos fugiat cum?
            </p>
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              src="/about-banner.jpg"
              alt="Imagem ilustrativa sobre a empresa"
              priority={true}
              quality={100}
              fill={true}
            />
          </div>
        </section>
      </Card>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {services.map((service) => (
          <article key={service.id} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                src={service.image}
                alt="Imagem do serviço"
                priority={true}
                quality={100}
                fill={true}
              />
            </div>
            <p>{service.title}</p>
            {/* Botão "Saiba mais" */}
            <div className={styles.info}>
              <Button
                outlined
                severity="secondary"
                className={styles.link}
                label="Saiba mais"
                onClick={() => openDialog(service)}
              />
            </div>
          </article>
        ))}
      </section>

      {/* Dialog para mostrar os detalhes do serviço */}
      <Dialog
        header={selectedService?.title}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={closeDialog}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
      >
        {selectedService && (
          <Card className={styles.dialogContent}>
            <p className={styles.serviceDescription}>
              {selectedService.description}
            </p>
            <ul className={styles.serviceTypes}>
              {selectedService.types.map((type, index) => (
                <li key={index} className={styles.serviceTypeItem}>
                  {type}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </Dialog>
    </>

    // <section className={styles.containerAbout}>
    //   <article className={styles.innerAbout}>
    //     <h1 className={styles.title}>Sobre</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi sequi pariatur. Corrupti commodi expedita eum iste mollitia? Iste molestiae corporis totam architecto repudiandae assumenda, praesentium dicta quos fugiat cum?</p>
    //   </article>

    //   <div className={styles.bannerAbout}>
    //     <Image className={styles.imageAbout} src="/about-banner.jpg" alt="Imagem ilustrativa sobre a empresa"
    //     priority={true} quality={100} fill={true}/>
    //   </div>
    // </section>
  );
}
