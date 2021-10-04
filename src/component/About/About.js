import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <img src="../../../public/JavaScript frameworks-bro.png" alt="" />
            <h1>ASP / ASP.NET</h1>
            <p>ASP is short for Active Server Pages. It was the first server-side scripting language for Microsoft’s IIS web server. ASP was replaced by ASP.NET, an open-source server-side framework. See: ASP hosting.</p>

            <h1>C</h1>
            <p>If you include its two derivatives, no language has had more use and more impact than C. It is especially important for the development of Operating Systems and other foundational software. Many compilers and interpreters for other languages are written in C.</p>

            <h1>C++</h1>
            <p>Originally “C with Classes,” C++ is, in many ways, simply a more advanced successor to C (though the situation is a lot more complicated than that). C++ was developed to add high-level programming paradigms to C, while retaining the low-level hardware-manipulation capabilities. Many of these additions have been added to C over the years, and the languages are more like two dialects of a single language. See: C Programming.</p>

            <h1>C#</h1>
            <p>Used as the primary language for .NET programming, and much like C++, it is an extension of the C programming language with the major addition being object-oriented capabilities. See C# Resources.</p>

            <h1>Javascript</h1>
            <p>ASP is short for Active Server Pages. It was the first server-side scripting language for Microsoft’s IIS web server. ASP was replaced by ASP.NET, an open-source server-side framework. See: ASP hostingJavaScript (which has no actual relation to Java), is a scripting language developed originally for use in web browsers. Because of that, it has a built-in facility for dealing with the Document Object Model, the in-memory representation of the content of a webpage. It is the primary programming language for front-end web development. Start your adventure here: JavaScript.</p>
        </div>
    );
};

export default About;