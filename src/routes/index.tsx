import { createFileRoute } from "@tanstack/react-router";
import MieLanding from "@/components/MieLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método MIE · Daphne Lucchesi" },
      { name: "description", content: "O Método MIE é o passo a passo pra você sair do caos da rotina, parar de gritar e fazer seu filho te ouvir e te respeitar." },
      { property: "og:title", content: "Método MIE · Daphne Lucchesi" },
      { property: "og:description", content: "Maternidade presente, sem grito e sem culpa. Método criado por Daphne Lucchesi." },
    ],
  }),
  component: MieLanding,
});
