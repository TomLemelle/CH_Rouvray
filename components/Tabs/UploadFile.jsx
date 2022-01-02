import Image from 'next/image';
import { useRef } from 'react';

const UploadFile = () => {

    const uploadFileRef = useRef(null);
    const handleUpload = () => {
        uploadFileRef.current.click()
    }

    return (
        <>
            <Image className='upload-icon' src='/upload-file.png' alt='upload icon' width={100} height={95} onClick={handleUpload} />
            <div className='upload-help'>faites glisser et déposer des fichiers ici pour les envoyer</div>
            <label className='upload'>
                <input className='upload-field' type='file' name='upload' ref={uploadFileRef} required/>
                <Image src='/file.png' alt='file upload icon' width={24} height={24} /><span className='upload-browse-msg'>Parcourir les fichiers</span>
            </label>
            <div className='upload-information'>Taille maximum: <span>64m</span></div>
        </>  
    )
}

export default UploadFile;