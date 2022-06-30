import { Link } from "react-router-dom"
import Main from "../components/Main";

const Createpost = () => {
    return (
        <Main>
            <Link to="/">Go home</Link>
                <div class="flex flex-col p-10 border border-violet-light">

                    
                    
                    <form action="">

                        <div class="flex flex-col space-y-2">
                            <label for="username"></label>
                            <input class="border-violet-light border" placeholder="title" type="text" id="title" name="title"/>
                            
                            <textarea placeholder="content" name="" id="" cols="30" rows="10"></textarea>
                            
                            <label for="title"></label>
                            <input class="border-violet-light border" placeholder="category" type="text" id="category" name="category"/>
                            <input class="border-violet-light border" placeholder="question" type="text" id="category" name="category"/>
                            <ul className="space-x-4 ">
                                <input placeholder="answer A" className="border " type="text" />
                                <input placeholder="answer B" className="border " type="text" />
                                <input placeholder="answer C" className="border " type="text" />
                            </ul>
                            <button class="border-violet-light border hover:bg-violet-dark hover:text-white open-sans text-violet-dark text-xl justify-center flex place-items-center h-12 w-2/12 ">
                                    CREATE POST
                            </button>
                        </div>
                    </form>

                </div>
                    
                    
        </Main>
        )    
}

export default Createpost;