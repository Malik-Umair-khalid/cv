function personalInfo(){
    return(
        <>
        
        <h1>Personal Infonmation</h1>
        <ul>       
            <li>Name : Umair</li>
            <li>Contact : 03343247328</li>
            <li>CNIC : 42201-7717224-9</li>
            <li>Gender : Male</li>
            <li>Nationality : Pakistani</li>
            
        </ul>
     
        </>
    )
}
function education(){
    return(
        <>
        <h1>Qualification</h1>
        <ul>
            <li>Matric</li>
            <li>Intermediate</li>
            <li>Web Developing</li>
        </ul>
        </>
    )
}

function experience (){
    return(
        <>
        <h1>Experience</h1>
        <ul>
            <li>Fresh</li>
        </ul>
        </>

    )
}

export {
    personalInfo,
    experience,
    education
}