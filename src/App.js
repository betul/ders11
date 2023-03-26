import { useState } from "react"

function App() {
  const [arama, aramaGuncelle] = useState("")

  const urunler = [
    "Kalem",
    "Silgi",
    "Defter",
    "Uç"
  ]

  function aramaYap(olay) {
    aramaGuncelle(olay.target.value)
  }

  const filtreliUrunler = urunler.filter((eleman) => eleman.includes(arama))

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4"> <input value={arama} type="text" onChange={aramaYap} /></div>
        </div>

        <div className="row">
          <div className="col-md-4 pt-4">
            {filtreliUrunler.map((eleman) => <p>{eleman}</p>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App