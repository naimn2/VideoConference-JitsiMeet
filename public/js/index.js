// const canvas = document.querySelector("canvas")
const localVideo = document.getElementById('localVideo')

var domain = "meet.jit.si";
var options = {
    roomName: "MeetMe",
    width: 1080,
    height: 810,
    parentNode: undefined,
    devices: {
        audioInput: 'localAudioInput',
        audioOutput: 'localAudioOutput',
        videoInput: 'localVideo'
    },
    configOverwrite: {},
    interfaceConfigOverwrite: {}
}
var api = new JitsiMeetExternalAPI(domain, options)
api.executeCommand('displayName', 'Nickname')

// api.setVideoInputDevice(deviceLabel, deviceId);

api.addListener("videoConferenceJoined", () => {
    console.log("ONJOINED ==========> ")

    // const iframe = api.getIFrame()
    // var localVideo = iframe.contentWindow.document.getElementById('largeVideo')
    // console.log("ONJOINED: LOCAL VIDEO ==========> ", localVideo)

    api.getCurrentDevices().then(devices => {
        console.log("DEVICES =========> ", devices);
    })

    // ============================================================================>

    // setInterval(async () => {

    //     api.captureLargeVideoScreenshot().then(data => {
    //         // console.log("data url = ", data.dataURL);
    //         var ctx = canvas.getContext("2d");
    //         var image = new Image();
    //         image.onload = function () {
    //             ctx.drawImage(image, 0, 0);
    //         };
    //         image.src = data.dataURL;
    //     })

    // }, 100)

    // =============================================================================>

    // api.getLivestreamUrl().then(livestreamData => {
    //     // livestreamData = {
    //     //     livestreamUrl: 'livestreamUrl'
    //     // }
    //     console.log("LIVE STREAM URL ==============> ", livestreamData.livestreamUrl);
    // });
})

navigator.mediaDevices.getUserMedia({
    video: {}, audio: false
}).then(localStream => {
    console.log("YEY BERHASIL");
    localVideo.srcObject = localStream;
}, err => console.log("YAAH GAGAL", err));
