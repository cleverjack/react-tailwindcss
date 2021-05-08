import { Link, useHistory } from 'react-router-dom'
import { logoImg } from "../../assets/images"
import { IconBlueSearch, IconBreadcrumb } from "../../assets/icons"

const Header = (props) => {
    const routerHistory = useHistory()

    return (
        <>
            <div className="h-16 border-b bg-white shadow-sm lg:block hidden">
                <div className="container mx-auto h-full flex items-center">
                    <img src={logoImg} />
                    <div className="flex-1"></div>
                    <div className="flex items-center text-brand-text font-semibold">
                        <div className="flex items-center rounded-full bg-gray-100 py-1 px-3 w-80 mr-6">
                            <input className="flex-1 outline-none bg-transparent" placeholder="Topics, Lesson, Papper, Quiz..." />
                            <IconBlueSearch width={16} height={16} />
                        </div>
                        <div className="flex items-center px-2 border-l-2 border-r-2">
                            <Link to="/"><span className="px-2 cursor-pointer">Leaving Cert</span></Link>
                            <Link to="/"><span className="px-2 cursor-pointer">Junior Cert</span></Link>
                        </div>
                        <Link to="/login"><span className="px-2 mx-2 cursor-pointer">Login</span></Link>
                        <button className="rounded border-2 border-brand-darkblue text-brand-blue px-3 py-2 font-semibold" onClick={() => routerHistory.push("/signup")}>Sign up</button>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm lg:hidden block">
                <div className="container mx-auto h-full items-center">
                    <div className="flex items-center pt-8 pb-2">
                        <div>
                            <IconBreadcrumb className="cursor-pointer"/>
                        </div>
                        <div className="flex-1 justify-center items-center">
                            <img src={logoImg} className="mx-auto"/>
                        </div>
                        <div>
                            <div className="w-10 h-10 rounded-full bg-gray-10 flex items-center justify-center font-semibold text-brand-blue">
                                GC
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center text-brand-text font-semibold pb-2">
                        <div className="flex items-center rounded-full bg-gray-100 py-1 px-3 w-full">
                            <input className="flex-1 outline-none bg-transparent" placeholder="Topics, Lesson, Papper, Quiz..." />
                            <IconBlueSearch width={16} height={16} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Header;