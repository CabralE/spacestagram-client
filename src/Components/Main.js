
const Main = (props) => {
    // deconstructing prop
    const nasaInfo = props.nasaInfo
    console.log('props: ', nasaInfo)
    return (
    <main>
        <h1>Spacestagram</h1>
        <h2>Brough to you by NASA's image API</h2>
        <h2>Image Title: {nasaInfo.title}</h2>
        <h3>Captured on: {nasaInfo.date}</h3>
        <h4>copyright: {nasaInfo.copyright}</h4>
        <img src={nasaInfo.hdurl} alt="hdImage" />
        <p>{nasaInfo.explanation}</p>
        <h6>Like button</h6>
    </main>

    )
}

export default Main

    // const loaded = () => {
    //     return object.map(ele => {
    //         <h1>{ele.title}</h1>
    //     })
    // }

    // const loading = () => {
    //     return object.map(ele => {
    //         <h1>{ele.title}</h1>
    //     })
    // }