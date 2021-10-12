import Navbar from '../components/navbar';
import BodyPlayerGame from '../components/bodyPlayerGame'

export default function PlayerGame() {
    return(
        <>
            <Navbar />
            <BodyPlayerGame />
        </>
    );








    // const [image, setImage] = useState({})

    // const handleChange = (e) => {
    //   const select = e.target.files[0];
    //   setImage(select);
    // }
  
    // const submitImage = async () => {
    //   const storage = storageFire
    //   const storageRef = ref(storage, image.name);
  
    //   // 'file' comes from the Blob or File API
    //   const upload = await uploadBytes(storageRef, image);
    //   console.log(upload)
    //   const url = await getDownloadURL(storageRef)
    //   console.log(url)
      
    // }
    // return (
    //   <div>
    //     <input type="file" onChange={handleChange} />
    //     <button onClick = {submitImage}>submit</button>
    //   </div>
    // );
}
