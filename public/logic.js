const video = document.createElement("uservid");
const usercam = document.getElementById("usercam");
const micupBtn = document.getElementById("micupBtn");
const camupBtn = document.getElementById("camupBtn");
userCam.appendChild(video);

async function requestMediaAccess(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        console.log("✅ Access granted!");
    } 
    catch (err){
        console.error("❌ Access denied or unavailable:", err);
    }
}

function toggleMic(){
    if (micupBtn.querySelector('img').src === "https://raw.githubusercontent.com/Alexsanderbuadze2012/VoXY_Contnet/b8f9d8fcc5c10083358b0f379878da316fadec18/micOff_Icon.svg"){
        micupBtn.querySelector('img').src = "https://raw.githubusercontent.com/Alexsanderbuadze2012/VoXY_Contnet/5cfe54f27318f877ec5efada5db5e3939eb9044f/micOn_Icon.svg";
    } 
    else{
        micupBtn.querySelector('img').src = "https://raw.githubusercontent.com/Alexsanderbuadze2012/VoXY_Contnet/b8f9d8fcc5c10083358b0f379878da316fadec18/micOff_Icon.svg";
    }
}

function toggleCam(){
    if (camupBtn.querySelector('img').src === "https://raw.githubusercontent.com/Alexsanderbuadze2012/VoXY_Contnet/5ed4a4155e5575dee93c4d573e934c5c5f6e055b/camOff_Icon.svg"){
        camupBtn.querySelector('img').src = "https://raw.githubusercontent.com/Alexsanderbuadze2012/VoXY_Contnet/5ed4a4155e5575dee93c4d573e934c5c5f6e055b/camOn_Icon.svg";
    }
    else{
        camupBtn.querySelector('img').src = "https://raw.githubusercontent.com/Alexsanderbuadze2012/VoXY_Contnet/5ed4a4155e5575dee93c4d573e934c5c5f6e055b/camOff_Icon.svg";
    }
}


