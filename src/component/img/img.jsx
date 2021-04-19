const Image = ({Src, Alt, classeImg})=>{
    return <img className={classeImg} src={Src} alt={Alt} srcset=""/>
}
export default Image;