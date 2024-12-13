import React, { useEffect, useRef, useState } from 'react';
import { Video, VideoOff, Mic, MicOff, PhoneOff } from 'lucide-react';

const VideoConference = ({ roomId }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  useEffect(() => {
    const initWebRTC = async () => {
      try {
        // Obtenir l'accès à la caméra et au micro
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        });
        
        localVideoRef.current.srcObject = stream;
        setLocalStream(stream);

        // Configuration du peer connection
        const configuration = {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            // Ajouter des TURN servers pour une meilleure connectivité
          ]
        };

        const pc = new RTCPeerConnection(configuration);

        // Ajouter les tracks du stream local
        stream.getTracks().forEach(track => {
          pc.addTrack(track, stream);
        });

        // Gestion des tracks distants
        pc.ontrack = (event) => {
          remoteVideoRef.current.srcObject = event.streams[0];
        };

        setPeerConnection(pc);

        // Signaling pour établir la connexion 
        // (à implémenter côté serveur)
        pc.onicecandidate = (event) => {
          if (event.candidate) {
            // Envoyer le candidate au serveur
            // sendSignalingMessage(event.candidate);
          }
        };

      } catch (error) {
        console.error("Erreur d'accès aux média :", error);
      }
    };

    initWebRTC();

    return () => {
      // Nettoyer les ressources
      localStream?.getTracks().forEach(track => track.stop());
      peerConnection?.close();
    };
  }, [roomId]);

  const toggleVideo = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setVideoEnabled(videoTrack.enabled);
    }
  };

  const toggleAudio = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setAudioEnabled(audioTrack.enabled);
    }
  };

  const endCall = () => {
    // Logique de fin d'appel
    localStream?.getTracks().forEach(track => track.stop());
    peerConnection?.close();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-4 p-4">
          {/* Vidéo locale */}
          <div className="bg-black rounded-xl relative">
            <video 
              ref={localVideoRef} 
              autoPlay 
              muted 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button 
                onClick={toggleVideo}
                className={`p-2 rounded-full ${videoEnabled ? 'bg-white/20' : 'bg-red-500/70'}`}
              >
                {videoEnabled ? <Video className="text-white" /> : <VideoOff className="text-white" />}
              </button>
              <button 
                onClick={toggleAudio}
                className={`p-2 rounded-full ${audioEnabled ? 'bg-white/20' : 'bg-red-500/70'}`}
              >
                {audioEnabled ? <Mic className="text-white" /> : <MicOff className="text-white" />}
              </button>
            </div>
          </div>

          {/* Vidéo distante */}
          <div className="bg-black rounded-xl">
            <video 
              ref={remoteVideoRef} 
              autoPlay 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Bouton de fin d'appel */}
        <div className="w-full flex justify-center py-4">
          <button 
            onClick={endCall}
            className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-red-600 transition"
          >
            <PhoneOff />
            <span>Terminer l'appel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoConference;