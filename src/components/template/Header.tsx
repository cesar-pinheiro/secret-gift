import Image from 'next/image'
import { Gift as GiftIcon } from 'phosphor-react'

import giftImage from '../../../public/gift.jpg'

export default function Header(): JSX.Element {
    return (
        <header className={`
            flex w-full h-20 p-2 justify-end items-center gap-2 select-none
            bg-[#7D8F69] rounded-t-2xl rounded-b-lg
        `}>
            <span className="text-lg font-medium italic">Presente Secreto</span>
            <GiftIcon size={44} />
        </header>
    )
}