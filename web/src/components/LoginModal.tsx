import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";

import { Input } from "./Form/input";
import { At, Check, Key, SignIn, X } from "phosphor-react";

export function LoginModal() {
  return (
    <div className="mr-1">
      <Dialog.Trigger className="bg-[#661e6552] flex items-center justify-center py-2 px-8 text-white font-bold rounded-lg hover:bg-[#3e3357]">
        Login
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed">
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
          <Dialog.Close className="ml-96 justify-end items-center py-1 px-1 rounded-md bg-zinc-800 hover:bg-red-400"><X size={20} /></Dialog.Close>
            <Dialog.Title className="text-3xl font-black">
              Área de Autenticação
            </Dialog.Title>
            <Dialog.Description>
              Faça o login para uma experiência mais imersiva!
            </Dialog.Description>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <At size={20} /><label htmlFor="email">E-mail</label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="exemplo@email.com.br"
                  size={30}
                />
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Key size={20}/><label htmlFor="password">Senha</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*************"
                  size={30}
                />
              </div>

              <label className="mt-2 flex items-center gap-2 text-sm">
                <Checkbox.Root className="w-5 h-5 p-0.5 bg-zinc-900">
                  <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                Manter-me logado
              </label>

              <div className="flex justify-between">
                <label className="mt-4 flex justify-center gap-4">
                  <button
                    type="submit"
                    className="bg-violet-900 px-20 h-8 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-800"
                  >
                    Logar
                    <SignIn size={24} />
                  </button>
                </label>
                <label className="mt-4 flex justify-center gap-4">
                  <button className="bg-zinc-800 px-4 h-8 rounded-md text-sm hover:bg-zinc-900">
                    Esqueci a senha
                  </button>
                </label>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </div>
  );
}
