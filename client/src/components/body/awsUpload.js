import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';
import { uploadFile } from 'react-s3';
import { configuration } from '../../store/config'
 
const config = {
    bucketName: 'slumblrapp',
    dirName: 'photos', /* optional */
    region: 'us-east-1',
    accessKeyId: configuration.aws.accessKey,
    secretAccessKey: configuration.aws.secretKey,
}

function Comp({setPhotoUrl}){
    const upload = async(e) => {
        console.log(e.target.files[0])
        const data = await uploadFile( e.target.files[0], config)
        if(data.location){
            setPhotoUrl(data.location)
        }
        
    }

    return(
        <div className="start">
            <input 
                type='file' 
                onChange={upload}
            />
        
        </div>
    )
}

export default Comp
