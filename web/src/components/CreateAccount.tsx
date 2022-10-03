import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";

import { Check } from "phosphor-react";
import { useState } from "react";

import { Input } from "./Form/input";

export function CreateAccount() {
  const [date, setDate] = useState(false);

  return (
    <div>
      <Dialog.Trigger className="bg-[#65c0598e] flex items-center justify-center py-2 px-3 text-white font-bold rounded-lg hover:bg-[#97fccd54]">
        Criar conta
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed">
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
            <Dialog.Title className="text-3xl font-black flex justify-center">Cadastro de Usuário</Dialog.Title>
            <Dialog.Description className="flex justify-center">
              Crie sua conta e junte-se a milhares de players!
            </Dialog.Description>
            <hr className="mt-5 self-stretch rounded-lg overflow-hidden h-1 bg-nlw-gradient" />

            <form className="mt-5 flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Nome Completo</label>
                <Input 
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ex: João da Silva"
                />
              </div>

              <div className={`flex flex-col gap-1 ${date ? "text-white" : "text-zinc-500"}`}>
                <label htmlFor="name" className="text-white">Nascimento</label>
                <Input 
                  id="date"
                  name="date"
                  type="date"
                  placeholder="01/01/1990"
                  onChange={setDate}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Telefone</label>
                <Input 
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="(XX) 9XXXX-XXXX"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">E-mail</label>
                <Input 
                  id="email"
                  name="email"
                  type="text"
                  placeholder="email@mail.com.br"
                />
              </div>


              <div className="flex flex-col gap-2">
                <label htmlFor="name">Senha</label>
                <Input 
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*************"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Confirmação de Senha</label>
                <Input 
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*************"
                />
              </div>

              <label className="mt-4 flex items-center gap-2 text-sm">
                <Checkbox.Root className="w-8 h-5 p-0.5 bg-zinc-900">
                  <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p className="italic">
                  Declaro estar ciente dos <strong>Termos e Condições</strong> das <a href="#" className="text-lime-200 items-center font-bold">Políticas de Privacidade</a> ao criar minha conta.
                </p>
              </label>

              <div className="flex justify-around">
                <label className="mt-4 flex justify-center gap-4">
                  <button
                    type="submit"
                    className="bg-violet-900 px-8 h-8 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-800"
                  >
                    Criar conta
                  </button>
                </label>
                <label className="mt-4 flex justify-center gap-4">
                  <Dialog.Close className="bg-zinc-900 px-8 h-8 font-semibold rounded-md hover:bg-slate-900">
                    Cancelar
                  </Dialog.Close>
                </label>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </div>
  )
}
