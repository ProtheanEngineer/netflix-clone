// Componente para cerrar sesión del clon de Netflix

import { signOut } from 'next-auth/react';
import React from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
  visible?: boolean;
}

// Cuando este componente sea visible, utilizar el hook "UseCurrentUser", obteniendo información del usuario loggeado
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
          {/* Aquí se informa el nombre del usuario, justo a continuación de la imagen "default-blue", la cual está puesta hardcodeada */}
          <p className="text-white text-sm group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      {/* Aquí está el botón de cerrar sesión, donde cuando se clica se llama a la función signOut (en el repositorio node_modules/next-auth/src/react/index.tsx) */}
      <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
        Sign out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu;