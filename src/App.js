import Kitap from "./Kitap"
import kitaplar from "./veri"

const App = ()=> {

    return (
       <>
        {   kitaplar.map(   bilgi=> <Kitap kitap={bilgi} />   )   }
       </>
    )
}

export default App