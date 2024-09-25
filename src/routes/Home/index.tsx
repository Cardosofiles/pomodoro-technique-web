import { HandPalm, Play } from "phosphor-react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { FormProvider, useForm } from "react-hook-form";

import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { Countdown } from "./Countdown";
import { NewCycleForm } from "./NewCycleForm";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

export function HomePage() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="submit">
            <HandPalm size={24} />
            Encerrar
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
