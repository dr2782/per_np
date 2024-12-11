import Image from "next/image"
import clsx from "clsx"

export default function ArticleFacade({title = "no title", brief = "no brief", type = "Blog", thumbURL = ""}) {
    return(
        <article className="flex flex-col items-center bg-white rounded-lg border-y-white border-t-8 mb-8">
            <header className="basis-1/4">
                <p className="text-3xl">{title}</p>
            </header>
            <main className="flex flex-col items-center w-4/5">
                <Image 
                    src={thumbURL}
                    alt="artist media"
                    width="500"
                    height="500"
                    className="px-10 basis-1/4"></Image>

                <p className="basis-3/4">{brief}</p>
            </main>
            <footer className="self-end border-t-8 border-white">
                <p className={clsx( type == "Blog" && "bg-blue-600", 
                                    type== "Entrevista" && "bg-purple-600", 
                                    type=="Reseña" && "bg-blue-400",
                                    type=="Evento" && "bg-pink-500",
                                    "text-white", 
                                    "rounded-lg",
                                    "p-2"

                )} >⬤ {type}</p>
            </footer>
        </article>
    )
}