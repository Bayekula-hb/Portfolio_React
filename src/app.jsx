import { Component } from "react/cjs/react.development";
import Header from "./component/header/header";

import Div from "./component/div/div"
import HbImg from "./Image/hb.png"
import Image from "./component/img/img"
import Card from "./component/card/card"
import Paragraph from "./component/paragraph/paragraph";

class App extends Component {

  render(){
    return  (
        <>
          <Header />
          <Card idCard="#Home" classCard="card card--home" 
          classDiv1="div card--home--div1" 
            contentDiv1={
            <Div className="div div--description"
             content1={<Paragraph className="p p-1-home" contentPara="Hello "/>}
             content2={<Paragraph className="p p-2-home" contentPara="I am "/>}
             content3={<Paragraph className="p p-3-home" contentPara="Hobed B. "/>}
             content4={<Paragraph className="p p-4-home" contentPara="Web developper"/>}/>
            }
          classDiv2="div card--home--div2" contentDiv21={<Image classeImg="img img--home" Src={HbImg} Alt="photo de hobed"/>}/>

          <Card idCard="#About" classCard="card card--about" 
          classDiv1="div card--home--div1" 
            contentDiv1={
            <Div className="div div--description"
             content1={<Paragraph className="p p-1-home" contentPara="Hello "/>}
             content2={<Paragraph className="p p-2-home" contentPara="I am "/>}
             content3={<Paragraph className="p p-3-home" contentPara="Hobed B. "/>}
             content4={<Paragraph className="p p-4-home" contentPara="Web developper"/>}/>
            }
          classDiv2="div card--home--div2" contentDiv21={<Image classeImg="img img--home" Src={HbImg} Alt="photo de hobed"/>}/>
        </>
    )
  }
}

export default App;