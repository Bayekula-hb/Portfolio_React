import Div from "../div/div"

const Card = ({idCard, classCard, classDiv1, classDiv2, contentDiv1, contentDiv2, contentDiv21, contentDiv22})=>{
    return(
        <div id={idCard} className={classCard}>
            <Div className={classDiv1} content1={contentDiv1} content2={contentDiv2}/>
            <Div className={classDiv2} content1={contentDiv21} content2={contentDiv22}/>
        </div>
    )
}
export default Card;