import {
    User as UserIcon,
    ThumbsUp as ThumbsUpIcon,
    SmileySad as SmileySadIcon 
} from "phosphor-react";
import Button from "../components/Button";
import Layout from "../components/template/Layout";


export default function Identity() {
    return (
        <Layout>
            <div className="flex flex-col items-center min-h-[20rem]">
                <UserIcon width={60} height={60}/>
                <span className="mb-4">Identifique-se</span>
                
                <form action="" className={`flex flex-col items-center`}>
                    <input type="text" placeholder="telefone" maxLength={9} className={`
                        h-10 w-44 bg-zinc-100 rounded outline-none
                        text-center text-zinc-700 text-lg font-semibold
                        placeholder:text-[#c5c9a5] placeholder:font-[ui-sans.serif]
                        placeholder:font-semibold
                    `} />
                    
                    <div className="flex flex-col items-center">
                        <span className={`
                            flex mt-8 mb-2 justify-center text-3xl font-semibold
                            `}>Olá Daniela!</span>
                        
                        <Button
                            caption="Sou eu"
                            icon={<ThumbsUpIcon size={18} weight="duotone" />} 
                            className="items-center"
                        />
                        
                        <div className="flex w-full mt-6 justify-end">
                            <button className="flex flex-col gap-0 items-center text-xs font-light underline">
                                <SmileySadIcon size={18} weight="fill"  />
                                não sou eu
                            </button>
                        </div>
                    </div>
                    
                        
                </form>
            </div>
        </Layout>
    )
}