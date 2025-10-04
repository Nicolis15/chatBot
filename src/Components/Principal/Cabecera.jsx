import logoImg from '../../assets/logo.svg'
import logoLinkedin from '../../assets/linkedinLogo.svg'
import logogitHub from '../../assets/githubLogo.svg'
import logoPortafolio from '../../assets/portafolioLogo.svg'
import logoGmail from '../../assets/gmailLogo.svg'

export default function Cabecera(){
    return(
        <div class="flex items-center w-full p-5 bg-secundary">
            <div class=" flex felx-col gap-6 items-center w-1/2 ">
                <img src={logoImg} alt='Logo' class='w-15'/>
                <div>
                    <h1 class="font-code-bold lg:text-4xl md:text-2xl">
                        <a class="lg:text-6xl md:text-4xl text-blue-500">N</a>icolas
                        <a> </a>
                        <a  class="lg:text-6xl md:text-4xl text-blue-500">L</a>is 
                        <a> </a>
                        <a  class="lg:text-6xl md:text-4xl text-blue-500">C</a>ruz
                    </h1>
                    <p className=''>Software Developer & Data Engineer</p>
                </div>
                
            </div>

            <div class="flex gap-16 w-full pr-10 justify-end">
                <a href="https://nicolis15.github.io/webNicolas/" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-col items-center justify-center hover:scale-[1.1] transition'>
                        <img src={logoPortafolio} alt='Logo' class='lg:w-10'/>
                        <h1>My Portafolio</h1>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/nicolasliscruz/" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-col items-center justify-center hover:scale-[1.1] transition'>
                        <img src={logoLinkedin} alt='Logo' class='lg:w-10'/>
                        <h1>Linkedin</h1>
                    </div>
                </a>
                
                <a href="https://github.com/Nicolis15" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-col items-center justify-center hover:scale-[1.1] transition'>
                        <img src={logogitHub} alt='Logo' class='lg:w-10'/>
                        <h1>GitHub</h1>
                    </div>
                </a>

                <a href="mailto:Nicolis1415@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-col items-center justify-center hover:scale-[1.1] transition'>
                        <img src={logoGmail} alt='Logo' class='w-10'/>
                        <h1>Gmail</h1>
                    </div>
                </a>
            </div>

            
        </div>  
    )
}