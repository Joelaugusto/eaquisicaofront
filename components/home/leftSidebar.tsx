import SideButton from "./SideButton";
import { FiSettings, FiInfo, FiUser } from 'react-icons/fi'

import { BiMessageAltDetail } from 'react-icons/bi'

import { AiOutlineHome } from 'react-icons/ai'

const LeftSidebar = () => (
  <div>
    <SideButton icon={<AiOutlineHome size={26} />} text="Início" to="/"/>
    <SideButton icon={<FiInfo size={26} />} text="Anúncios" to="/"/>
    <SideButton icon={<BiMessageAltDetail size={26} />} text="Mensagens" to="/messages"/>
    <SideButton icon={<FiUser size={26} />} text="Perfil" to="/account"/>
    <SideButton icon={<FiSettings size={26} />} text="Definições" to="/settings"/>
  </div>
)

export default LeftSidebar;