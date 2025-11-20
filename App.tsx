import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { LinkTree } from './views/LinkTree';
import { ServiceDetail } from './views/ServiceDetail';
import { Background } from './components/Background';
import { ViewState, ServiceId } from './types';
import { SERVICES_DATA, BACKGROUND_IMAGE_URL, PROFILE_IMAGE_URL, BACKGROUND_MUSIC_URL } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  
  // Global Image State
  const [bgImage, setBgImage] = useState(BACKGROUND_IMAGE_URL);
  const [profileImage, setProfileImage] = useState(PROFILE_IMAGE_URL);
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Initialize state with the constant data so we can modify it
  const [servicesData, setServicesData] = useState(SERVICES_DATA);

  const navigateToService = (id: ServiceId) => setCurrentView(id);
  const navigateToHome = () => setCurrentView('home');

  // --- AUDIO HANDLER ---
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Attempt autoplay on mount (usually blocked by browsers, but good to try)
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked, waiting for user interaction");
        }
      }
    };
    playAudio();
  }, []);

  // --- HANDLERS FOR GLOBAL IMAGES ---
  const handleUpdateBackground = (file: File) => {
    const url = URL.createObjectURL(file);
    setBgImage(url);
  };

  const handleUpdateProfile = (file: File) => {
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  };

  // --- HANDLERS FOR SERVICE DETAILS ---
  // Function to handle image uploads from the ServiceDetail view
  const handleImageUpdate = (imageIndex: number, file: File) => {
    if (currentView === 'home') return;

    // Create a local URL for the uploaded file
    const newImageUrl = URL.createObjectURL(file);

    setServicesData((prevData) => ({
      ...prevData,
      [currentView]: {
        ...prevData[currentView],
        gallery: prevData[currentView].gallery?.map((img, idx) => 
          idx === imageIndex ? newImageUrl : img
        )
      }
    }));
  };

  // Function to handle price tag updates
  const handlePriceUpdate = (newPrice: string) => {
    if (currentView === 'home') return;
    
    setServicesData((prevData) => ({
      ...prevData,
      [currentView]: {
        ...prevData[currentView],
        priceTag: newPrice
      }
    }));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Global Background */}
      <Background imageUrl={bgImage} />

      {/* Background Music Player */}
      <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} loop />
      
      {/* Music Control Button */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-110 hover:bg-white/20 active:scale-95"
        title={isPlaying ? "Pausar Música" : "Reproducir Música"}
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>

      {/* Main Content Area */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md transition-all duration-500 ease-in-out">
          {currentView === 'home' ? (
            <LinkTree 
              onNavigate={navigateToService} 
              profileImage={profileImage}
              onUpdateProfileImage={handleUpdateProfile}
              onUpdateBackgroundImage={handleUpdateBackground}
            />
          ) : (
            <ServiceDetail 
              onBack={navigateToHome} 
              data={servicesData[currentView]}
              onImageUpdate={handleImageUpdate}
              onPriceUpdate={handlePriceUpdate}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
