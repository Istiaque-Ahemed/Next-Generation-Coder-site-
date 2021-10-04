import React from 'react';
import './Programar.css';
import img1 from './img/Anders+Hejlsberg.webp';
import img2 from './img/Bjarne+Stroustrup.webp';
import img3 from './img/Brian+Kernighan.webp';
import img4 from './img/Dennis+Ritchie.jpg';
import img5 from './img/James+Gosling.webp';
import img6 from './img/Linus+Torvalds.webp';
import img7 from './img/Tim+Berners-Lee.webp';


const Programar = () => {
    return (
        
        <div className="programar">
        <div>
            
            <img src={img1} alt="" />
            <h2>Anders Hejlsberg</h2>
            <p>Anders Hejlsberg is a prominent Danish software engineer who co-designed several popular and commercially successful programming languages and development tools. He is creator of popular programming language C#. He was the original author of Turbo Pascal and the chief architect of Delphi. He currently works for Microsoft as the lead architect of C# and core developer on TypeScript.</p>
        </div>
        <div>
            <img src={img2} alt="" />
            <h2>Bjarne Stroustrup</h2>
            <p>Bjarne Stroustrup is a Danish computer scientist, most notable for the creation and development of the widely used C++ programming language. He is a Distinguished Research Professor and holds the College of Engineering Chair in Computer Science at Texas A&M University, a visiting professor at Columbia University, and works at Morgan Stanley.</p>
        </div>
        <div>
            <img src={img3} alt="" />
            <h2>Brian Kernighan</h2>
            <p>Brian Wilson Kernighan is a Canadian computer scientist who worked at Bell Labs alongside Unix creators Ken Thompson and Dennis Ritchie and contributed to the development of Unix. He is also coauthor of the AWK and AMPL programming languages. Kernighan’s name became widely known through co-authorship of the first book on the C programming language with Dennis Ritchie.</p>
        </div>
        <div>
            <img src={img4} alt="" />
            <h2>Dennis Ritchie</h2>
            <p>Dennis MacAlistair Ritchie was an American computer scientist who “helped shape the digital era”. He created the C programming language and with long-time colleague Ken Thompson, the Unix operating system. Ritchie and Thompson received the Turing Award from the ACM in 1983, the Hamming Medal from the IEEE in 1990 and the National Medal of Technology from President Clinton in 1999. Ritchie was the head of Lucent Technologies System Software Research Department when he retired in 2007.</p>
        </div>
        <div>
            <img src={img5} alt="" />
            <h2>James Gosling</h2>
            <p>James Arthur Gosling is a Canadian computer scientist, best known as the father of the Java programming language. James has also made major contributions to several other software systems, such as NeWS and Gosling Emacs. Due to his extra-ordinary achievements Gosling was elected to Foreign Associate member of the United States National Academy of Engineering.</p>
        </div>
        <div>
            <img src={img6} alt="" />
            <h2>Linus Torvalds</h2>
            <p>Linus Benedict Torvalds is a Finnish American software engineer, who was the principal force behind the development of the Linux kernel. He later became the chief architect of the Linux kernel, and now acts as the project’s coordinator. He also created the revision control system Git as well as the diving log software Subsurface. He was honored, along with Shinya Yamanaka, with the 2012 Millennium Technology Prize by the Technology Academy Finland in recognition of his creation of a new open source operating system for computers leading to the widely used Linux kernel.</p>
        </div>
        <div>
            <img src={img7} alt="" />
            <h2>Tim Berners-Lee</h2>
            <p>Sir Timothy John “Tim” Berners-Lee also known as “TimBL,” is a British computer scientist, best known as the inventor of the World Wide Web. He made a proposal for an information management system in March 1989 and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet. Berners-Lee is the director of the World Wide Web Consortium (W3C), which oversees the Web’s continued development.</p>
        </div>
        
    </div>
       
    );
};

export default Programar;