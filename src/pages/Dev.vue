<script setup>
import Card from "primevue/card";
import { Icon } from "@iconify/vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
</script>

<template>
  <div id="to-do-app">
    <h1 class="montserrat-light">Developer</h1>
    <div style="padding-inline: 55px; width: 100vw" id="content">
      <Card>
        <template #title
          ><p class="montserrat-bold">Merhaba! Ben Alper</p></template
        >
        <template #content>
          <div id="dev-card">
            <p class="montserrat-light">
              Merhaba, ben Alper. 19 Yaşındayım. Kendi kendini yetiştiren bir
              yazılım geliştiricisiyim.
            </p>

            <p class="montserrat-bold">Aşina Olduğum Teknolojiler</p>
            <div id="technologies">
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon icon="skill-icons:html" width="48"></Icon
              ></a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon icon="skill-icons:css" width="48"></Icon
              ></a>
              <a
                href="https://www.w3schools.com/js/"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon icon="skill-icons:javascript" width="48"></Icon
              ></a>
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                <Icon icon="skill-icons:nodejs-dark" width="48"></Icon>
              </a>
              <Icon icon="skill-icons:git" width="48"></Icon>
              <Icon icon="skill-icons:docker" width="48"></Icon>
              <Icon icon="skill-icons:linux-dark" width="48"></Icon>
              <Icon icon="skill-icons:python-dark" width="48"></Icon>
              <Icon icon="skill-icons:figma-dark" width="48"></Icon>
              <Icon icon="skill-icons:windows-dark" width="48"></Icon>
              <Icon icon="skill-icons:tailwindcss-dark" width="48"></Icon>
              <Icon icon="skill-icons:bootstrap" width="48"></Icon>
              <Icon icon="devicon:proxmox-wordmark" width="48"></Icon>
              <Icon icon="lineicons:vmware" width="48"></Icon>
              <Icon icon="skill-icons:sass" width="48"></Icon>
              <Icon icon="skill-icons:aws-dark" width="48"></Icon>
              <Icon icon="skill-icons:azure-dark" width="48"></Icon>
              <Icon icon="skill-icons:arch-dark" width="48"></Icon>
              <Icon icon="logos:fedora" width="48"></Icon>
            </div>

            <p class="montserrat-bold">Öğrenmekte Olduklarım</p>
            <div id="technologies">
              <Icon icon="skill-icons:typescript" width="48"></Icon>
              <Icon icon="devicon:blazor" width="48"></Icon>
              <Icon icon="skill-icons:dotnet" width="48"></Icon>
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon icon="skill-icons:vuejs-dark" width="48"></Icon
              ></a>
            </div>
          </div>
        </template>

        <template #subtitle
          ><p class="montserrat-bold">
            Bu Component PrimeVue Kullanılarak Oluşturulmuştur
          </p></template
        >
      </Card>

      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader
            ><span class="montserrat-bold">
              Neden Beni Tercih Etmelisiniz?
            </span></AccordionHeader
          >
          <AccordionContent>
            <span class="montserrat-light">
              Benimle çalışmayı tercih etmeniz için birkaç neden:
            </span>
            <ul class="montserrat-light">
              <li>
                Hızlı öğrenme yeteneğim sayesinde yeni teknolojilere hızla
                adapte olabilirim.
              </li>
              <li>
                Problem çözme becerilerimle projelerinizi başarıyla
                tamamlayabilirim.
              </li>
              <li>
                Takım çalışmasına yatkınlığım sayesinde işbirliği içinde verimli
                bir şekilde çalışabilirim.
              </li>
              <li>Yenilikçi fikirlerimle projelerinize değer katabilirim.</li>
              <li>
                İletişim becerilerimle projelerinizi zamanında ve
                beklentilerinizi karşılayacak şekilde tamamlayabilirim.
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="1">
          <AccordionHeader
            ><span class="montserrat-bold"
              >İletişim Bilgilerim</span
            ></AccordionHeader
          >
          <AccordionContent>
            <span class="montserrat-light">
              İletişim için aşağıdaki kanalları kullanabilirsiniz:
            </span>
            <ol
              class="montserrat-light"
              style="display: flex; gap: 20px; flex-direction: column"
            >
              <li>Email: <a href="mailto:alperelieyi59@gmail.com">Tıkla</a></li>
              <li>
                LinkedIn:
                <a href="https://www.linkedin.com/in/alper-elieyi-7b33602a3/"
                  >Tıkla</a
                >
              </li>
            </ol>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="2">
          <AccordionHeader
          ><span class="montserrat-bold"
          >Projelerim</span
          ></AccordionHeader
          >
          <AccordionContent>
            <span class="montserrat-light">
              İletişim için aşağıdaki kanalları kullanabilirsiniz:
            </span>
            <ol
                class="montserrat-light"
                style="display: flex; gap: 20px; flex-direction: column"
            >
              <li>Email: <a href="mailto:alperelieyi59@gmail.com">Tıkla</a></li>
              <li>
                LinkedIn:
                <a href="https://www.linkedin.com/in/alper-elieyi-7b33602a3/"
                >Tıkla</a
                >
              </li>
            </ol>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>
